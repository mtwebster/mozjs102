// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

use inherent::inherent;
use std::sync::{Arc, RwLock};

use glean_core::metrics::{DistributionData, MetricType, TimeUnit, TimerId};
use glean_core::ErrorType;

use crate::dispatcher;

// We need to wrap the glean-core type: otherwise if we try to implement
// the trait for the metric in `glean_core::metrics` we hit error[E0117]:
// only traits defined in the current crate can be implemented for arbitrary
// types.

/// Developer-facing API for recording timing distribution metrics.
///
/// Instances of this class type are automatically generated by the parsers
/// at build time, allowing developers to record values that were previously
/// registered in the metrics.yaml file.
#[derive(Clone)]
pub struct TimingDistributionMetric(
    pub(crate) Arc<RwLock<glean_core::metrics::TimingDistributionMetric>>,
);

impl TimingDistributionMetric {
    /// The public constructor used by automatically generated metrics.
    pub fn new(meta: glean_core::CommonMetricData, time_unit: TimeUnit) -> Self {
        Self(Arc::new(RwLock::new(
            glean_core::metrics::TimingDistributionMetric::new(meta, time_unit),
        )))
    }

    /// Accumulates the provided samples in the metric.
    ///
    /// # Arguments
    ///
    /// * `samples` - A list of samples recorded by the metric.
    ///               Samples must be in nanoseconds.
    ///
    /// ## Notes
    ///
    /// Reports an [`ErrorType::InvalidOverflow`] error for samples that
    /// are longer than `MAX_SAMPLE_TIME`.
    pub fn accumulate_raw_samples_nanos(&self, samples: Vec<u64>) {
        let metric = Arc::clone(&self.0);
        crate::launch_with_glean(move |glean| {
            metric
                .write()
                .unwrap()
                .accumulate_raw_samples_nanos(glean, &samples);
        });
    }
}

#[inherent(pub)]
impl glean_core::traits::TimingDistribution for TimingDistributionMetric {
    fn start(&self) -> TimerId {
        let start_time = time::precise_time_ns();
        self.0.write().unwrap().set_start(start_time)
    }

    fn stop_and_accumulate(&self, id: TimerId) {
        let stop_time = time::precise_time_ns();
        let metric = Arc::clone(&self.0);
        crate::launch_with_glean(move |glean| {
            metric
                .write()
                .unwrap()
                .set_stop_and_accumulate(glean, id, stop_time)
        });
    }

    fn cancel(&self, id: TimerId) {
        let metric = Arc::clone(&self.0);
        dispatcher::launch(move || metric.write().unwrap().cancel(id));
    }

    fn test_get_value<'a, S: Into<Option<&'a str>>>(
        &self,
        ping_name: S,
    ) -> Option<DistributionData> {
        crate::block_on_dispatcher();

        crate::with_glean(|glean| {
            // The order of taking these locks matter. Glean must be first.
            let inner = self
                .0
                .read()
                .expect("Lock poisoned for timing distribution metric on test_get_value.");
            let queried_ping_name = ping_name
                .into()
                .unwrap_or_else(|| &inner.meta().send_in_pings[0]);

            inner.test_get_value(glean, queried_ping_name)
        })
    }

    fn test_get_num_recorded_errors<'a, S: Into<Option<&'a str>>>(
        &self,
        error: ErrorType,
        ping_name: S,
    ) -> i32 {
        crate::block_on_dispatcher();

        crate::with_glean_mut(|glean| {
            glean_core::test_get_num_recorded_errors(
                &glean,
                self.0.read().unwrap().meta(),
                error,
                ping_name.into(),
            )
            .unwrap_or(0)
        })
    }
}

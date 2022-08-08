// |reftest| skip -- Temporal is not supported
// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.until
description: Fallback value for smallestUnit option
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const earlier = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 0, 0, 0);
const later = new Temporal.PlainDateTime(2000, 5, 3, 13, 35, 57, 987, 654, 321);

const explicit = earlier.until(later, { smallestUnit: undefined });
TemporalHelpers.assertDuration(explicit, 0, 0, 0, 1, 1, 1, 1, 987, 654, 321, "default smallestUnit is nanosecond");
const implicit = earlier.until(later, {});
TemporalHelpers.assertDuration(implicit, 0, 0, 0, 1, 1, 1, 1, 987, 654, 321, "default smallestUnit is nanosecond");

reportCompare(0, 0);

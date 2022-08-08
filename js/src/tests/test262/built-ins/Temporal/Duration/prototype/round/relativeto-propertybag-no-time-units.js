// |reftest| skip -- Temporal is not supported
// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.round
description: Missing time units in relativeTo property bag default to 0
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const instance = new Temporal.Duration(1, 0, 0, 0, 24);

let relativeTo = { year: 2000, month: 1, day: 1 };
const result = instance.round({ largestUnit: "years", relativeTo });
TemporalHelpers.assertDuration(result, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, "missing time units default to 0");

reportCompare(0, 0);

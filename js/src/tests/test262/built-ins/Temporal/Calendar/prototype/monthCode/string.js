// |reftest| skip -- Temporal is not supported
// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.monthCode
description: >
  Temporal.Calendar.prototype.monthCode will take ISO8601 string and return
  the value of the monthCode.
info: |
  5. If Type(temporalDateLike) is not Object or temporalDateLike does not have
    an [[InitializedTemporalDate]] or [[InitializedTemporalYearMonth]] internal
    slot, then
    a. Set temporalDateLike to ? ToTemporalDate(temporalDateLike).
  6. Return ! ISOYear(temporalDateLike).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");
assert.sameValue(
  cal.monthCode("2019-03-15"),
  "M03",
  'cal.monthCode("2019-03-15") must return "M03"'
);

reportCompare(0, 0);

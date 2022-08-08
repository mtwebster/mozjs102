// |reftest| skip -- Temporal is not supported
// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.from
description: Property bag with offset property is rejected if offset does not agree with time zone
features: [Temporal]
---*/

const timeZone = new Temporal.TimeZone("+01:00");

const properties = { year: 2021, month: 10, day: 28, offset: "-07:00", timeZone };
assert.throws(RangeError, () => Temporal.ZonedDateTime.from(properties), "offset property not matching time zone is rejected");

reportCompare(0, 0);

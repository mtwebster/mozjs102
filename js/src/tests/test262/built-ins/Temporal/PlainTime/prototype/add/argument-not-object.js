// |reftest| skip -- Temporal is not supported
// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaintime.prototype.add
description: Passing a primitive other than string to add() throws
features: [Symbol, Temporal]
---*/

const instance = Temporal.PlainTime.from({ hour: 12, minute: 34, second: 56, millisecond: 987, microsecond: 654, nanosecond: 321 });
assert.throws(RangeError, () => instance.add(undefined), "undefined");
assert.throws(RangeError, () => instance.add(null), "null");
assert.throws(RangeError, () => instance.add(true), "boolean");
assert.throws(RangeError, () => instance.add(""), "empty string");
assert.throws(TypeError, () => instance.add(Symbol()), "Symbol");
assert.throws(RangeError, () => instance.add(7), "number");
assert.throws(RangeError, () => instance.add(7n), "bigint");

reportCompare(0, 0);

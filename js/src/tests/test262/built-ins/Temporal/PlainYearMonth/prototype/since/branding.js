// |reftest| skip -- Temporal is not supported
// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.since
description: Throw a TypeError if the receiver is invalid
features: [Symbol, Temporal]
---*/

const since = Temporal.PlainYearMonth.prototype.since;

assert.sameValue(typeof since, "function");

assert.throws(TypeError, () => since.call(undefined), "undefined");
assert.throws(TypeError, () => since.call(null), "null");
assert.throws(TypeError, () => since.call(true), "true");
assert.throws(TypeError, () => since.call(""), "empty string");
assert.throws(TypeError, () => since.call(Symbol()), "symbol");
assert.throws(TypeError, () => since.call(1), "1");
assert.throws(TypeError, () => since.call({}), "plain object");
assert.throws(TypeError, () => since.call(Temporal.PlainYearMonth), "Temporal.PlainYearMonth");
assert.throws(TypeError, () => since.call(Temporal.PlainYearMonth.prototype), "Temporal.PlainYearMonth.prototype");

reportCompare(0, 0);

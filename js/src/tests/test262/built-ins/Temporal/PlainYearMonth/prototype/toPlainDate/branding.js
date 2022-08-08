// |reftest| skip -- Temporal is not supported
// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.toplaindate
description: Throw a TypeError if the receiver is invalid
features: [Symbol, Temporal]
---*/

const toPlainDate = Temporal.PlainYearMonth.prototype.toPlainDate;

assert.sameValue(typeof toPlainDate, "function");

assert.throws(TypeError, () => toPlainDate.call(undefined), "undefined");
assert.throws(TypeError, () => toPlainDate.call(null), "null");
assert.throws(TypeError, () => toPlainDate.call(true), "true");
assert.throws(TypeError, () => toPlainDate.call(""), "empty string");
assert.throws(TypeError, () => toPlainDate.call(Symbol()), "symbol");
assert.throws(TypeError, () => toPlainDate.call(1), "1");
assert.throws(TypeError, () => toPlainDate.call({}), "plain object");
assert.throws(TypeError, () => toPlainDate.call(Temporal.PlainYearMonth), "Temporal.PlainYearMonth");
assert.throws(TypeError, () => toPlainDate.call(Temporal.PlainYearMonth.prototype), "Temporal.PlainYearMonth.prototype");

reportCompare(0, 0);

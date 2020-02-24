// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.map
es5id: 15.4.4.19-5-7
description: Array.prototype.map - built-in functions can be used as thisArg
---*/

function callbackfn(val, idx, obj) {
  return this === eval;
}

var testResult = [11].map(callbackfn, eval);

assert.sameValue(testResult[0], true, 'testResult[0]');

reportCompare(0, 0);

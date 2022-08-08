// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToInteger from end
esid: sec-array.prototype.slice
description: ToInteger use ToNumber
---*/

var x = [0, 1, 2, 3, 4];
var arr = x.slice(0, {
  valueOf: function() {
    return 3
  },
  toString: function() {
    return 0
  }
});

arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  throw new Test262Error('#1: var x = [0,1,2,3,4]; var arr = x.slice(0,{valueOf: function() {return 3}, toString: function() {return 0}}); arr is Array object. Actual: ' + (arr.getClass()));
}

if (arr.length !== 3) {
  throw new Test262Error('#2: var x = [0,1,2,3,4]; var arr = x.slice(0,{valueOf: function() {return 3}, toString: function() {return 0}}); arr.length === 3. Actual: ' + (arr.length));
}

if (arr[0] !== 0) {
  throw new Test262Error('#3: var x = [0,1,2,3,4]; var arr = x.slice(0,{valueOf: function() {return 3}, toString: function() {return 0}}); arr[0] === 0. Actual: ' + (arr[0]));
}

if (arr[1] !== 1) {
  throw new Test262Error('#4: var x = [0,1,2,3,4]; var arr = x.slice(0,{valueOf: function() {return 3}, toString: function() {return 0}}); arr[1] === 1. Actual: ' + (arr[1]));
}

if (arr[2] !== 2) {
  throw new Test262Error('#5: var x = [0,1,2,3,4]; var arr = x.slice(0,{valueOf: function() {return 3}, toString: function() {return 0}}); arr[2] === 2. Actual: ' + (arr[2]));
}

if (arr[3] !== undefined) {
  throw new Test262Error('#6: var x = [0,1,2,3,4]; var arr = x.slice(0,{valueOf: function() {return 3}, toString: function() {return 0}}); arr[3] === undefined. Actual: ' + (arr[3]));
}

reportCompare(0, 0);

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-277
description: >
    Object.defineProperties - 'O' is an Array, 'P' is generic own
    accessor property of 'O', test TypeError is thrown when updating
    the [[Configurable]] attribute value of 'P' which is defined as
    non-configurable (15.4.5.1 step 5)
includes: [propertyHelper.js]
---*/


var arr = [];

function set_fun(value) {
  arr.setVerifyHelpProp = value;
}
Object.defineProperty(arr, "property", {
  set: set_fun,
  configurable: false
});

try {
  Object.defineProperties(arr, {
    "property": {
      configurable: true
    }
  });
  throw new Test262Error("Expected an exception.");
} catch (e) {
  verifyWritable(arr, "property", "setVerifyHelpProp");

  verifyNotEnumerable(arr, "property");

  verifyNotConfigurable(arr, "property");

  if (!(e instanceof TypeError)) {
    throw new Test262Error("Expected TypeError, got " + e);
  }

}

reportCompare(0, 0);

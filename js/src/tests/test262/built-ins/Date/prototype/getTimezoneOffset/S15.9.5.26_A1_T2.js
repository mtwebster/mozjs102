// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.prototype property "getTimezoneOffset" has { DontEnum }
    attributes
esid: sec-date.prototype.gettimezoneoffset
description: Checking absence of DontDelete attribute
---*/
assert.notSameValue(
  delete Date.prototype.getTimezoneOffset,
  false,
  'The value of delete Date.prototype.getTimezoneOffset is not false'
);

assert(
  !Date.prototype.hasOwnProperty('getTimezoneOffset'),
  'The value of !Date.prototype.hasOwnProperty(\'getTimezoneOffset\') is expected to be true'
);

// TODO: Convert to verifyProperty() format.

reportCompare(0, 0);

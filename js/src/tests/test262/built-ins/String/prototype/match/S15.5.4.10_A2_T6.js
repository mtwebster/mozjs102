// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: match returns array as specified in 15.10.6.2
es5id: 15.5.4.10_A2_T6
description: >
    Regular expression is /([\d]{5})([-\ ]?[\d]{4})?$/. Last match is
    void 0
---*/

var __string = "Boston, Mass. 02134";

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/)[0] !== "02134") {
  throw new Test262Error('#1: __string = "Boston, Mass. 02134"; __string.match(/([\\d]{5})([-\\ ]?[\\d]{4})?$/)[0]=== "02134". Actual: ' + __string.match(/([\d]{5})([-\ ]?[\d]{4})?$/)[0]);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/)[1] !== "02134") {
  throw new Test262Error('#2: __string = "Boston, Mass. 02134"; __string.match(/([\\d]{5})([-\\ ]?[\\d]{4})?$/)[1]=== "02134". Actual: ' + __string.match(/([\d]{5})([-\ ]?[\d]{4})?$/)[1]);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/)[2] !== void 0) {
  throw new Test262Error('#3: __string = "Boston, Mass. 02134"; __string.match(/([\\d]{5})([-\\ ]?[\\d]{4})?$/)[2]=== void 0. Actual: ' + __string.match(/([\d]{5})([-\ ]?[\d]{4})?$/)[2]);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/).length !== 3) {
  throw new Test262Error('#4: __string = "Boston, Mass. 02134"; __string.match(/([\\d]{5})([-\\ ]?[\\d]{4})?$/).length ===3. Actual: ' + __string.match(/([\d]{5})([-\ ]?[\d]{4})?$/).length);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#5
if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/).index !== 14) {
  throw new Test262Error('#5: __string = "Boston, Mass. 02134"; __string.match(/([\\d]{5})([-\\ ]?[\\d]{4})?$/).index ===14. Actual: ' + __string.match(/([\d]{5})([-\ ]?[\d]{4})?$/).index);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#6
if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/).input !== __string) {
  throw new Test262Error('#6: __string = "Boston, Mass. 02134"; __string.match(/([\\d]{5})([-\\ ]?[\\d]{4})?$/).input ===__string. Actual: ' + __string.match(/([\d]{5})([-\ ]?[\d]{4})?$/).input);
}
//
//////////////////////////////////////////////////////////////////////////////

reportCompare(0, 0);

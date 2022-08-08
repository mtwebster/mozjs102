// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: When length of searchString less than length of ToString(this) -1 returns
es5id: 15.5.4.7_A2_T1
description: Call "abcd".indexOf("abcdab") and check result
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("abcd".indexOf("abcdab") !== -1) {
  throw new Test262Error('#1: "abcd".indexOf("abcdab")===-1. Actual: ' + ("abcd".indexOf("abcdab")));
}
//
//////////////////////////////////////////////////////////////////////////////

reportCompare(0, 0);

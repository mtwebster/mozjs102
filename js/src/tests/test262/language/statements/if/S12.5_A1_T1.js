// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: 1, true, non-empty string in expression is evaluated to true
es5id: 12.5_A1_T1
description: Using "if" without "else" construction
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(!(1))
	throw new Test262Error('#1: 1 in expression is evaluated to true');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(!(true))
	throw new Test262Error('#2: true in expression is evaluated to true');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(!("1"))
	throw new Test262Error('#3: "1" in expression is evaluated to true');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if(!("A"))
	throw new Test262Error('#4: "A" in expression is evaluated to true');
//
//////////////////////////////////////////////////////////////////////////////

reportCompare(0, 0);

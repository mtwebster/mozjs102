// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    1, true, non-empty string and others in expression is evaluated to true
    when using operator "new"
es5id: 12.5_A1.2_T1
description: Using "if" without "else" construction
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(!(new Number(1)))
	throw new Test262Error('#1: new 1 in expression is evaluated to true');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(!(new Boolean(true)))
	throw new Test262Error('#2: new true in expression is evaluated to true');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(!(new String("1")))
	throw new Test262Error('#3: new "1" in expression is evaluated to true');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if(!(new String("A")))
	throw new Test262Error('#4: new "A" in expression is evaluated to true');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#5
if(!(new Boolean(false)))
    throw new Test262Error('#2: new false in expression is evaluated to true ');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#6
if(!(new Number(NaN)))
    throw new Test262Error('#6: new NaN in expression is evaluated to true ');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#7
if(!(new Number(null)))
  throw new Test262Error('#7: new null in expression is evaluated to true ');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#8
if(!(new String(undefined)))
  throw new Test262Error('#8: new undefined in expression is evaluated to true ');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#9
if(!(new String("")))
    throw new Test262Error('#9: new empty string in expression is evaluated to true ');
//
//////////////////////////////////////////////////////////////////////////////

reportCompare(0, 0);

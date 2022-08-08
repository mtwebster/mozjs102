// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Parentheses of the form ( Disjunction ) serve both to group the components of the Disjunction pattern together and to save the result of the match.
    The result can be used either in a backreference (\ followed by a nonzero decimal number),
    referenced in a replace string,
    or returned as part of an array from the regular expression matching function
es5id: 15.10.2.8_A3_T15
description: "see bug http:bugzilla.mozilla.org/show_bug.cgi?id=119909"
---*/

var __strOriginal = "hello";
var __openParen = '(';
var __closeParen = ')';
var __pattern = '';
var numParens = 200;

for (var i=0; i<numParens; i++)
    __pattern += __openParen;

__pattern += __strOriginal;

for (i=0; i<numParens; i++) 
    __pattern += __closeParen;

var __re = new RegExp(__pattern);

var __executed = __re.exec(__strOriginal);

var __expected = [];
for (var i=0; i<=numParens; i++)
    __expected.push(__strOriginal);
__expected.index = 0;
__expected.input = __strOriginal;

assert.sameValue(
  __executed.length,
  __expected.length,
  'The value of __executed.length is expected to equal the value of __expected.length'
);

assert.sameValue(
  __executed.index,
  __expected.index,
  'The value of __executed.index is expected to equal the value of __expected.index'
);

assert.sameValue(
  __executed.input,
  __expected.input,
  'The value of __executed.input is expected to equal the value of __expected.input'
);

for(var index=0; index<__expected.length; index++) {
  assert.sameValue(
    __executed[index],
    __expected[index],
    'The value of __executed[index] is expected to equal the value of __expected[index]'
  );
}

reportCompare(0, 0);

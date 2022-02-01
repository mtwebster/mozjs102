// |reftest| async
// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
es6id: S25.4.4.3_A7.1_T2
author: Sam Mikes
description: Promise.race([p1, p2]) settles when first settles
includes: [promiseHelper.js]
flags: [async]
---*/

var sequence = [];

var p1 = Promise.resolve(1),
  p2 = new Promise(function() {}),
  p = Promise.race([p1, p2]);

sequence.push(1);

p.then(function(arg) {
  if (arg !== 1) {
    $ERROR("Expected promise to be fulfilled with 1, got " + arg);
  }

  sequence.push(4);
  assert.sameValue(sequence.length, 4);
  checkSequence(sequence, "This happens second");
}).catch($DONE);

Promise.resolve().then(function() {
  sequence.push(3);
  assert.sameValue(sequence.length, 3);
  checkSequence(sequence, "This happens first");
}).then(function() {
  sequence.push(5);
  assert.sameValue(sequence.length, 5);
  checkSequence(sequence, "This happens third");
}).then($DONE, $DONE);

sequence.push(2);

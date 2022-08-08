// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Tamil`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v14.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x000B9C,
    0x000BD0,
    0x000BD7,
    0x001CDA,
    0x00A8F3,
    0x011301,
    0x011303,
    0x011FFF
  ],
  ranges: [
    [0x000951, 0x000952],
    [0x000964, 0x000965],
    [0x000B82, 0x000B83],
    [0x000B85, 0x000B8A],
    [0x000B8E, 0x000B90],
    [0x000B92, 0x000B95],
    [0x000B99, 0x000B9A],
    [0x000B9E, 0x000B9F],
    [0x000BA3, 0x000BA4],
    [0x000BA8, 0x000BAA],
    [0x000BAE, 0x000BB9],
    [0x000BBE, 0x000BC2],
    [0x000BC6, 0x000BC8],
    [0x000BCA, 0x000BCD],
    [0x000BE6, 0x000BFA],
    [0x01133B, 0x01133C],
    [0x011FC0, 0x011FF1]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Tamil}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Tamil}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Taml}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Taml}"
);
testPropertyEscapes(
  /^\p{scx=Tamil}+$/u,
  matchSymbols,
  "\\p{scx=Tamil}"
);
testPropertyEscapes(
  /^\p{scx=Taml}+$/u,
  matchSymbols,
  "\\p{scx=Taml}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x000B84,
    0x000B91,
    0x000B9B,
    0x000B9D,
    0x000BC9,
    0x011302
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000950],
    [0x000953, 0x000963],
    [0x000966, 0x000B81],
    [0x000B8B, 0x000B8D],
    [0x000B96, 0x000B98],
    [0x000BA0, 0x000BA2],
    [0x000BA5, 0x000BA7],
    [0x000BAB, 0x000BAD],
    [0x000BBA, 0x000BBD],
    [0x000BC3, 0x000BC5],
    [0x000BCE, 0x000BCF],
    [0x000BD1, 0x000BD6],
    [0x000BD8, 0x000BE5],
    [0x000BFB, 0x001CD9],
    [0x001CDB, 0x00A8F2],
    [0x00A8F4, 0x00DBFF],
    [0x00E000, 0x011300],
    [0x011304, 0x01133A],
    [0x01133D, 0x011FBF],
    [0x011FF2, 0x011FFE],
    [0x012000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Tamil}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Tamil}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Taml}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Taml}"
);
testPropertyEscapes(
  /^\P{scx=Tamil}+$/u,
  nonMatchSymbols,
  "\\P{scx=Tamil}"
);
testPropertyEscapes(
  /^\P{scx=Taml}+$/u,
  nonMatchSymbols,
  "\\P{scx=Taml}"
);

reportCompare(0, 0);

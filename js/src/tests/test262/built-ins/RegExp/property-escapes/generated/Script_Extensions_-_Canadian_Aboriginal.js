// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Canadian_Aboriginal`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v14.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x001400, 0x00167F],
    [0x0018B0, 0x0018F5],
    [0x011AB0, 0x011ABF]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Canadian_Aboriginal}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Canadian_Aboriginal}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Cans}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Cans}"
);
testPropertyEscapes(
  /^\p{scx=Canadian_Aboriginal}+$/u,
  matchSymbols,
  "\\p{scx=Canadian_Aboriginal}"
);
testPropertyEscapes(
  /^\p{scx=Cans}+$/u,
  matchSymbols,
  "\\p{scx=Cans}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0013FF],
    [0x001680, 0x0018AF],
    [0x0018F6, 0x00DBFF],
    [0x00E000, 0x011AAF],
    [0x011AC0, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Canadian_Aboriginal}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Canadian_Aboriginal}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Cans}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Cans}"
);
testPropertyEscapes(
  /^\P{scx=Canadian_Aboriginal}+$/u,
  nonMatchSymbols,
  "\\P{scx=Canadian_Aboriginal}"
);
testPropertyEscapes(
  /^\P{scx=Cans}+$/u,
  nonMatchSymbols,
  "\\P{scx=Cans}"
);

reportCompare(0, 0);

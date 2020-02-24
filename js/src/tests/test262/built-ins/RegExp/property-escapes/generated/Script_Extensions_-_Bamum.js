// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Bamum`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v12.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00A6A0, 0x00A6F7],
    [0x016800, 0x016A38]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Bamum}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Bamum}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Bamu}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Bamu}"
);
testPropertyEscapes(
  /^\p{scx=Bamum}+$/u,
  matchSymbols,
  "\\p{scx=Bamum}"
);
testPropertyEscapes(
  /^\p{scx=Bamu}+$/u,
  matchSymbols,
  "\\p{scx=Bamu}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00A69F],
    [0x00A6F8, 0x00DBFF],
    [0x00E000, 0x0167FF],
    [0x016A39, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Bamum}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Bamum}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Bamu}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Bamu}"
);
testPropertyEscapes(
  /^\P{scx=Bamum}+$/u,
  nonMatchSymbols,
  "\\P{scx=Bamum}"
);
testPropertyEscapes(
  /^\P{scx=Bamu}+$/u,
  nonMatchSymbols,
  "\\P{scx=Bamu}"
);

reportCompare(0, 0);

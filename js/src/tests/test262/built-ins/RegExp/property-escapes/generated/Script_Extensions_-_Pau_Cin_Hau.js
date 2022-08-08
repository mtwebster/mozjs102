// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Pau_Cin_Hau`
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
    [0x011AC0, 0x011AF8]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Pau_Cin_Hau}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Pau_Cin_Hau}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Pauc}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Pauc}"
);
testPropertyEscapes(
  /^\p{scx=Pau_Cin_Hau}+$/u,
  matchSymbols,
  "\\p{scx=Pau_Cin_Hau}"
);
testPropertyEscapes(
  /^\p{scx=Pauc}+$/u,
  matchSymbols,
  "\\p{scx=Pauc}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x011ABF],
    [0x011AF9, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Pau_Cin_Hau}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Pau_Cin_Hau}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Pauc}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Pauc}"
);
testPropertyEscapes(
  /^\P{scx=Pau_Cin_Hau}+$/u,
  nonMatchSymbols,
  "\\P{scx=Pau_Cin_Hau}"
);
testPropertyEscapes(
  /^\P{scx=Pauc}+$/u,
  nonMatchSymbols,
  "\\P{scx=Pauc}"
);

reportCompare(0, 0);

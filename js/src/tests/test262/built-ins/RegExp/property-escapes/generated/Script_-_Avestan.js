// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Avestan`
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
    [0x010B00, 0x010B35],
    [0x010B39, 0x010B3F]
  ]
});
testPropertyEscapes(
  /^\p{Script=Avestan}+$/u,
  matchSymbols,
  "\\p{Script=Avestan}"
);
testPropertyEscapes(
  /^\p{Script=Avst}+$/u,
  matchSymbols,
  "\\p{Script=Avst}"
);
testPropertyEscapes(
  /^\p{sc=Avestan}+$/u,
  matchSymbols,
  "\\p{sc=Avestan}"
);
testPropertyEscapes(
  /^\p{sc=Avst}+$/u,
  matchSymbols,
  "\\p{sc=Avst}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x010AFF],
    [0x010B36, 0x010B38],
    [0x010B40, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Avestan}+$/u,
  nonMatchSymbols,
  "\\P{Script=Avestan}"
);
testPropertyEscapes(
  /^\P{Script=Avst}+$/u,
  nonMatchSymbols,
  "\\P{Script=Avst}"
);
testPropertyEscapes(
  /^\P{sc=Avestan}+$/u,
  nonMatchSymbols,
  "\\P{sc=Avestan}"
);
testPropertyEscapes(
  /^\P{sc=Avst}+$/u,
  nonMatchSymbols,
  "\\P{sc=Avst}"
);

reportCompare(0, 0);

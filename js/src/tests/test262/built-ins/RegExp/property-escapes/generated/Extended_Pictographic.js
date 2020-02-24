// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Extended_Pictographic`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v12.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x0000A9,
    0x0000AE,
    0x00203C,
    0x002049,
    0x002122,
    0x002139,
    0x002328,
    0x002388,
    0x0023CF,
    0x0024C2,
    0x0025B6,
    0x0025C0,
    0x002714,
    0x002716,
    0x00271D,
    0x002721,
    0x002728,
    0x002744,
    0x002747,
    0x00274C,
    0x00274E,
    0x002757,
    0x0027A1,
    0x0027B0,
    0x0027BF,
    0x002B50,
    0x002B55,
    0x003030,
    0x00303D,
    0x003297,
    0x003299,
    0x01F12F,
    0x01F18E,
    0x01F21A,
    0x01F22F
  ],
  ranges: [
    [0x002194, 0x002199],
    [0x0021A9, 0x0021AA],
    [0x00231A, 0x00231B],
    [0x0023E9, 0x0023F3],
    [0x0023F8, 0x0023FA],
    [0x0025AA, 0x0025AB],
    [0x0025FB, 0x0025FE],
    [0x002600, 0x002605],
    [0x002607, 0x002612],
    [0x002614, 0x002685],
    [0x002690, 0x002705],
    [0x002708, 0x002712],
    [0x002733, 0x002734],
    [0x002753, 0x002755],
    [0x002763, 0x002767],
    [0x002795, 0x002797],
    [0x002934, 0x002935],
    [0x002B05, 0x002B07],
    [0x002B1B, 0x002B1C],
    [0x01F000, 0x01F0FF],
    [0x01F10D, 0x01F10F],
    [0x01F16C, 0x01F171],
    [0x01F17E, 0x01F17F],
    [0x01F191, 0x01F19A],
    [0x01F1AD, 0x01F1E5],
    [0x01F201, 0x01F20F],
    [0x01F232, 0x01F23A],
    [0x01F23C, 0x01F23F],
    [0x01F249, 0x01F3FA],
    [0x01F400, 0x01F53D],
    [0x01F546, 0x01F64F],
    [0x01F680, 0x01F6FF],
    [0x01F774, 0x01F77F],
    [0x01F7D5, 0x01F7FF],
    [0x01F80C, 0x01F80F],
    [0x01F848, 0x01F84F],
    [0x01F85A, 0x01F85F],
    [0x01F888, 0x01F88F],
    [0x01F8AE, 0x01F8FF],
    [0x01F90C, 0x01F93A],
    [0x01F93C, 0x01F945],
    [0x01F947, 0x01FFFD]
  ]
});
testPropertyEscapes(
  /^\p{Extended_Pictographic}+$/u,
  matchSymbols,
  "\\p{Extended_Pictographic}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x0025FF,
    0x002606,
    0x002613,
    0x002713,
    0x002715,
    0x00274D,
    0x002756,
    0x003298,
    0x01F23B,
    0x01F93B,
    0x01F946
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0000A8],
    [0x0000AA, 0x0000AD],
    [0x0000AF, 0x00203B],
    [0x00203D, 0x002048],
    [0x00204A, 0x002121],
    [0x002123, 0x002138],
    [0x00213A, 0x002193],
    [0x00219A, 0x0021A8],
    [0x0021AB, 0x002319],
    [0x00231C, 0x002327],
    [0x002329, 0x002387],
    [0x002389, 0x0023CE],
    [0x0023D0, 0x0023E8],
    [0x0023F4, 0x0023F7],
    [0x0023FB, 0x0024C1],
    [0x0024C3, 0x0025A9],
    [0x0025AC, 0x0025B5],
    [0x0025B7, 0x0025BF],
    [0x0025C1, 0x0025FA],
    [0x002686, 0x00268F],
    [0x002706, 0x002707],
    [0x002717, 0x00271C],
    [0x00271E, 0x002720],
    [0x002722, 0x002727],
    [0x002729, 0x002732],
    [0x002735, 0x002743],
    [0x002745, 0x002746],
    [0x002748, 0x00274B],
    [0x00274F, 0x002752],
    [0x002758, 0x002762],
    [0x002768, 0x002794],
    [0x002798, 0x0027A0],
    [0x0027A2, 0x0027AF],
    [0x0027B1, 0x0027BE],
    [0x0027C0, 0x002933],
    [0x002936, 0x002B04],
    [0x002B08, 0x002B1A],
    [0x002B1D, 0x002B4F],
    [0x002B51, 0x002B54],
    [0x002B56, 0x00302F],
    [0x003031, 0x00303C],
    [0x00303E, 0x003296],
    [0x00329A, 0x00DBFF],
    [0x00E000, 0x01EFFF],
    [0x01F100, 0x01F10C],
    [0x01F110, 0x01F12E],
    [0x01F130, 0x01F16B],
    [0x01F172, 0x01F17D],
    [0x01F180, 0x01F18D],
    [0x01F18F, 0x01F190],
    [0x01F19B, 0x01F1AC],
    [0x01F1E6, 0x01F200],
    [0x01F210, 0x01F219],
    [0x01F21B, 0x01F22E],
    [0x01F230, 0x01F231],
    [0x01F240, 0x01F248],
    [0x01F3FB, 0x01F3FF],
    [0x01F53E, 0x01F545],
    [0x01F650, 0x01F67F],
    [0x01F700, 0x01F773],
    [0x01F780, 0x01F7D4],
    [0x01F800, 0x01F80B],
    [0x01F810, 0x01F847],
    [0x01F850, 0x01F859],
    [0x01F860, 0x01F887],
    [0x01F890, 0x01F8AD],
    [0x01F900, 0x01F90B],
    [0x01FFFE, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Extended_Pictographic}+$/u,
  nonMatchSymbols,
  "\\P{Extended_Pictographic}"
);

reportCompare(0, 0);

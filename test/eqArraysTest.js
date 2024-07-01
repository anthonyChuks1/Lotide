const assertArraysEqual = require ("../assertArraysEqual");
const eqArrays = require ("../eqArrays");

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([1, 3, 3], [1, 2, 3]), true); // => should FAIL
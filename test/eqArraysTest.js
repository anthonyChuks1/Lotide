const assertArraysEqual = require ("../assertArraysEqual");
const assertEqual = require ("../assertEqual")
const eqArrays = require ("../eqArrays");

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([1, 3, 3], [1, 2, 3]), true); // => should FAIL
const assert = require('chai').assert;
const eqArrays = require("../eqArrays");

describe('#eqArrays', () => {
  it('eqArrays([1, 2, 3], [1, 2, 3]) === true', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it('eqArrays([1, 3, 3], [1, 2, 3]) === false', () => {
    assert.strictEqual(eqArrays([1, 3, 3], [1, 2, 3]), false);
  });
});
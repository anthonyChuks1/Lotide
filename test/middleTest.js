const middle = require("../middle")
const assertArraysEqual = require("../assertArraysEqual")
const assert = require("chai").assert;

describe ("#middle", () => {
  it("([2, 3, 5, 6]) returns  [3, 5]", () => {
    assert.deepEqual(middle([2, 3, 5, 6]), [3, 5]);
  })
  it("([1, 2, 3, 4]) returns  [2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  })
  it("([1,2]) returns  []", () => {
    assert.deepEqual(middle([1, 2]), []);
  })
  it("([1, 2, 3, 4, 5, 6, 7, 8]) returns  [4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
  })
}) 
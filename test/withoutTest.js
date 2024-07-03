const assert = require('chai').assert;
const without = require('../without');




describe('#without- returns an array with the unwanted elements removed from intial array', () => {
  

  it(`(["1", "2", [1,2,3], "3"], [1, 2, "3"]) returns ["1", "2", [1,2,3]]`, () => {
    assert.deepEqual(without(["1", "2", [1,2,3], "3"], [1, 2, "3"]), ["1", "2", [1,2,3]]);
  });
});
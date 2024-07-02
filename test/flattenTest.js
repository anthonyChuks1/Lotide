const flatten = require ('../flatten');
const assert = require ('chai').assert;


describe('#flatten - Unravels a multidimensional array into a single dimensional array',() => {
  const arraY = [1, 1, 5, [6,4,2,5,7,8], 9, 10, 20];
  const result = [1, 1, 5, 6,4,2,5,7,8, 9, 10, 20];
  it('[1, 1, 5, [6,4,2,5,7,8], 9, 10, 20] should return [1, 1, 5, 6, 4, 2, 5, 7, 8, 9, 10, 20]', () => {
    assert.deepEqual(flatten(arraY), result);
  })
});
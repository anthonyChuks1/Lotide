const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

/**------------------------------------TEST------------------------------------------------------------------ */



describe('#takeUntil - returns string in an array until a given value', () => {

  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const data3 = [-3, 2, 5, 7, 2, -1, 2, 4, 5];
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  

  const results1 = takeUntil(data1, x => x < 0);
  const results3 = takeUntil(data3, x => x < 0);
  const results2 = takeUntil(data2, x => x === ',');
  

  it(`${data1} should return [1, 2, 5, 7, 2]`, () => {
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });
  it(`${data2} should return ["I've", "been", "to", "Hollywood"]`, () => {
    assert.deepEqual(results2, ["I've", "been", "to", "Hollywood"]);
  });
  it(`${data3} should return empty array`, () => {
    assert.deepEqual(results3, []);
  });

});
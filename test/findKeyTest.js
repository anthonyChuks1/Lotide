const findKey = require('../findKey');
const assert = require('chai').assert;
// /**______________________TEST___________________________________________ */

describe('#findKey', () => {

  let result1 = findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ); // => "noma"
  
  let result2 = findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 4
  );
  let result3 = findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 3
  );
  it('Should return noma', () => {
    assert.strictEqual(result1, 'noma');
  });
  it('Should return undefined', () => {
    assert.strictEqual(result2, undefined);
  });
  it('Should return Akaleri', () => {
    assert.strictEqual(result3, 'Akaleri');
  });

});
const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;




describe("#findKeyByValue", () => {

  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
  };

  it('The value "The Wire" should have the key "drama" ', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
  })
  it('That 70s show is not in the list and should return undefined ', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
  })
});
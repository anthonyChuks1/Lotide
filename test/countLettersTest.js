
const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe('#countLetters', () => {
  let sauce1 = "Szechuan Sauce";

  it(`There are 2 "S" in  ${sauce1} should be true `, () => {
    assert.strictEqual(countLetters(sauce1)['S'], 2);
  });
  it(`Spaces do not count in  ${sauce1}. It should be undefined `, () => {
    assert.strictEqual(countLetters(sauce1)[' '], undefined);
  });
});
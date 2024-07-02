const assert = require('chai').assert;
const map = require('../map')




describe('#map - returns a mapped version of an array ', () => {

  const words = ["ground", "control", "to", "major", "tom"];
  const wordsCaps = ["Ground", "Control", "To", "Major", "Tom"];
  const nums = [112, 112, 223, 224, 334];

  const results1 = map(words, (word) => word[0]);
  const results4 = map(nums, (num) => num)
  const results3 = map(wordsCaps, (wordsCaps) => wordsCaps[0]);

  it(`${words} should return ['g','c','t','m','t']`, () => {
    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
  })
  it(`${wordsCaps} should return same result as ${words}`, () => {
    assert.notDeepEqual(results3, results1);
  })
  it(`${nums} should return [112,112,223,224,334]`, () => {
    assert.deepEqual(results4, [112, 112, 223, 224, 334]);
  })

})
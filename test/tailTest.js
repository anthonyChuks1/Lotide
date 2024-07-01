
const tail = require("../tail");
const assert = require("chai").assert;


describe("#tail", () => {
  const word1 = ["Hello", "Lighthouse", "Labs"];
  const word2 = ["Yo Yo", "Lighthouse", "Labs"];
  it('["Hello", "Lighthouse", "Labs"] should return [Lighthouse, Labs]', () => {
    assert.deepEqual(tail(word1), ['Lighthouse', 'Labs']);
  })
  it('tail of tail of["Hello", "Lighthouse", "Labs"] should return [ Labs]', () => {
    assert.deepEqual(tail(tail(word1)), ['Labs']);
  })
  it(`${word2} should return [Lighthouse, Labs]`, () => {
    assert.deepEqual(tail(word2), ['Lighthouse', 'Labs']);
  })
  it(`${word2} should still have 3 words`, () => {
    assert.strictEqual(word2.length , 3);
  })
})
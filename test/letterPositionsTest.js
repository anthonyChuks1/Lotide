const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

const s = "Hot Chill And Chipotle Sauce";

describe('#letterPositions - should return an object with the characters and their position.', () => {
  const sPos = letterPositions(s);
  it(`Position of o should be in position 1 and 18 in ${s}`, () => {
    assert.deepEqual(sPos['o'], [1,18]);
  });
  it(`Position of o should be in position 1 and 18 in ${s}`, () => {
    assert.deepEqual(sPos.o, [1,18]);
  });
  it(`Position of space should be in position 3,9,13 and 22 in ${s}`, () => {
    assert.deepEqual(sPos[' '], [3,9,13,22]);
  });
});
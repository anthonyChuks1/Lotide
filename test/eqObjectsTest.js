const assert = require('chai').assert;
const eqObjects = require('../eqObjects')

describe('#eqObjects', () => {
  const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
  const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

  const longSleeveMultiColorShirtObject = {
    size: "medium",
    colors: ["red", "blue"],
    sleeveLength: "long",
  };

  const objOne = { color: "blue", size: "small" };
  const objTwo = { color: "red", size: "small" };

  const objThree = { Value: { color: "blue", size: "small", texture: "soft" } };
  const objFour = { Value: { color: "blue", size: "small", texture: "soft" } };
  const objFive = { color: "blue", size: "small", texture: "soft" };
  const objSix = { color: "blue", size: "small", texture: "soft" };

  it('should return true', () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });
});
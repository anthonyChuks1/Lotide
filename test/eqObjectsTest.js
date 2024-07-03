const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
  const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
  
  it('should return true', () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });
});
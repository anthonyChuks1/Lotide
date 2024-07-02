const assertObjectsEqual = require('../assertObjectsEqual');
const assert = require('chai').assert;

describe("#assertObjectEqual", () => {
  const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
  const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
  const objOne = { color: "blue", size: "small" };
  const objTwo = { color: "red", size: "small" };
  const objThree = { color: "blue", size: "small", texture: "soft" };
  const objFour = { color: "blue", size: "small", texture: "soft" };
  const longSleeveMultiColorShirtObject = {
    size: "medium",
    colors: ["red", "blue"],
    sleeveLength: "long",
  };

  it(' ',() => {
    const result = assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);
    assert.strictEqual(result, true);
  })

  it(' ', () =>{
    const result = assertObjectsEqual(objOne,objTwo);
    assert.strictEqual(result, false)
  })
})
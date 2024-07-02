

/**eqArrays([], []): takes 2 arrays and returns true or false based on a perfect match.  */
const eqArrays =  function(arraY1, arraY2) {
  if (arraY1.length !== arraY2.length) {
    return false;
  } else {
    for (let index in arraY1) {
      if (arraY1[index] !== arraY2[index]) {
        return false;
      }
    }
  }
  return true;
};
 
/**
 * Returns true if both objects have identical keys with identical values. Otherwise you get back a big fat false!
 * @param {Object} object1 -  AN object
 * @param {Object} object2 -  An object
* @return {Boolean}
*/
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  let endFlag = false;

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key1 of keys1) {
    if (!object2[key1]) {//check for similar keys in object2
      endFlag = true;
      break;
    } else if (Array.isArray(object2[key1]) && Array.isArray(object1[key1])) {
      if (!eqArrays(object1[key1], object2[key1])) {//check for equal array if both are arrays.
        endFlag = true;
        break;
      }
    } else {
      if (object1[key1] !== object2[key1]) {//check for equal primitives
        endFlag = true;
        break;
      }
    }
  }
  if (endFlag) return false;
  else return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  let passMsg = `✅✅✅ Assertion Passed:  ${inspect (actual)} === ${inspect (expected)}`;
  let failMsg = `❌❌❌ Assertion Failed:  ${inspect (actual)} !== ${inspect (expected)}`;
  if(eqObjects(actual, expected)) console.log(passMsg);
  else console.log(failMsg);
};



const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);

const objOne = {color: "blue", size: "small"};
const objTwo = {color: "red", size: "small"};
assertObjectsEqual(objOne,objTwo);

const objThree = {color: "blue", size: "small", texture: "soft"};
const objFour = {color: "blue", size: "small", texture: "soft"};
assertObjectsEqual(objThree, objFour);

module.exports = assertObjectsEqual; 
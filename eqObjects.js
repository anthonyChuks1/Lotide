
/**
 * assertEqual(): takes 2 arrays and returns true or false based on a perfect match.
 * @param {any} actual - Any primitive value of the actual result
 * @param {any} expected - Any primitive value of the expected result
 * @return {void} - It console.logs the result as a message
 */
const assertEqual = function(actual, expected) {
  let passMsg = `✅✅✅ Assertion Passed:  ${actual} === ${expected}`;
  let failMsg = `❌❌❌ Assertion Failed:  ${actual} !== ${expected}`;
  if (actual === expected) console.log(passMsg);
  else console.log(failMsg);
};

/**
 * eqArrays([], []): takes 2 arrays and returns true or false based on a perfect match.
 * @param {Array} arraY1 - The first array
 * @param {Array} arraY2 - The second array
 * @return {boolean} - Returns true if the arrays are equal, false otherwise
 */
const eqArrays = function(arraY1, arraY2) {
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
 * @param {Object} object1 - The first object
 * @param {Object} object2 - The second object
 * @return {boolean} - Returns true if the objects are equal, false otherwise
 */
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  let endFlag = false;

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key1 of keys1) {
    if (typeof object1[key1] === 'object' && typeof object2[key1] === 'object') {
      return eqObjects(object1[key1], object2[key1]);
    }
    if (!object2[key1]) { // check for similar keys in object2
      endFlag = true;
      break;
    } else if (Array.isArray(object2[key1]) && Array.isArray(object1[key1])) {
      if (!eqArrays(object1[key1], object2[key1])) { // check for equal array if both are arrays.
        endFlag = true;
        break;
      }
    } else {
      if (object1[key1] !== object2[key1]) { // check for equal primitives
        endFlag = true;
        break;
      }
    }
  }
  if (endFlag) return false;
  else return true;
};

// Test cases
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

const objOne = { color: "blue", size: "small" };
const objTwo = { color: "red", size: "small" };
assertEqual(eqObjects(objOne, objTwo), false);

const objThree = { Value: { color: "blue", size: "small", texture: "soft" } };
const objFour = { Value: { color: "blue", size: "small", texture: "soft" } };
const objFive = { color: "blue", size: "small", texture: "soft" };
const objSix = { color: "blue", size: "small", texture: "soft" };
assertEqual(eqObjects(objThree, objFour), true);
assertEqual(eqObjects(objThree, objFive), false);
assertEqual(eqObjects(objFour, objSix), false);




module.exports = eqObjects;



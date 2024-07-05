

const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
/**
 * Compares two objects and prints an assertion message indicating whether they are equal or not.
 *
 * @param {Object} actual - The actual object to compare.
 * @param {Object} expected - The expected object to compare against.
 * @returns {boolean} - Returns true if the objects are equal, false otherwise.
 */
const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  let passMsg = `✅✅✅ Assertion Passed:  ${inspect(actual)} === ${inspect(expected)}`;
  let failMsg = `❌❌❌ Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`;
  if (eqObjects(actual, expected)) {
    console.log(passMsg);
    return true;
  } 
  else {
    console.log(failMsg);
    return false;
  }
};



module.exports = assertObjectsEqual;
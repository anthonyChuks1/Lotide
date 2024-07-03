
const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  let passMsg = `✅✅✅ Assertion Passed:  ${inspect(actual)} === ${inspect(expected)}`;
  let failMsg = `❌❌❌ Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`;
  if (eqObjects(actual, expected)) {
    console.log(passMsg);
    return true;
  } else {
    console.log(failMsg);
    return false;
  }
};



module.exports = assertObjectsEqual;

const eqArrays = require("./eqArrays");


/**assertArraysEqual(): takes 2 arrays and console.logs true or false message based on a perfect match.  */
/**@param {Array} array1 - Any single dimensional array */
/**@param {Array} array2 - Any single dimensional array */
/**@return {void}*/
const assertArraysEqual = function(array1, array2) {
  let passMsg = `✅✅✅ Assertion Passed:  ${array1} === ${array2}`;
  let failMsg = `❌❌❌ Assertion Failed:  ${array1} !== ${array2}`;
  if (eqArrays(array1, array2)) {
    console.log(passMsg);
    return true;
  } 
  else {
    console.log(failMsg);
    return false;
  }
};


module.exports = assertArraysEqual;
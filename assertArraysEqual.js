
const eqArrays = require("./eqArrays");


/**assertArraysEqual(): takes 2 arrays and console.logs true or false message based on a perfect match.  */
/**@param {Array} arraY1 - Any single dimensional array */
/**@param {Array} arraY2 - Any single dimensional array */
/**@return {void}*/
const assertArraysEqual = function(arraY1, arraY2) {
  let passMsg = `✅✅✅ Assertion Passed:  ${arraY1} === ${arraY2}`;
  let failMsg = `❌❌❌ Assertion Failed:  ${arraY1} !== ${arraY2}`;
  if (eqArrays(arraY1, arraY2)) {
    console.log(passMsg);
    return true;
  } else {
    console.log(failMsg);
    return false;
  }
};


module.exports = assertArraysEqual;
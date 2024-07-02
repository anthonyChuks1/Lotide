/**assertEqual(): takes 2 arrays and returns true or false based on a perfect match.  */
/**@param {any} actual - Any primitive value of the actual result*/
/**@param {any} expected - Any primitive value of the expected result*/
/**@return {void} - it console.logs the result as a message*/
const assertEqual = function(actual, expected) {
  let passMsg = `✅✅✅ Assertion Passed:  ${actual} === ${expected}`;
  let failMsg = `❌❌❌ Assertion Failed:  ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(passMsg);
    return true;
  }
  else {
    console.log(failMsg);
    return false;
  }
};

module.exports = assertEqual;
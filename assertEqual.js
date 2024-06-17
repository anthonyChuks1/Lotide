/**assertEqual(): takes 2 arrays and returns true or false based on a perfect match.  */
/**@param {any} actual - Any primitive value of the actual result*/
/**@param {any} expected - Any primitive value of the expected result*/
/**@return {void} - it console.logs the result as a message*/
const assertEqual = function(actual, expected) {
  let passMsg = `✅✅✅ Assertion Passed:  ${actual} === ${expected}`;
  let failMsg = `❌❌❌ Assertion Failed:  ${actual} !== ${expected}`;
  if (actual === expected) console.log(passMsg);
  else console.log(failMsg);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(19, '19');
assertEqual('f','f');
assertEqual("%20", " ");
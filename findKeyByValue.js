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


/** findKeyByValue() - Returnes the first key of a given value, undefined if key is not found*/
/** @param {Object} objectList - An object to be searched*/
/** @param {<number, string>} searchKeyFor - The value to search for */
/** @return {string}*/
const findKeyByValue = function(objectList, searchKeyFor) {
  for (let objKey in objectList) {
    if (objectList[objKey] === searchKeyFor) {
      return objKey;
    }
  }
  return undefined;

};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

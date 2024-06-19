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


/**
 * findKey : Scans an object and returns the first key for which the callback returns a truthy value. if no key found, then it should return 'undefined'
 * @param {Object} obj - An object value.
 * @param {Function} callback - A callback function.
 * @return <string, undefined>
 */
const findKey = ((obj, callback) => {
  for(let val in obj){
    if(callback(obj[val])){
      return val;
    }
  }
});



/**______________________TEST___________________________________________ */

let result1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"

let result2 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 4
);
let result3 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 3
);

assertEqual(result1, 'noma');
assertEqual(result2, undefined);
assertEqual(result3, 'Akaleri');
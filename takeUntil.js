/**eqArrays(): takes 2 arrays and returns true or false based on a perfect match.  */
/**@param {Array} arraY1 - Any single dimensional array */
/**@param {Array} arraY2 - Any single dimensional array */
/**@return {Boolean}*/
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

/**assertArraysEqual(): takes 2 arrays and console.logs true or false message based on a perfect match.  */
/**@param {Array} arraY1 - Any single dimensional array */
/**@param {Array} arraY2 - Any single dimensional array */
/**@return {void}*/
const assertArraysEqual = function(arraY1, arraY2) {
  let passMsg = `✅✅✅ Assertion Passed:  ${arraY1.join('|')} === ${arraY2.join('|')}`;
  let failMsg = `❌❌❌ Assertion Failed:  ${arraY1.join('|')} !== ${arraY2.join('|')}`;
  if (eqArrays(arraY1, arraY2)) {
    console.log(passMsg);
  }
  else {
    console.log(failMsg);
  }
};

/**
 * takeUntil() - Will keep collecting items from a provided array until the callback return a truthy value.
 * @param {Array} array  - any array 
 * @param {Function <array>} callback  - a callback funtion that returns a boolean
 * @return {Array} result
 */
const takeUntil = function(array, callback) {
  const result = [];
  /**item: list of item values in the array; callback(item) passes item into the callback function and 
   * waits for a return boolean 
   */
  for(item of array){
    if(!callback(item)){/**Pass item to callback and wait for return boolean */
      result.push(item);
    }
    else return result;
  }
  

  return result; /**return result anyway if callback() does not return false */
};


/**------------------------------------TEST------------------------------------------------------------------ */

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data3 = [-3, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const results3 = takeUntil(data3, x => x < 0);




const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data4 = [",","I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data5 = ["I've", "been", "to", "Hollywood","I've", "been", "to", "Redwood",",",];
const results2 = takeUntil(data2, x => x === ',');
const results5 = takeUntil(data5, x => x === ',');
const results4 = takeUntil(data4, x => x === ',');


assertArraysEqual(results1, [1,2,5,7,2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(results3, []);
assertArraysEqual(results4, []);
assertArraysEqual(results5, ["I've", "been", "to", "Hollywood","I've", "been", "to", "Redwood"]);
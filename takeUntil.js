

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
  for (item of array) {
    if (!callback(item)) {/**Pass item to callback and wait for return boolean */
      result.push(item);
    }
    else return result;
  }


  return result; /**return result anyway if callback() does not return false */
};




module.exports = takeUntil;
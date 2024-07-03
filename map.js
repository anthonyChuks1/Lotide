


/**
 * map(): maps an array and returns the mapped array.
 * @param {Array} array - The array to be mapped.
 * @param {Function} callback - A function for callback.
 * @return {Array} results
 *
*/
const map = function(array, callback) {


  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


module.exports = map;
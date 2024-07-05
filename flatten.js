

/**
 * Flattens a nested array into a single-level array.
 *
 * @param {Array} nestedArray - The nested array to be flattened.
 * @returns {Array} - The flattened array.
 */
const flatten = function(nestedArray) {
  /**Push here*/
  let flatArray = [];
  let copyArray = nestedArray.slice();
  for (let arr_ of copyArray) {
    if (Array.isArray(arr_)) {
      for (let nestedarr_ of arr_) {
        flatArray.push(nestedarr_);
      }
    } else {
      flatArray.push(arr_);
    }
  }
  return flatArray;
};



module.exports = flatten;
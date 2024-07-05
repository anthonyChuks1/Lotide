

/**
 * Compare two arrays for equality.
 * @param {Array} array1 - The first array to compare.
 * @param {Array} array2 - The second array to compare.
 * @returns {boolean} - True if the arrays are equal, false otherwise.
 */
const eqArrays =  function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } 
  else {
    for (let index in array1) {
      if (array1[index] !== array2[index]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqArrays;
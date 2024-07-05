
/**
 * Returns the tail of an array.
 * @param {Array} arr - The input array.
 * @returns {Array} - The tail of the input array.
 */
const tail = function(arr) {
  let newarr = arr.slice(1);
  return newarr;
};

module.exports = tail;
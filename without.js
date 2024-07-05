

/**
 * Returns a subset of a given array, removing unwanted elements.
 * Does not function with nested arrays or objects.
 *
 * @param {Array} source - The source array.
 * @param {Array} itemsToRemove - The array of items to remove from the source array.
 * @returns {Array} - The subset of the source array with the unwanted elements removed.
 */
const without = function(source, itemsToRemove) {
  let copySource = source.slice();
  let pushSub = [];
  let toRemoveFlag = false;
  
  for (let i = 0; i < source.length; i++) {
    toRemoveFlag = false;
    for (let toRemove of itemsToRemove) {
      if (copySource[i] === toRemove) {
        toRemoveFlag = true;
      }
    }
    if (!toRemoveFlag) {
      pushSub.push(copySource[i]);
    }
  }
  
  return pushSub;
};



module.exports = without;
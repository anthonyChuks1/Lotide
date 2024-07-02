

/**without([],[]): will return a subset of a given array, removing unwanted elements.
 * Does not fuction with nested arrays or objects
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
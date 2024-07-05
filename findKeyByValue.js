


/**
 * findKeyByValue() - Returns the first key of a given value, undefined if key is not found.
 * @param {Object} objectList - An object to be searched.
 * @param {number|string} searchKeyFor - The value to search for.
 * @return {string|undefined} - The key associated with the given value, or undefined if not found.
 */
const findKeyByValue = function(objectList, searchKeyFor) {
  for (let objKey in objectList) {
    if (objectList[objKey] === searchKeyFor) {
      return objKey;
    }
  }
  return undefined;

};


module.exports = findKeyByValue;
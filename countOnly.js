

/**countOnly(): returns an object with the amount counted */
/**@param {Array} allItems: an array of strings that we need to look through*/
/**@param {Object} itemsToCount: an object specifying what to count*/
/**@returns {Object} */
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const name of allItems) {
    if (itemsToCount[name]) {
      if (results[name]) {
        results[name] += 1;
      } else {
        results[name] = 1;
      }
      
    }
  }
  return results;
};



module.exports = countOnly;
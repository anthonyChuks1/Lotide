

/**
 * findKey : Scans an object and returns the first key for which the callback returns a truthy value. If no key is found, it should return 'undefined'.
 * @param {Object} obj - The object to scan.
 * @param {Function} callback - The callback function to be called for each key-value pair in the object.
 * @return {string|undefined} - The first key for which the callback returns a truthy value, or 'undefined' if no key is found.
 */
const findKey = ((obj, callback) => {
  for (let val in obj) {
    if (callback(obj[val])) {
      return val;
    }
  }
});





module.exports = findKey;
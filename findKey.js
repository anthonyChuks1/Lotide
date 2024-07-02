

/**
 * findKey : Scans an object and returns the first key for which the callback returns a truthy value. if no key found, then it should return 'undefined'
 * @param {Object} obj - An object value.
 * @param {Function} callback - A callback function.
 * @return <string, undefined>
 */
const findKey = ((obj, callback) => {
  for(let val in obj){
    if(callback(obj[val])){
      return val;
    }
  }
});





module.exports = findKey;
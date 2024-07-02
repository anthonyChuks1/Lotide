const eqArrays = require('./eqArrays');

/**
 * Returns true if both objects have identical keys with identical values. Otherwise you get back a big fat false!
 * @param {Object} object1 - The first object
 * @param {Object} object2 - The second object
 * @return {boolean} - Returns true if the objects are equal, false otherwise
 */
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  let endFlag = false;

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key1 of keys1) {
    if (typeof object1[key1] === 'object' && typeof object2[key1] === 'object') {
      return eqObjects(object1[key1], object2[key1]);
    }
    if (!object2[key1]) { // check for similar keys in object2
      endFlag = true;
      break;
    } else if (Array.isArray(object2[key1]) && Array.isArray(object1[key1])) {
      if (!eqArrays(object1[key1], object2[key1])) { // check for equal array if both are arrays.
        endFlag = true;
        break;
      }
    } else {
      if (object1[key1] !== object2[key1]) { // check for equal primitives
        endFlag = true;
        break;
      }
    }
  }
  if (endFlag) return false;
  else return true;
};





module.exports = eqObjects;




/**flatten(): takes in an array containing elements including nested arrays and returns a flattened version of the array */
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
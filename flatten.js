/**eqArrays([], []): takes 2 arrays and returns true or false based on a perfect match.  */
const eqArrays =  function(arraY1, arraY2) {
  if (arraY1.length !== arraY2.length) {
    return false;
  } else {
    for (let index in arraY1) {
      if (arraY1[index] !== arraY2[index]) {
        return false;
      }
    }
  }
  return true;
};


/**assertArraysEqual(): takes in two arrays and logs a mesage to the console */
const assertArraysEqual = function(arraY1, arraY2) {
  let passMsg = "✅✅✅ Assertion Passed: " + arraY1 + " === " + arraY2;
  let failMsg = "❌❌❌ Assertion Failed: " + arraY1 + " !== " + arraY2;
  if (eqArrays(arraY1, arraY2)) {
    console.log(passMsg);
  } else {
    console.log(failMsg);
  }
};


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


console.log('Flattened', [1, 2, [3, 4], 5, [6]], "=>", flatten([1, 2, [3, 4], 5, [6]]));
let arraY = [1, 1, 5, [6,4,2,5,7,8], 9, 10, 20];
console.log("Flattened", arraY, "=>", flatten(arraY));
assertArraysEqual(arraY, flatten(arraY));
assertArraysEqual(flatten(arraY), flatten(arraY));
console.log(arraY);
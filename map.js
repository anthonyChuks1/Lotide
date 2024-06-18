


/**eqArrays(): takes 2 arrays and returns true or false based on a perfect match.  */
/**@param {Array} arraY1 - Any single dimensional array */
/**@param {Array} arraY2 - Any single dimensional array */
/**@return {Boolean}*/
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

/**assertArraysEqual(): takes 2 arrays and console.logs true or false message based on a perfect match.  */
/**@param {Array} arraY1 - Any single dimensional array */
/**@param {Array} arraY2 - Any single dimensional array */
/**@return {void}*/
const assertArraysEqual = function(arraY1, arraY2) {
  let passMsg = `✅✅✅ Assertion Passed:  ${arraY1.join('|')} === ${arraY2.join('|')}`;
  let failMsg = `❌❌❌ Assertion Failed:  ${arraY1.join('|')} !== ${arraY2.join('|')}`;
  if (eqArrays(arraY1, arraY2)) {
    console.log(passMsg);
  }
  else {
    console.log(failMsg);
  }
};

/**
 * map(): maps an array and returns the mapped array.
 * @param {Array<string>} array - The array to be mapped.
 * @param {Function} callback - A function for callback.
 * @return {Array} results
 * 
*/
const map = function (array, callback) {


  const results = [];

  for(let item of array) {
    results.push(callback(item));
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];
const movies = ["Generic movie 1.", "Generic movie 2.", "Another generic movie.", "Edgerunners"]
const wordsCaps = ["Ground", "Control", "To", "Major", "Tom"];
const nums = [112,112,223,224,334];

const results1 = map(words, (word) => word[0]);
const results2 = map(movies, (movie) => movie[0]); 
const results3 = map(wordsCaps,(wCaps) => wCaps[0])
const results4 = map(nums, (num) => num)

assertArraysEqual(results1, results2); //Fail
assertArraysEqual(results1, ['g','c','t','m','t']); //Pass
assertArraysEqual(results4, [112,112,223,224,334]); //Pass
assertArraysEqual(results3, results1);//Fail
assertArraysEqual(results2, results3);//Fail
//test tst
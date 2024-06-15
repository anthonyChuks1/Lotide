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
  let passMsg = `✅✅✅ Assertion Passed:  ${arraY1.join('|')} === ${arraY2.join('|')}`;
  let failMsg = `❌❌❌ Assertion Failed:  ${arraY1.join('|')} !== ${arraY2.join('|')}`;
  if (eqArrays(arraY1, arraY2)) {
    console.log(passMsg);
  } else {
    console.log(failMsg);
  }
};

/**middle(): Takes in an array and returns the element(s) in the middle */
const middle = function(arraY) {
  let copyArray = arraY.slice();
  let middleElement = [];
  let middleNum = (arraY.length) / 2;
  if (arraY.length <= 2) {
    return middleElement;
  }
  if (arraY.length % 2 === 0) {
    middleElement.push(copyArray[middleNum - 1]);
    middleElement.push(copyArray[middleNum]);

  } else {
    middleElement.push(copyArray[Math.floor(middleNum)]);
  }
  
  return middleElement;
};


assertArraysEqual(middle([2, 3, 5, 6]), [3, 5]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Even length
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Even length
assertArraysEqual(middle([1, 2, 3]), [2]); // Odd length
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Odd length
assertArraysEqual(middle([1]), []); // Single element
assertArraysEqual(middle([1, 2]), []); // Two elements

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]); // 8 indexes Even length
assertArraysEqual(middle([1, 2, 5, 7, 5, 6]), [5, 7]); //  6 Indexes Even length



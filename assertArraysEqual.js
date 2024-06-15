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
  }
  else {
    console.log(failMsg);
  }
};



assertArraysEqual([1,2,3,4,5], [1,2,3,4,5]);
assertArraysEqual([1,'a',3,4,5], [1,'a',3,4,5]);
assertArraysEqual([1,'a',3,4,5], [1,'a',3,4,5, 'f']);

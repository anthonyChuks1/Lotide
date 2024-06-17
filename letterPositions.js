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

/**letterPositions()- Returns all the indices in the string where the characters are found. */
/**@param {string} sentence - A string that will be passed into the letterPositions function. */
/**@return {object} results - An object that contains the letters as a key and their positions as values. */
const letterPositions = function(sentence) {
  const sentence_ = sentence;
  const results = {};
  // logic to update results here
  for (let charPosition in sentence_) {
    let key = sentence_[charPosition];
    if (results[key]) {
      results[key].push(Number(charPosition));
    } else {
      results[key] = [];
      results[key].push(Number(charPosition));
    }
  }
  return results;
};



let s = "Hot Chill And Chipotle Sauce";
let sPos = letterPositions(s);
console.log(sPos);
assertArraysEqual(sPos.o, [1,18]);
assertArraysEqual(sPos.H, [0]);
assertArraysEqual(sPos.d, [12]);
assertArraysEqual(sPos.l , [7,8,20]);
assertArraysEqual(sPos[' '] , [3,9,13,22]);

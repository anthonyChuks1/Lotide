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


/**assertArraysEqual([],[]): takes in two arrays and logs a mesage to the console */
const assertArraysEqual = function(arraY1, arraY2) {
  let passMsg = `✅✅✅ Assertion Passed:  ${arraY1.join(', ')} === ${arraY2.join(', ')}`;
  let failMsg = `❌❌❌ Assertion Failed:  ${arraY1.join(', ')} !== ${arraY2.join(', ')}`;
  if (eqArrays(arraY1, arraY2)) {
    console.log(passMsg);
  } else {
    console.log(failMsg);
  }
};

/**without([],[]): will return a subset of a given array, removing unwanted elements.
 * Does not fuction with nested arrays or objects
 */
const without = function(source, itemsToRemove) {
  let copySource = source;
  if (eqArrays(source, itemsToRemove)) {
    return "No sub array...";
  } else {
    for (let i = 0; i < source.length; i++) {
      for (let toRemove of itemsToRemove) {
        if (copySource[i] === toRemove) {
          copySource.splice(i,1);
        }
      }
    }
  }
  return copySource;
};


console.log(without([1,2,3], [1,2]));
console.log(without(["1", "2", [1,2,3], "3"], [1, 2, "3"]));
console.log(without(["1", "2", [1,2,3], "3"], [1, 2,[1,2,3], "3"]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


const assertEqual = function(actual, expected) {
  let passMsg = `✅✅✅ Assertion Passed:  ${actual} === ${expected}`;
  let failMsg = `❌❌❌ Assertion Failed:  ${actual} !== ${expected}`;
  if (actual === expected) console.log(passMsg);
  else console.log(failMsg);
};

/**Function: tail([]) returns the tail of an array */
const tail = function(arr) {
  let newarr = arr.slice(1);
  return newarr;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
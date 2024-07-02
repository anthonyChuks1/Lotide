const assertEqual = function(actual, expected) {
  let passMsg = `✅✅✅ Assertion Passed:  ${actual} === ${expected}`;
  let failMsg = `❌❌❌ Assertion Failed:  ${actual} !== ${expected}`;
  if (actual === expected) console.log(passMsg);
  else console.log(failMsg);
};

/**Takes a string, and counts how many of each letter are in the string.*/
/**@param {string} word - the string to be passed through the function.*/
/**@returns {object} results - Letters in word with their frequency.*/
const countLetters = function(word) {
  let rmSpaceFromWord = word.replace(/ /g, '');
  const results = {};

  for (let letter of rmSpaceFromWord) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }

  return results;
};


let sauce1 = countLetters("Szechuan Sauce");
let sauce2 = countLetters("Worcestershire sauce");
let sauce3 = countLetters("Hot Chipotle Sauce")

console.log(`Sauce-1 Keys: ${Object.keys(sauce1).join('|')}`);
console.log(`Sauce-1 Vals: ${Object.values(sauce1).join('|')}\n\n`);
console.log(`Sauce-2 Keys: ${Object.keys(sauce2).join('|')}`);
console.log(`Sauce-2 Keys: ${Object.values(sauce2).join('|')}\n\n`);
console.log(`Sauce-3 Keys: ${Object.keys(sauce3).join('|')}`);
console.log(`Sauce-3 Vals: ${Object.values(sauce3).join('|')}\n\n`);

assertEqual(sauce1['S'], 2);
assertEqual(sauce1['z'], 1);
assertEqual(sauce1['n'], 1);
assertEqual(sauce2['S'], undefined);
assertEqual(sauce2[' '],undefined);
assertEqual(sauce3[' '], undefined);
assertEqual(sauce3['H'], 1);
assertEqual(sauce3['h'], 1);

module.exports = countLetters;
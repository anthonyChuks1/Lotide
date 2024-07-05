


/**Takes a string, and counts how many of each letter are in the string (case sensitive).*/
/**@param {string} word - the string to be passed through the function.*/
/**@returns {object} results - Letters in  words as the key and Their count as value.*/
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

module.exports = countLetters;
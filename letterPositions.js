

/**Returns all the indices in the string where the characters are found in an object. */
/**@param {string} sentence - A string that will be passed into the letterPositions function. */
/**@return {object} results - An object that contains the letters as a key and their positions as values. */
const letterPositions = function(sentence) {
  const sentence_ = sentence;
  const results = {};//object
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



module.exports = letterPositions;
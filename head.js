const assertEqual = require("./assertEqual");
/**function : head([]) returns the first item in an array or as a single value. */
const head = function(arr_) {
  let getVal = arr_[0];
  return getVal;
};

module.exports = head;
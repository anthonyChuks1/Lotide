const middle = require("../middle")
const assertArraysEqual = require("../assertArraysEqual")

assertArraysEqual(middle([2, 3, 5, 6]), [3, 5]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Even length
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Even length
assertArraysEqual(middle([1, 2, 3]), [2]); // Odd length
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Odd length
assertArraysEqual(middle([1]), []); // Single element
assertArraysEqual(middle([1, 2]), []); // Two elements

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]); // 8 indexes Even length
assertArraysEqual(middle([1, 2, 5, 7, 5, 6]), [5, 7]); //  6 Indexes Even length
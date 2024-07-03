
/**Function: tail([]) returns the tail of an array */
const tail = function(arr) {
  let newarr = arr.slice(1);
  return newarr;
};

module.exports = tail;
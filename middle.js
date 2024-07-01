
/**middle(): Takes in an array and returns the element(s) in the middle */
const middle = function(arraY) {
  let copyArray = arraY.slice();
  let middleElement = [];
  let middleNum = (arraY.length) / 2;
  if (arraY.length <= 2) {
    return middleElement;
  }
  if (arraY.length % 2 === 0) {
    middleElement.push(copyArray[middleNum - 1]);
    middleElement.push(copyArray[middleNum]);

  } else {
    middleElement.push(copyArray[Math.floor(middleNum)]);
  }
  
  return middleElement;
};



module.exports = middle;
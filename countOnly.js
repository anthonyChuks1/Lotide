const assertEqual = function(actual, expected) {
  let passMsg = `✅✅✅ Assertion Passed:  ${actual} === ${expected}`;
  let failMsg = `❌❌❌ Assertion Failed:  ${actual} !== ${expected}`;
  if (actual === expected) console.log(passMsg);
  else console.log(failMsg);
};
/**countOnly(): returns an object with the amount counted */
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  let results = {};//An empty object

  for(let item in itemsToCount){//First take each item in the itemToCount object
    let countInstance = 0; //always reset to 0 for each
    let found = false; //found flag to see if the names are in the allItems array

    for(let name of allItems){//Now search for item in itemToCount then add them to result{} if they are found.
      if(name === item && itemsToCount[name]){     
        found = true;   
        results[name] = ++countInstance;//give the names their count 
      }
      //console.log(`${item} counted ${results[name]} time(s)`);//Testing the loop
    }
   /* if (!found){ //If the name is not found on the list, add the name to result object but assign it a count of 0
      results[item] = 0;
    }*/
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

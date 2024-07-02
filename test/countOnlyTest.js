const assert = require('chai').assert;
const countOnly = require('../countOnly');


describe('#countOnly(input<object>, rule<object> )', () => {
  let firstNames = [
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

  it(`${firstNames} should return 1 to obey this rule 
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false,`, () => {
    assert.strictEqual (result1['Jason'], 1)
  });
});
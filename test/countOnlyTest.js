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

  const expected = {
    'Jason' : 1,
    'Fang' : 2
  }

  it(`passing'Jason' to the resulting object of the function should return 1 to obey this rule 
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false,`, () => {
    assert.strictEqual (result1['Jason'], 1)
  });
  it(`passing 'Karima' to the resulting object of the function should return undefined to obey this rule 
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false,`, () => {
    assert.strictEqual (result1['Karima'], undefined)
  });

  it(`passing the main object to the function should only return 'Jason' : 1, 'Fang' : 2 ; according to this rule
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false,`, () => {

    assert.deepEqual (result1, expected);
  });
});
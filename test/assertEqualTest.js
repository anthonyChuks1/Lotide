const assertEqual = require("../assertEqual")
const assert = require('chai').assert

describe('#assertEqual', () => {
  it('Lighthouse Labs should not equal Bootcamp', () => {
    assert.strictEqual(assertEqual('Lighthouse Labs', 'Bootcamp'), false);
  });
  it('19 not be equal  "19" as a string', () => {
    assert.strictEqual(assertEqual(19, '19'), false);
  });
  it('19 should be  equal to 19 ', () => {
    assert.strictEqual(assertEqual(19, 19), true);
  });
});
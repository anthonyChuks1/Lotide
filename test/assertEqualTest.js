const assertEqual = require("../assertEqual");
const assert = require('chai').assert;

describe('#assertEqual', () => {
  it('', () => {
    assert.strictEqual(assertEqual('Lighthouse Labs', 'Bootcamp'), false);
  });
  it('', () => {
    assert.strictEqual(assertEqual(19, '19'), false);
  });
  it('', () => {
    assert.strictEqual(assertEqual(19, 19), true);
  });
});
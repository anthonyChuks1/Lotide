const assertArraysEqual = require('../assertArraysEqual');
const assert  =  require('chai').assert;


describe('#assertArrayEqual', () => {
  it('', () => {
    assert.strictEqual(assertArraysEqual([1,2,3,4,5], [1,2,3,4,5]), true);
  });
  it('', () => {
    assert.strictEqual(assertArraysEqual([1,'a',3,4,5], [1,'a',3,4,5, 'f']), false);
  });
  it('', () => {
    assert.strictEqual(assertArraysEqual([1,'a',3,4,5], [1,'a',3,4,5]), true);
  });

});
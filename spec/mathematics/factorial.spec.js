var factorial = require('../../algorithms/mathematics/factorial').factorial;

describe('Factorial', function () {
  'use strict';

  it('0! should be 1', function () {
    expect(factorial(0)).toBe(1);
  });

  it('1! should be 1', function () {
    expect(factorial(1)).toBe(1);
  });

  it('2! should be 2', function () {
    expect(factorial(2)).toBe(2);
  });

  it('5! should be 120', function () {
    expect(factorial(5)).toBe(120);
  });

  it('10! should be 3628800', function () {
    expect(factorial(10)).toBe(3628800);
  });
});

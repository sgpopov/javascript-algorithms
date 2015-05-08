var primes = require('../../../algorithms/mathematics/primes/sieve-of-atkin').primes;

describe('Sieve of Atkin', function () {
  'use strict';

  // list of all prime numbers between 1 and 200
  var primesArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
    53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131,
    137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];

  it('should return empty list for limits set to 1 or less', function () {
    expect(primes.sieveOfAtkin(1)).toEqual([]);
    expect(primes.sieveOfAtkin(0)).toEqual([]);
    expect(primes.sieveOfAtkin(-20)).toEqual([]);
  });

  it('should return 168 prime numbers', function () {
    expect(primes.sieveOfAtkin(1000).length).toBe(168);
  });

  it('should return 719 as 128th prime number', function () {
    var nthElement = primes.sieveOfAtkin(800);

    expect(nthElement[127]).toBe(719);
  });

  it('should return all prime numbers less than or equal to 200', function () {
    expect(primes.sieveOfAtkin(200)).toEqual(primesArray);
  });
});

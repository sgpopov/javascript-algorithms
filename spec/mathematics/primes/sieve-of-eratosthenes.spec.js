var primes = require('../../../algorithms/mathematics/primes/sieve-of-eratosthenes').primes;

describe('Sieve of Eratosthenes', function () {
  'use strict';

  // list of all prime numbers between 1 and 200
  var primesArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
    53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131,
    137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];


  it('should return empty list for limits set to 1 or less', function () {
    expect(primes.sieveOfEratosthenes(1)).toEqual([]);
    expect(primes.sieveOfEratosthenes(0)).toEqual([]);
    expect(primes.sieveOfEratosthenes(-20)).toEqual([]);
  });

  it('should return 168 prime numbers', function () {
    expect(primes.sieveOfEratosthenes(1000).length).toBe(168);
  });

  it('should return 541 as 100th prime number', function () {
    var nthElement = primes.sieveOfEratosthenes(1000);

    expect(nthElement[99]).toBe(541);
  });

  it('should return all prime numbers less than or equal to 200', function () {
    expect(primes.sieveOfEratosthenes(200)).toEqual(primesArray);
  });
});


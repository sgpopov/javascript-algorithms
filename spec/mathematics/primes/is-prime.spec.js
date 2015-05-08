var primes = require('../../../algorithms/mathematics/primes/is-prime').primes;

describe('Primes', function () {
  'use strict';

  // list of all composite numbers between 2 and 100
  var notPrimes = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22,
    24, 25, 26, 27, 28, 30, 32, 33, 34, 35, 36, 38, 39, 40, 42, 44,
    45, 46, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 60, 62, 63, 64,
    65, 66, 68, 69, 70, 72, 74, 75, 76, 77, 78, 80, 81, 82, 84, 85,
    86, 87, 88, 90, 91, 92, 93, 94, 95, 96, 98, 99, 100];

  // list of all prime numbers between 1 and 200
  var primesArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
    53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131,
    137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];

  it('1 should not be prime', function () {
    expect(primes.isPrime(1)).toBeFalsy();
  });

  it('should not be prime', function () {
    for (var i = notPrimes.length - 1; i >= 0; i -= 1) {
      expect(primes.isPrime(notPrimes[i])).toBeFalsy();
    }
  });

  it('should be prime', function () {
    for (var i = primesArray.length - 1; i >= 0; i -= 1) {
      expect(primes.isPrime(primesArray[i])).toBeTruthy();
    }
  });
});

(function (exports) {
  'use strict';

  var primes = (function () {

    /**
     * Sieve of Eratosthenes.
     *
     * Simple, ancient algorithm for finding all prime
     * numbers up to any given limit.
     *
     * @param {Number} limit - Specified limit.
     *
     * @return {Array} - List of all prime numbers.
     */
    var sieveOfEratosthenes = function (limit) {
      var primesArray = [];
      var sieve = [];
      var i, j;

      // generate a list of all integers between 2 and 'limit'
      for (i = 1; i < limit; i += 1) {
        sieve[i] = false;
      }

      for (i = 2; i < limit; i += 1) {
        if (!sieve[i]) {
          for (j = 2; j <= limit / i; j += 1) {
            sieve[j * i] = true;
          }
        }
      }

      for (i = 2; i <= limit; i += 1) {
        if (!sieve[i]) {
          primesArray.push(i);
        }
      }

      return primesArray;
    };

    return {
      sieveOfEratosthenes: sieveOfEratosthenes
    };
  }());

  exports.primes = primes;

})(typeof exports === 'undefined' ? window : exports);

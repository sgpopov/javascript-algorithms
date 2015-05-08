(function (exports) {
  'use strict';

  var primes = (function () {

    /**
     * Sieve of Sundaram
     *
     * Sieve of Sundaram is efficient algorithm compared to Eratosthenes.
     * It uses similar Sieve principle like Eratosthenes
     * but doesn't consider the even numbers.
     * It crosses out any number in the sieve (boolean array)
     * which is of the form:
     * (i + j + 2 * i * j) and (i + j + 2 * i * j <= n)
     *
     * @param {Number} limit - Specified limit.
     *
     * @return {Array} - List of all prime numbers.
     */
    var sieveOfSundaram = function (limit) {
      var primesArray = [];
      var sieve = [];
      var n = limit / 2;
      var i, j;

      for (i = 1; i < n; i += 1) {
        sieve[i] = false;
      }

      for (i = 1; i < n; i += 1) {
        for (j = i; j <= ((n - i) / (2 * i + 1)); j += 1) {
          sieve[i + j + 2 * i * j] = true;
        }
      }

      if (limit > 1) {
        primesArray.push(2);
      }

      for (i = 1; i < n; i += 1) {
        if (!sieve[i]) {
          primesArray.push(2 * i + 1);
        }
      }

      return primesArray;
    };

    return {
      sieveOfSundaram: sieveOfSundaram
    };
  }());

  exports.primes = primes;

})(typeof exports === 'undefined' ? window : exports);

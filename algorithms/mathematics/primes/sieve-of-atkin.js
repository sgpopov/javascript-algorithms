(function (exports) {
  'use strict';

  var primes = (function () {

    /**
     * Sieve of Atkin
     *
     * Sieve of Atkin is fast, modern algorithm for finding all prime numbers
     * up to a specified integer. It is an optimized version of the ancient
     * sieve of Eratosthenes which does some preliminary work and then
     * marks off multiples of the square of each prime, rather than
     * multiples of the prime itself
     *
     * @param {Number} limit - Specified limit.
     *
     * @return {Array} - List of all prime numbers.
     */
    var sieveOfAtkin = function (limit) {
      var primesArray = [];
      var sieve = [];
      var root = Math.floor(Math.sqrt(limit));
      var x, y;

      // initialize the sieve
      for (x = 1; x <= limit; x += 1) {
        sieve[x] = false;
      }

      sieve[2] = true;
      sieve[3] = true;

      for (x = 1; x <= root; x += 1) {
        for (y = 1; y <= root; y += 1) {
          var n = (4 * x * x) + (y * y);

          if (n <= limit && (n % 12 === 1 || n % 12 === 5)) {
            sieve[n] = !sieve[n];
          }

          n = (3 * x * x) + (y * y);
          if (n <= limit && (n % 12 === 7)) {
            sieve[n] = !sieve[n];
          }

          n = (3 * x * x) - (y * y);
          if (x > y && n <= limit && (n % 12 === 11)) {
            sieve[n] = !sieve[n];
          }
        }
      }

      for (x = 5; x <= root; x += 1) {
        if (sieve[x]) {
          for (y = x * x; y <= limit; y += x * x) {
            sieve[y] = false;
          }
        }
      }

      for (x = 2; x <= limit; x += 1) {
        if (sieve[x]) {
          primesArray.push(x);
        }
      }

      return primesArray;
    };


    return {
      sieveOfAtkin: sieveOfAtkin
    };
  }());

  exports.primes = primes;

})(typeof exports === 'undefined' ? window : exports);

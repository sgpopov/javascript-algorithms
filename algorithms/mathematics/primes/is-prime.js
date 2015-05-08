(function (exports) {
  'use strict';

  var primes = (function () {

    /**
     * Check whenever a given number is prime or not.
     *
     * @param  {Number} number  - Given number
     *
     * @return {Boolean} - Is it prime?
     */
    var isPrime = function (number) {
      // 1 is not a prime
      if (number === 1) {
        return false;
      }

      // 2 and 3 are primes
      if (number < 4) {
        return true;
      }

      // All primes except 2 are odd.
      if (number % 2 === 0) {
        return false;
      }

      // We have excluded 4, 6, 8.
      // 5 and 7 are primes
      if (number < 9) {
        return true;
      }

      if (number % 3 === 0) {
        return false;
      }

      // 'number' rounded to the greatest integer 'r', so that
      // r * r <= number
      var r = Math.floor(Math.sqrt(number));
      var f = 5;
      while (f <= r) {
        if (number % f === 0) {
          return false;
        }

        if (number % (f + 2) === 0) {
          return false;
        }

        f += 6;
      }

      return true;
    };

    return {
      isPrime: isPrime
    };
  }());

  exports.primes = primes;

})(typeof exports === 'undefined' ? window : exports);

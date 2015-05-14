(function (exports) {
  'use strict';

  var numbers = (function () {
     /**
      * Find the greatest common divisor of the given numbers.
      *
      * @param  {Number} a - First given number.
      * @param  {Number} b - Second given number.
      *
      * @return {Number} - The GCD.
      */
    var greatestCommonDivisor = function (a, b) {
      while (a !== b) {
        if (a > b) {
          a -= b;
        }
        else {
          b -= a;
        }
      }

      return a;
    };


    /**
     * Find the greatest common divisor of the given numbers
     * using Euclid's algorithm.
     *
     * @param  {Number} a - First given number.
     * @param  {Number} b - Second given number.
     *
     * @return {Number} - The GCD.
     */
    var euclidsGreatestCommonDivisor = function (a, b) {
      while (b > 0) {
        var tmp = b;
        b = a % b;
        a = tmp;
      }

      return a;
    };


    /**
     * Find the greatest common divisor of the given numbers
     * using Euclid's algorithm with recursion.
     *
     * @param  {Number} a - First given number.
     * @param  {Number} b - Second given number.
     *
     * @return {Number} - The GCD.
     */
    var euclidsGreatestCommonDivisorRecursive = function (a, b) {
      return b === 0 ? a : euclidsGreatestCommonDivisorRecursive(b, a % b);
    };


    /**
     * Find the lowest common multiplier of the given numbers.
     *
     * @param  {Number} a - First given number.
     * @param  {Number} b - Second given number.
     *
     * @return {Number} - The LCM.
     */
    var lowestCommonMultiple = function (a, b) {
      if (a > b) {
        return (a / greatestCommonDivisor(a, b) * b);
      }
      else {
        return (b / greatestCommonDivisor(a, b) * a);
      }
    };

    return {
      greatestCommonDivsor: greatestCommonDivisor,
      euclidsGreatestCommonDivsor: euclidsGreatestCommonDivisor,
      euclidsGreatestCommonDivsorRecursive: euclidsGreatestCommonDivisorRecursive,
      lowestCommonMultiple: lowestCommonMultiple
    };
  }());

  exports.numbers = numbers;

})(typeof exports === 'undefined' ? window : exports);

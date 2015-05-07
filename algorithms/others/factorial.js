(function (exports) {
  'use strict';


  /**
   * Find the factorial n! of a number.
   *
   * @param  {Integer} number - Input number.
   *
   * @return {Number} - n!
   */
  function factorial(number) {
    if (number === 0) {
      return 1;
    }

    return number * factorial(number - 1);
  }

  exports.factorial = factorial;

})(typeof exports === 'undefined' ? window : exports);

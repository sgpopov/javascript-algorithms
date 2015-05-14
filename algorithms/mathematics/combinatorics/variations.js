(function (exports) {
  'use strict';

  var variations = (function () {
    var result = [];

    function variate(list, k, i, current) {
      if (k === i) {
        return result.push(current.slice());
      }

      for (var j = 0; j < list.length; j += 1) {
        current[i] = list[j];
        variate(list, k, i + 1, current);
      }
    }

    /**
     * Finds all the variations with repetition of given array
     *
     * @param  {Array} input - Input array.
     * @param  {Number} k - Size of each combination
     *
     * @return {Array} - All combination.
     */
    return function (input, k) {
      variate(input, k, 0, []);

      return result;
    };
  }());

  exports.variations = variations;

})(typeof exports === 'undefined' ? window : exports);

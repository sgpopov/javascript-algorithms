(function (exports) {
  'use strict';

  var permutations = (function () {
    var factorials = [];

    function swap(list, x, y) {
      var tmp = list[x];
      list[x] = list[y];
      list[y] = tmp;
    }

    function permute(list, length) {
      if (length === 1) {
        return factorials.push(list.slice());
      }

      for (var i = 0; i < length; i += 1) {
        permute(list, length - 1, factorials);
        swap(list, ((length % 2 === 0) ? 0 : i), length - 1);
      }
    }

    /**
     * Returns a list of all the permutations of the given set.
     *
     * @param  {Array} input - Input array.
     *
     * @return {Array} - All the permutations.
     */
    return function (input) {
      permute(input, input.length);

      return factorials;
    };
  }());

  exports.permutations = permutations;

})(typeof exports === 'undefined' ? window : exports);

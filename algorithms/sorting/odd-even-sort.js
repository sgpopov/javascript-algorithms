(function (exports) {
  'use strict';

  /**
   * Odd-even Sort algorithm.
   *
   * @param  {Array} array - Input array.
   *
   * @return {Array} - Sorted array.
   */
  function oddEvenSort(array) {
    var tmp, j;

    for (var i = 0; i < array.length; i += 1) {
      if (i & 1) {
        for (j = 2; j < array.length; j += 2) {
          if (array[j] < array[j - 1]) {
            tmp = array[j - 1];
            array[j - 1] = array[j];
            array[j] = tmp;
          }
        }
      }
      else {
        for (j = 1; j < array.length; j += 2) {
          if (array[j] < array[j - 1]) {
            tmp = array[j - 1];
            array[j - 1] = array[j];
            array[j] = tmp;
          }
        }
      }
    }

    return array;
  }

  exports.oddEvenSort = oddEvenSort;

})(typeof exports === 'undefined' ? this.svil4ok = {} : exports);

(function (exports) {
  'use strict';

  /**
   *
   * @param  {Number} a -
   * @param  {Number} b -
   * @param  {Boolean} reverse - Whenever the sort order should be ASC or DESC.
   *
   * @return {Number} - The result of the arithmetic operation.
   */
  function comparator(a, b, reverse) {
    return reverse ? (b - a) : (a - b);
  }

  /**
   * Bubble Sort algorithm.
   *
   * @param  {Array} array - Input array.
   * @param  {Boolean} reverse - Whenever the sort order should be ASC or DESC.
   *
   * @return {Array} - Sorted array.
   */
  function bubbleSort(array, reverse) {
    var tmp;

    for (var i = 0; i < array.length; i += 1) {
      for (var j = i; j > 0; j -= 1) {
        if (comparator(array[j], array[j - 1], reverse) < 0) {
          tmp = array[j];
          array[j] = array[j - 1];
          array[j - 1] = tmp;
        }
      }
    }

    return array;
  }

  exports.bubbleSort = bubbleSort;

})(typeof exports === 'undefined' ? this.svil4ok = {} : exports);

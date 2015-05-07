(function (exports) {
  'use strict';

  /**
   * Insertion Sort algorithm.
   *
   */
  var insertionSort = (function () {

    /**
     * Compare two numbers.
     *
     * @param  {Number} a -
     * @param  {Number} b -
     * @param  {Boolean} reverse - Whenever the sort order should be ASC or DESC.
     *
     * @return {Boolean} - The result of comparison.
     */
    function compare(a, b, reverse) {
      return reverse ? (b - a) < 0 : (a - b) < 0;
    }

    /**
     * Sort the input array using insertion sort algorithm.
     *
     * @param  {Array} array - Input array.
     * @param  {Boolean} reverse - Whenever the sort order should be ASC or DESC.
     *
     * @return {Array} - Sorted array.
     */
    function insertionSort(array, reverse) {
      if (array.length <= 1) {
        return array;
      }

      for (var i = 0; i < array.length; i += 1) {
        var x = array[i];
        var j = i;

        while (j > 0 && compare(x, array[j - 1], reverse)) {
          array[j] = array[j - 1];
          j -= 1;
        }

        array[j] = x;
      }

      return array;
    }

    /**
     * Calls the private insertionSort function.
     *
     * @param  {Array} array - Input array.
     * @param  {Boolean} reverse - Whenever the sort order should be ASC or DESC.
     *
     * @return {Array} - Sorted array.
     */
    return function (array, reverse) {
      return insertionSort(array, reverse);
    };
  }());

  exports.insertionSort = insertionSort;

})(typeof exports === 'undefined' ? window : exports);

(function (exports) {
  'use strict';

  /**
   * Merge Sort algorithm.
   *
   */
  var mergeSort = (function () {

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
     * Merge two arrays into one sorted.
     *
     * @param  {Array} left - First unsorted array.
     * @param  {Array} right - Second unsorted array.
     * @param  {Boolean} reverse - Whenever the sort order should be ASC or DESC.
     *
     * @return {Array} - Sorted array.
     */
    function merge(left, right, reverse) {
      var result = [];

      while (left.length && right.length) {
        if (compare(left[0], right[0], reverse)) {
          result.push(left.shift());
        }
        else {
          result.push(right.shift());
        }
      }

      while (left.length) {
        result.push(left.shift());
      }

      while (right.length) {
        result.push(right.shift());
      }

      return result;
    }

    /**
     * Sort the input array using top-down merge sort algorithm.
     *
     * @param  {Array} array - Input array.
     * @param  {Boolean} reverse - Whenever the sort order should be ASC or DESC.
     *
     * @return {Array} - Sorted array.
     */
    function mergeSort(array, reverse) {
      if (array.length <= 1) {
        return array;
      }

      var middle = Math.floor(array.length / 2);
      var left = array.slice(0, middle);
      var right = array.slice(middle);

      return merge(mergeSort(left, reverse), mergeSort(right, reverse), reverse);
    }

    /**
     * Calls the private mergeSort function.
     *
     * @param  {Array} array - Input array.
     * @param  {Boolean} reverse - Whenever the sort order should be ASC or DESC.
     *
     * @return {Array} - Sorted array.
     */
    return function (array, reverse) {
      return mergeSort(array, reverse);
    };
  }());

  exports.mergeSort = mergeSort;

})(typeof exports === 'undefined' ? window : exports);

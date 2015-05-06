(function (exports) {
  'use strict';

  /**
   * Quick Sort algorithm.
   *
   */
  var quickSort = (function () {

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
     * Swap the places of two elements.
     *
     * @param  {Array} array - Given array.
     * @param  {Integer} x - The index of the first element.
     * @param  {Integer} y - The index of the second element.
     *
     * @return {Array} - The array with swapped elements.
     */
    function swap(array, x, y) {
      var tmp = array[x];
      array[x] = array[y];
      array[y] = tmp;

      return array;
    }

    /**
     * Partition given array.
     *
     * @param  {Array} array - Input array.
     * @param  {Integer} left - The start of the given array.
     * @param  {Integer} right - The end of the given array.
     * @param  {Boolean} reverse - Whenever the sort order should be ASC or DESC.
     *
     * @return {Integer} leftWall -
     */
    function partition(array, left, right, reverse) {
      var pivot = array[left];
      var leftWall = left;

      for (var i = left + 1; i <= right; i += 1) {
        if (compare(array[i], pivot, reverse)) {
          leftWall += 1;
          swap(array, i, leftWall);
        }
      }

      swap(array, left, leftWall);

      return leftWall;
    }

    /**
     * Sorts given array.
     *
     * @param  {Array} array - Input array.
     * @param  {Integer} left - The start of the array.
     * @param  {Integer} right - The end of the array.
     * @param  {Boolean} reverse - Whenever the sort order should be ASC or DESC.
     *
     * @return {Array} - Sorted array.
     */
    function quickSort(array, left, right, reverse) {
      if (left < right) {
        var pivot = partition(array, left, right, reverse);

        quickSort(array, left, pivot - 1, reverse);
        quickSort(array, pivot + 1, right, reverse);
      }

      return array;
    }

    /**
     * Calls the private quickSort function.
     *
     * @param  {Array} array - Input array.
     * @param  {Boolean} reverse  - Whenever the sort order should be ASC or DESC.
     *
     * @return {Array} - Sorted array.
     */
    return function (array, reverse) {
      return quickSort(array, 0, array.length - 1, reverse);
    };
  }());


  exports.quickSort = quickSort;

})(typeof exports === 'undefined' ? window : exports);

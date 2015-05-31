(function (exports) {
  'use strict';

  /**
   * Selection Sort algorithm.
   *
   */
  var selectionSort = (function () {

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
      return reverse ? (a - b) < 0 : (a - b) > 0;
    }

    /**
     * Selection Sort.
     *
     * @param  {Array} array - Input array.
     * @param  {Boolean} reverse - Whenever the sort order should be ASC or DESC.
     *
     * @return {Array} - Sorted array.
     */
    function selectionSort(array, reverse) {
      if (array.length <= 1) {
        return array;
      }

      var min;
      var index;
      var temp;

      for (var i = 0; i < array.length; i += 1) {
        index = i;
        min = array[i];

        for (var j = i + 1; j < array.length; j += 1) {
          if (compare(min, array[j], reverse)) {
            min = array[j];
            index = j;
          }
        }

        temp = array[i];
        array[i] = min;
        array[index] = temp;
      }

      return array;
    }

    /**
     * Calls the private selectionSort function.
     *
     * @param  {Array} array - Input array.
     * @param  {Boolean} reverse  - Whenever the sort order should be ASC or DESC.
     *
     * @return {Array} - Sorted array.
     */
    return function (array, reverse) {
      return selectionSort(array, reverse);
    };
  }());


  exports.selectionSort = selectionSort;

})(typeof exports === 'undefined' ? window : exports);

(function (exports) {
  'use strict';

  /**
   * Binary Search algorithm.
   */
  var binarySearch = (function () {

    /**
     * Finds the position of a specified input value within an array
     * using the binary search algorithm.
     *
     * @param  {Array} array - Input sorted array.
     * @param  {Integer} left - Start of the array.
     * @param  {Integer} right - End of the array.
     * @param  {Integer} element - Input value of the element which
     * position should be found.
     *
     * @return {Integer} - The position of the element.
     */
    function binarySearch(array, left, right, element) {
      if (array.length < 1 || left > right) {
        return -1;
      }

      left = left || 0;
      right = right || array.length;
      var middle = left + Math.floor((right - left) / 2);

      if (array[middle] === element) {
        return middle;
      }

      if (array[middle] > element) {
        return binarySearch(array, left, middle - 1, element);
      }
      else {
        return binarySearch(array, middle + 1, right, element);
      }
    }

    /**
     * Calls the private binarySearch function.
     *
     * @param  {Array} array - Input array.
     * @param  {Integer} elementToFind - Input element value (key).
     *
     * @return {Integer} - The position of the element.
     */
    return function (array, elementToFind) {
      return binarySearch(array, 0, array.length, elementToFind);
    };
  }());

  exports.binarySearch = binarySearch;

})(typeof exports === 'undefined' ? window : exports);

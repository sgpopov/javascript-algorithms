var binarySearch = require('../../algorithms/searching/binary-search').binarySearch;

describe('Binary Search', function () {
  'use strict';

  var array = [7, 15, 16, 25, 46, 46, 52, 79, 90, 94];

  it('should work with empty array', function () {
    var position = binarySearch([], 10);

    expect(position).toBe(-1);
  });

  it('should find element "52" at position 6', function () {
    var position = binarySearch(array, 52);
    var element = array[position];

    expect(position).toBe(6);
    expect(element).toBe(52);
  });

  it('should not find element', function () {
    var position = binarySearch(array, 20);

    expect(position).toBe(-1);
  });
});

var oddEvenSort = require('../../algorithms/sorting/odd-even-sort').oddEvenSort;

describe('oddeven-sort', function () {
  'use strict';

  var unsorted = [16, 52, 25, 15, 79, 7, 90, 94, 46, 46];
  var sorted = [7, 15, 16, 25, 46, 46, 52, 79, 90, 94];

  it('should work with empty array', function () {
    expect(oddEvenSort([])).toEqual([]);
  });

  it('should return array with the same count of elements', function () {
    expect(oddEvenSort(unsorted).length).toBe(10);
  });

  it('should sort the given array in ascending order', function () {
    expect(oddEvenSort(unsorted)).toEqual(sorted);
  });
});

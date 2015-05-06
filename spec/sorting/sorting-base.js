module.exports = function (sort, algorithmName, reverse) {
  'use strict';

  reverse = reverse || true;

  function generateRandomArray(config) {
    config = config || {};

    var size = config.size || 10;
    var precision = config.precision || 0;
    var multiplier = config.multiplier || 100;
    var array = [];

    for (var i = size; i > 0; i -= 1) {
      array.push(parseFloat((Math.random() * multiplier).toFixed(precision)));
    }

    return array;
  }

  describe(algorithmName, function () {
    it('should work with empty array', function () {
      expect(sort([])).toEqual([]);
    });

    it('should work with sorted array', function () {
      expect(sort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should work with random generated array', function () {
      var array = generateRandomArray();

      sort(array);

      for (var i = array.length - 1; i > 0; i -= 1) {
        expect(array[i] >= array[i - 1]).toBeTruthy();
      }
    });

    if (reverse) {
      it('should sort the numbers in descending order', function () {
        var array = generateRandomArray();

        sort(array, reverse);

        for (var i = array.length - 1; i > 0; i -= 1) {
          expect(array[i] <= array[i - 1]).toBeTruthy();
        }
      });
    }
  });
};

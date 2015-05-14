(function () {
  'use strict';

  var permutations = require('../../../algorithms/mathematics/combinatorics/permutations').permutations;

  describe('Permutations', function () {
    it('should work', function () {
      var expected = [
        [1, 2, 3],
        [2, 1, 3],
        [3, 2, 1],
        [2, 3, 1],
        [3, 1, 2],
        [1, 3, 2]
      ];
      var result = permutations([1, 2, 3]);

      expect(result).toEqual(expected);
    });
  });
})();

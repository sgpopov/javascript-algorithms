(function () {
  'use strict';

  var variations = require('../../../algorithms/mathematics/combinatorics/variations').variations;

  describe('Permutations', function () {
    it('should work', function () {
      var expected = [
        [1, 1], [1, 2], [1, 3], [1, 4],
        [2, 1], [2, 2], [2, 3], [2, 4],
        [3, 1], [3, 2], [3, 3], [3, 4],
        [4, 1], [4, 2], [4, 3], [4, 4]
      ];
      var result = variations([1, 2, 3, 4], 2);

      expect(result).toEqual(expected);
    });
  });
})();

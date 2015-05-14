(function () {
  'use strict';

  var numbers = require('../../../algorithms/mathematics/numbers/numbers').numbers;
  var input = [
    {a: 24, b: 16, gcd: 8, lcm: 48},
    {a: 16, b: 16, gcd: 16, lcm: 16},
    {a: 252, b: 105, gcd: 21, lcm: 1260},
    {a: 13, b: 19, gcd: 1, lcm: 247},
    {a: 18, b: 27, gcd: 9, lcm: 54}
  ];

  describe('Greatest Common Divsor ', function () {
    it('should find GCD', function () {
      input.forEach(function (el) {
        expect(numbers.greatestCommonDivsor(el.a, el.b)).toBe(el.gcd);
        expect(numbers.euclidsGreatestCommonDivsor(el.a, el.b)).toBe(el.gcd);
        expect(numbers.euclidsGreatestCommonDivsorRecursive(el.a, el.b)).toBe(el.gcd);
      });
    });
  });

  describe('Lowest Common Multiple ', function () {
    it('should find LCM', function () {
      input.forEach(function (el) {
        expect(numbers.lowestCommonMultiple(el.a, el.b)).toBe(el.lcm);
      });
    });
  });
})();

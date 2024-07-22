// index.js

const { expect } = require('chai');
const { sum } = require('./helpers.js');

describe('helpers.js', function() {
  describe('sum()', function() {
    it('should return the sum of two numbers', function() {
      // Test case 1: Positive numbers
      expect(sum(1, 2)).to.equal(3);

      // Test case 2: Negative numbers
      expect(sum(-1, -2)).to.equal(-3);

      // Test case 3: Zero and positive number
      expect(sum(0, 5)).to.equal(5);

      // Test case 4: Zero and negative number
      expect(sum(0, -5)).to.equal(-5);

      // Test case 5: Positive number and zero
      expect(sum(10, 0)).to.equal(10);
    });

    it('should handle edge cases', function() {
      // Test case 6: Zero and zero
      expect(sum(0, 0)).to.equal(0);

      // Test case 7: Large numbers
      expect(sum(999999999, 1)).to.equal(1000000000);
    });
  });
});

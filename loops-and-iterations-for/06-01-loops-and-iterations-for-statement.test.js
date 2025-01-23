// forStatement.test.js
const {
  sumOfNumbers,
  generatePattern,
  reverseString,
  filterOddNumbers,
} = require('./06-01-loops-and-iterations-for-statement');

describe('JavaScript Loops and Iterations - For Statement', () => {
  test('sumOfNumbers should calculate the sum of numbers from start to end', () => {
    expect(sumOfNumbers(1, 5)).toBe(15);
    expect(sumOfNumbers(-3, 3)).toBe(0);
    expect(sumOfNumbers(10, 15)).toBe(75);
  });

  test('generatePattern should generate the correct pattern for the given number of rows', () => {
    expect(generatePattern(3)).toBe('*\n**\n***\n');
    expect(generatePattern(5)).toBe('*\n**\n***\n****\n*****\n');
  });

  test('reverseString should reverse the given string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('javascript')).toBe('tpircsavaj');
  });

  test('filterOddNumbers should filter out odd numbers from the given array', () => {
    expect(filterOddNumbers([1, 2, 3, 4, 5])).toEqual([2, 4]);
    expect(filterOddNumbers([10, 11, 13, 15, 20])).toEqual([10, 20]);
  });
});

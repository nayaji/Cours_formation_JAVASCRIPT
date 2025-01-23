// forOfStatement.test.js
const {
  sumArray,
  concatenateStrings,
  findAverage,
  getVowels,
} = require('./06-04-loops-and-iterations-for-of-statement');

describe('JavaScript Loops and Iterations - For...Of Statement', () => {
  test('sumArray should calculate the sum of all numbers in the array', () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
    expect(sumArray([-1, 5, 10, -3])).toBe(11);
    expect(sumArray([])).toBe(0);
  });

  test('concatenateStrings should concatenate all strings in the array', () => {
    expect(concatenateStrings(['Hello', ' ', 'world'])).toBe('Hello world');
    expect(concatenateStrings(['JavaScript', ' ', 'Rocks'])).toBe('JavaScript Rocks');
  });

  test('findAverage should calculate the average of numbers in the array', () => {
    expect(findAverage([1, 2, 3, 4, 5])).toBe(3);
    expect(findAverage([-1, 5, 10, -3])).toBe(2.75);
    expect(findAverage([])).toBe(0);
  });

  test('getVowels should return an array of vowels from the given string', () => {
    expect(getVowels('hello')).toEqual(['e', 'o']);
    expect(getVowels('JavaScript')).toEqual(['a', 'i']);
  });
});

// doWhileStatement.test.js
const {
  sumEvenNumbers,
  printNumbersBackwards,
  reverseString,
  countOccurrences,
} = require('./06-02-loops-and-iterations-do-while-statement');

describe('JavaScript Loops and Iterations - Do...While Statement', () => {
  test('sumEvenNumbers should calculate the sum of even numbers up to the given limit', () => {
    expect(sumEvenNumbers(10)).toBe(30);
    expect(sumEvenNumbers(15)).toBe(56);
    expect(sumEvenNumbers(5)).toBe(6);
  });

  test('printNumbersBackwards should print numbers in reverse order', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    printNumbersBackwards(5);
    expect(consoleSpy).toHaveBeenLastCalledWith(1);
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 4);
    expect(consoleSpy).toHaveBeenNthCalledWith(3, 3);
    expect(consoleSpy).toHaveBeenNthCalledWith(4, 2);
    expect(consoleSpy).toHaveBeenNthCalledWith(5, 1);
    expect(consoleSpy).toHaveBeenCalledTimes(5);
  });

  test('reverseString should reverse the given string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('javascript')).toBe('tpircsavaj');
  });

  test('countOccurrences should count occurrences of val in the given array', () => {
    expect(countOccurrences([1, 2, 3, 4, 2, 5, 2], 2)).toBe(3);
    expect(countOccurrences(['a', 'b', 'c', 'a', 'a'], 'a')).toBe(3);
  });
});

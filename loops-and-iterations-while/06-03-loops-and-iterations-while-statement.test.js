// whileStatement.test.js
const {
  sumOfSquares,
  printReverseArray,
  reverseString,
  findMax,
} = require('./06-03-loops-and-iterations-while-statement');

describe('JavaScript Loops and Iterations - While Statement', () => {
  test('sumOfSquares should calculate the sum of squares from 1 to n', () => {
    expect(sumOfSquares(3)).toBe(14);
    expect(sumOfSquares(5)).toBe(55);
    expect(sumOfSquares(7)).toBe(140);
  });

  test('printReverseArray should print the elements of the array in reverse order', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    printReverseArray([1, 2, 3, 4, 5]);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 5);
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 4);
    expect(consoleSpy).toHaveBeenNthCalledWith(3, 3);
    expect(consoleSpy).toHaveBeenNthCalledWith(4, 2);
    expect(consoleSpy).toHaveBeenNthCalledWith(5, 1);
    expect(consoleSpy).toHaveBeenCalledTimes(5);
    consoleSpy.mockRestore();
  });

  test('reverseString should reverse the given string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('javascript')).toBe('tpircsavaj');
  });

  test('findMax should find the maximum number in the given array', () => {
    expect(findMax([3, 8, 2, 10, 5])).toBe(10);
    expect(findMax([-5, -3, -9, -1])).toBe(-1);
  });
});

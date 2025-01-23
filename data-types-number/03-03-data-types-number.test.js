// numberOperations.test.js
const {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
  powerOfNumber,
} = require('./03-03-data-types-number');

describe('JavaScript Data Types - Number', () => {
  test('addNumbers should return the sum of two numbers', () => {
    expect(addNumbers(5, 3)).toBe(8);
    expect(addNumbers(-7, 10)).toBe(3);
  });

  test('subtractNumbers should return the difference between two numbers', () => {
    expect(subtractNumbers(10, 4)).toBe(6);
    expect(subtractNumbers(3, 8)).toBe(-5);
  });

  test('multiplyNumbers should return the product of two numbers', () => {
    expect(multiplyNumbers(2, 6)).toBe(12);
    expect(multiplyNumbers(-4, 9)).toBe(-36);
  });

  test('divideNumbers should return the result of division', () => {
    expect(divideNumbers(15, 3)).toBe(5);
    expect(divideNumbers(25, 5)).toBe(5);
  });

  test('powerOfNumber should return the result of raising a number to a power', () => {
    expect(powerOfNumber(2, 3)).toBe(8);
    expect(powerOfNumber(5, 2)).toBe(25);
  });
});

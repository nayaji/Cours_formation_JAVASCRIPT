// nullOperations.test.js
const {
  returnNull,
  checkIfNull,
  convertToNull,
} = require('./03-06-data-types-null');

describe('JavaScript Data Types - Null', () => {
  test('returnNull should return null', () => {
    expect(returnNull()).toBeNull();
  });

  test('checkIfNull should check if the value is null and return true or false', () => {
    expect(checkIfNull(null)).toBe(true);
    expect(checkIfNull(5)).toBe(false);
    expect(checkIfNull('null')).toBe(false);
  });

  test('convertToNull should convert the provided value to null and return it', () => {
    expect(convertToNull(10)).toBeNull();
    expect(convertToNull('Hello')).toBeNull();
    expect(convertToNull(undefined)).toBeNull();
  });
});

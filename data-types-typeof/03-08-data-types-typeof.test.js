// typeofOperations.test.js
const {
  getType,
  checkTypes,
  compareTypes,
} = require('./03-08-data-types-typeof');

describe('JavaScript Data Types - typeof', () => {
  test('getType should return the data type of the provided value', () => {
    expect(getType(5)).toBe('number');
    expect(getType('hello')).toBe('string');
    expect(getType(true)).toBe('boolean');
    expect(getType(undefined)).toBe('undefined');
    expect(getType(null)).toBe('object'); // (typeof null returns 'object')
  });

  test('checkTypes should return an array of data types for provided values', () => {
    expect(checkTypes(5, 'hello', true, undefined, null)).toEqual([
      'number',
      'string',
      'boolean',
      'undefined',
      'object',
    ]);
    expect(checkTypes(10, 'world', false, null)).toEqual([
      'number',
      'string',
      'boolean',
      'object',
    ]);
  });

  test('compareTypes should return true if types of both values are the same, otherwise false', () => {
    expect(compareTypes(5, 10)).toBe(true);
    expect(compareTypes('hello', true)).toBe(false);
    expect(compareTypes(null, undefined)).toBe(false);
  });
});
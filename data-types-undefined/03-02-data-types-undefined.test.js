// undefinedType.test.js
const {
  returnUndefined,
  undefinedVariable,
  checkType,
  returnUndefinedVar,
} = require('./03-02-data-types-undefined');

describe('JavaScript Data Types - Undefined', () => {
  test('returnUndefined should return undefined', () => {
    expect(returnUndefined()).toBeUndefined();
  });

  test('undefinedVariable should declare and assign undefined', () => {
    expect(undefinedVariable()).toBeUndefined();
  });

  test('checkType should return the type of the parameter', () => {
    expect(checkType(5)).toBe('number');
    expect(checkType('hello')).toBe('string');
    expect(checkType(undefined)).toBe('undefined');
  });

  test('returnUndefinedVar should return the value of an undefined variable', () => {
    expect(returnUndefinedVar()).toBeUndefined();
  });
});

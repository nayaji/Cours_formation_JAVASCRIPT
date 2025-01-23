// variables.test.js
const {
  declareVarOne,
  declareVarTwo,
  declareVarThree,
  declareVarFour,
  declareVarFive,
  declareVarSix,
} = require('./variables');

describe('Variables Declaration', () => {
  test('declareVarOne should declare myVar with value 10', () => {
    expect(declareVarOne()).toBe(10);
  });

  test('declareVarTwo should declare userName with value "John Doe"', () => {
    expect(declareVarTwo()).toBe('John Doe');
  });

  test('declareVarThree should declare isCompleted with value true', () => {
    expect(declareVarThree()).toBe(true);
  });

  test('declareVarFour should declare emptyArray as an empty array', () => {
    expect(Array.isArray(declareVarFour())).toBe(true);
    expect(declareVarFour()).toHaveLength(0);
  });

  test('declareVarFive should declare nullVar with value null', () => {
    expect(declareVarFive()).toBeNull();
  });

  test('declareVarSix should declare undefinedVar without assignment', () => {
    expect(declareVarSix()).toBeUndefined();
  });
});

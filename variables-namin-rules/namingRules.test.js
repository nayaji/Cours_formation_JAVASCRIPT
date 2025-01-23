// namingRules.test.js
const {
  validVariableName,
  invalidVariableName,
  camelCaseVariableName,
  snake_caseVariableName,
  PascalCaseVariableName,
} = require('./namingRules');

describe('Variables Naming Rules', () => {
  test('validVariableName should create a variable with a valid name', () => {
    expect(validVariableName).toBeDefined();
  });

  test('invalidVariableName should create a variable with an invalid name', () => {
    // Call the function to get the value
    const result = invalidVariableName();

    // Assert that the result is a string
    expect(typeof result).toBe('string');
  });

  test('camelCaseVariableName should create a variable using camelCase', () => {
    expect(camelCaseVariableName).toBeDefined();
    expect(camelCaseVariableName.toString()).toMatch(/camelCaseVariableName/);
  });

  test('snake_caseVariableName should create a variable using snake_case', () => {
    expect(snake_caseVariableName).toBeDefined();
    expect(snake_caseVariableName.toString()).toMatch(/snake_case_variable_name/);
  });

  test('PascalCaseVariableName should create a variable using PascalCase', () => {
    expect(PascalCaseVariableName).toBeDefined();
    expect(PascalCaseVariableName.toString()).toMatch(/PascalCaseVariableName/);
  });
});

// variableScope.test.js
const {
  localScopeExample,
  globalScopeExample,
  blockScopeExample,
  globalVar
} = require('./variableScope');

describe('JavaScript Variable Scope', () => {
  test('localScopeExample should demonstrate local scope', () => {
    expect(localScopeExample()).toBeUndefined();
    expect(typeof localVar).toBe('undefined');
  });

  test('globalScopeExample should demonstrate global scope', () => {
    expect(globalScopeExample()).toBe(globalVar);
  });

  test('blockScopeExample should demonstrate block-level scope', () => {
    expect(blockScopeExample()).toBe(20);
    expect(typeof blockVar).toBe('undefined');
  });
});
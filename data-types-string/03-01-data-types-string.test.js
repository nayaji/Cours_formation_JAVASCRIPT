// stringManipulation.test.js
const {
  createString,
  stringLength,
  stringConcat,
  stringUpperCase,
  stringLowerCase,
  stringSubstring,
} = require('./03-01-data-types-string');

describe('JavaScript Data Types - Strings', () => {
  test('createString should return a string with the value [Johnson 10]', () => {
    expect(typeof createString()).toBe('string');
    expect(createString()).toMatch("Najib"); // Replace with your name
  });

  test('stringLength should return the length of the provided string', () => {
    expect(stringLength('Hello')).toBe(5);
    expect(stringLength('JavaScript')).toBe(10);
  });

  test('stringConcat should concatenate two strings', () => {
    expect(stringConcat('Hello', 'World')).toBe('HelloWorld');
    expect(stringConcat('Open', 'AI')).toBe('OpenAI');
  });

  test('stringUpperCase should convert a string to uppercase', () => {
    expect(stringUpperCase('hello')).toBe('HELLO');
    expect(stringUpperCase('JavaScript')).toBe('JAVASCRIPT');
  });

  test('stringLowerCase should convert a string to lowercase', () => {
    expect(stringLowerCase('WORLD')).toBe('world');
    expect(stringLowerCase('GPT')).toBe('gpt');
  });

  test('stringSubstring should return a substring of the provided string', () => {
    expect(stringSubstring('Hello, World!', 0, 5)).toBe('Hello');
    expect(stringSubstring('JavaScript', 4, 10)).toBe('Script');
  });
});

// breakContinue.test.js
const {
  findElement,
  sumUntilStop,
  skipStrings,
  countVowels,
} = require('./06-05-loops-and-iterations-break-continue');

describe('JavaScript Loops and Iterations - Break/Continue', () => {
  test('findElement should find the index of val in the array', () => {
    expect(findElement([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(findElement(['apple', 'orange', 'banana'], 'orange')).toBe(1);
    expect(findElement([], 10)).toBe(-1);
  });

  test('sumUntilStop should calculate the sum until encountering 0', () => {
    expect(sumUntilStop([1, 2, 3, 0, 4, 5])).toBe(6);
    expect(sumUntilStop([0, 1, 2, 3])).toBe(0);
    expect(sumUntilStop([])).toBe(0);
  });

  test('skipStrings should skip strings and return the sum of numbers', () => {
    expect(skipStrings([1, 'apple', 2, 'orange', 3])).toBe(6);
    expect(skipStrings([])).toBe(0);
  });

  test('countVowels should count the number of vowels in the string', () => {
    expect(countVowels('hello')).toBe(2);
    expect(countVowels('JavaScript')).toBe(3);
    expect(countVowels('')).toBe(0);
  });
});

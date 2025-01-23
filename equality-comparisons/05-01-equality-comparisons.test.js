// equalityComparisons.test.js
const {
  looseEqualityComparison,
  strictEqualityComparison,
  notEqualComparison,
  strictNotEqualComparison,
  deepEqualityComparison,
  objectReferenceComparison
} = require('./05-01-equality-comparisons');

describe('JavaScript Equality Comparisons - Introduction', () => {
  test('looseEqualityComparison should perform loose equality comparison', () => {
    expect(looseEqualityComparison(5, '5')).toBe(true);
    expect(looseEqualityComparison(true, 1)).toBe(true);
    expect(looseEqualityComparison(false, 0)).toBe(true);
    expect(looseEqualityComparison(null, undefined)).toBe(true);
    expect(looseEqualityComparison(10, '10')).toBe(true);
  });

  test('strictEqualityComparison should perform strict equality comparison', () => {
    expect(strictEqualityComparison(5, '5')).toBe(false);
    expect(strictEqualityComparison(true, 1)).toBe(false);
    expect(strictEqualityComparison(false, 0)).toBe(false);
    expect(strictEqualityComparison(null, undefined)).toBe(false);
    expect(strictEqualityComparison(10, '10')).toBe(false);
  });

  test('notEqualComparison should perform not equal comparison', () => {
    expect(notEqualComparison(5, '5')).toBe(false);
    expect(notEqualComparison(true, 1)).toBe(false);
    expect(notEqualComparison(false, 0)).toBe(false);
    expect(notEqualComparison(null, undefined)).toBe(false);
    expect(notEqualComparison(10, '10')).toBe(false);
  });

  test('strictNotEqualComparison should perform strict not equal comparison', () => {
    expect(strictNotEqualComparison(5, '5')).toBe(true);
    expect(strictNotEqualComparison(true, 1)).toBe(true);
    expect(strictNotEqualComparison(false, 0)).toBe(true);
    expect(strictNotEqualComparison(null, undefined)).toBe(true);
    expect(strictNotEqualComparison(10, '10')).toBe(true);
  });

  test('deepEqualityComparison should perform deep equality comparison', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    const obj3 = { a: 1, b: { c: 3 } };
    expect(deepEqualityComparison(obj1, obj2)).toBe(true);
    expect(deepEqualityComparison(obj1, obj3)).toBe(false);
  });

  test('objectReferenceComparison should compare object references', () => {
    const obj1 = { a: 1 };
    const obj2 = obj1;
    const obj3 = { a: 1 };
    expect(objectReferenceComparison(obj1, obj2)).toBe(true);
    expect(objectReferenceComparison(obj1, obj3)).toBe(false);
  });
});

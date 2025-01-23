const {
  createArray,
  getArrayLength,
  accessArrayElement,
  updateArrayElement,
  addArrayElement,
  removeArrayElement,
  getUniqueValues,
  reverseArray,
  findMaxValue,
  findMinValue,
  sortArray,
  flattenNestedArray,
  mergeArrays,
  rotateArray,
  removeDuplicates,
  findCommonElements,
} = require('./04-01-data-structure-indexed-collection-arrays.js');

describe('JavaScript Data Structures - Indexed Arrays', () => {
  test('createArray should create an empty array of given size', () => {
    expect(createArray(5).length).toEqual(5);
    expect(createArray(0)).toEqual([]);
  });

  test('getArrayLength should return the length of the array', () => {
    expect(getArrayLength([1, 2, 3])).toBe(3);
    expect(getArrayLength([])).toBe(0);
  });

  test('accessArrayElement should access and return the element at the specified index', () => {
    expect(accessArrayElement([5, 10, 15], 1)).toBe(10);
    expect(accessArrayElement(['apple', 'orange', 'banana'], 2)).toBe('banana');
  });

  test('updateArrayElement should update the element at the specified index', () => {
    const arr = [1, 2, 3];
    expect(updateArrayElement(arr, 1, 10)).toEqual([1, 10, 3]);
  });

  test('addArrayElement should add a new element at the end of the array', () => {
    const arr = ['apple', 'orange'];
    addArrayElement(arr, 'banana');
    expect(arr).toEqual(['apple', 'orange', 'banana']);
  });

  test('removeArrayElement should remove the element at the specified index', () => {
    const arr = ['apple', 'orange', 'banana'];
    removeArrayElement(arr, 1);
    expect(arr).toEqual(['apple', 'banana']);
  });

  test('getUniqueValues should return an array of unique values', () => {
    expect(getUniqueValues([1, 2, 3, 2, 4, 1, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(getUniqueValues(['apple', 'orange', 'banana', 'apple'])).toEqual([
      'apple',
      'orange',
      'banana',
    ]);
  });

  test('reverseArray should reverse the elements in the array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(reverseArray(arr)).toEqual([5, 4, 3, 2, 1]);
  });

  test('findMaxValue should return the maximum value from the array', () => {
    expect(findMaxValue([10, 5, 20, 15])).toBe(20);
    expect(findMaxValue([-5, -10, -3, -20])).toBe(-3);
  });

  test('findMinValue should return the minimum value from the array', () => {
    expect(findMinValue([10, 5, 20, 15])).toBe(5);
    expect(findMinValue([-5, -10, -3, -20])).toBe(-20);
  });

  test('sortArray should sort the array in ascending order', () => {
    const arr = [5, 10, 1, 8, 3];
    sortArray(arr);
    expect(arr).toEqual([1, 3, 5, 8, 10]);
  });

  test('flattenNestedArray should flatten a nested array', () => {
    expect(flattenNestedArray([1, [2, [3, 4], 5], 6])).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
    expect(flattenNestedArray(['a', ['b', 'c'], 'd'])).toEqual([
      'a',
      'b',
      'c',
      'd',
    ]);
  });

  test('mergeArrays should merge two arrays and remove duplicates', () => {
    expect(mergeArrays([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeArrays(['a', 'b', 'c'], ['c', 'd', 'e'])).toEqual([
      'a',
      'b',
      'c',
      'd',
      'e',
    ]);
  });

  test('rotateArray should rotate the array elements to the right by specified steps', () => {
    const arr = [1, 2, 3, 4, 5];
    rotateArray(arr, 2);
    expect(arr).toEqual([4, 5, 1, 2, 3]);
  });

  test('removeDuplicates should remove duplicate elements from the array', () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(removeDuplicates(['a', 'b', 'b', 'c', 'c', 'd'])).toEqual([
      'a',
      'b',
      'c',
      'd',
    ]);
  });

  test('findCommonElements should find and return common elements between two arrays', () => {
    expect(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([3, 4]);
    expect(findCommonElements(['a', 'b', 'c'], ['c', 'd', 'e'])).toEqual(['c']);
  });
});
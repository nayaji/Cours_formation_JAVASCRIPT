// indexedArrays.js

// Function 1
function createArray(size) {
  return new Array(size);
}

// Function 2
function getArrayLength(arr) {
  return arr.length;
}

// Function 3
function accessArrayElement(arr, index) {
  return arr[index];
}

// Function 4
function updateArrayElement(arr, index, value) {
  arr[index] = value;
  return arr;
}

// Function 5
function addArrayElement(arr, value) {
  arr.push(value);
  return arr;
}

// Function 6
function removeArrayElement(arr, index) {
  arr.splice(index, 1);
  return arr;
}

// Function 7
function getUniqueValues(arr) {
  arr = [... new Set(arr)];
  return arr;
}

// Function 8
function reverseArray(arr) {
  arr.reverse();
  return arr;
}

// Function 9
function findMaxValue(arr) {
  let maxOfArr = Math . max (...arr);
  return (maxOfArr);
}

// Function 10
function findMinValue(arr) {
  let minOfArr = Math . min (...arr);
  return (minOfArr);
}

// Function 11
function sortArray(arr) {
  return arr.sort((a, b) => a - b); 
}

// Function 12
function flattenNestedArray(arr) {
  return arr.flat(Infinity);
}

// Function 13
function mergeArrays(arr1, arr2) {
  let all = [...arr1, ...arr2];
  return [...new Set(all)];
}

// Function 14
function rotateArray(arr, steps) {
  for (let i = 0; i < steps; i++) {
    arr.unshift(arr.pop());
}
return arr;
}

// Function 15
function removeDuplicates(arr) {
  let noDoublons = [...new Set(arr)];
  return noDoublons;
}

// Function 16
function findCommonElements(arr1, arr2) {
let set2 = new Set(arr2);
  return arr1.filter(val => set2.has(val))
}


module.exports = {
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
  findCommonElements

};

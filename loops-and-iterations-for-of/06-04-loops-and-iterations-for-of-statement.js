// forOfStatement.js

// Function 1
function sumArray(arr) {
  let sum = 0;
  for (let x of arr){
    sum += x;
  }
  return sum;
}

// Function 2
function concatenateStrings(arr) {
  let arr1 = "";
  for (const arro of arr) {
    arr1 += arro + "";
  }
    arr1 = arr1.trim();
    return arr1;
}

// Function 3
function findAverage(arr) {
  let sum = 0;
if (arr.length === 0) {
    return 0;
} else {
for(let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
}
const average = sum / arr.length;
return average;
}

// Function 4
function getVowels(str) {
const arrVoyels = [];
const arrVoyels2 = new Set();

for (let i =0; i < str.length; i++) {
  if ('aeiou'.includes(str[i])) {
    arrVoyels2.add(str[i]);
  }
}
arrVoyels.push(...arrVoyels2);
return arrVoyels;
}

module.exports = {
  sumArray,
  concatenateStrings,
  findAverage,
  getVowels,
};

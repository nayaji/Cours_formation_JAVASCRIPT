// forStatement.js

// Function 1
function sumOfNumbers(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
      sum += i;
  }
  return sum;
}

// Function 2
function generatePattern(rows) {
  let pattern = '';
    for (let i = 1; i <= rows; i++) {
        pattern += '*'.repeat(i) + '\n';
    }
    return pattern;
}

// Function 3
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Function 4
function filterOddNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

module.exports = {
  sumOfNumbers,
  generatePattern,
  reverseString,
  filterOddNumbers,
};

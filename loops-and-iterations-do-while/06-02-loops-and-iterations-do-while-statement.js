// doWhileStatement.js

// Function 1
function sumEvenNumbers(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i += 2) {
      sum += i;
  }

  return sum;
}

// Function 2
function printNumbersBackwards(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
}
}

// Function 3
function reverseString(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
  }

  return reversed;
}

// Function 4
function countOccurrences(arr, val) {
  let count = 0;
    for (let item of arr) {
        if (item === val) {
            count++;
        }
    }
    return count;
  }

module.exports = {
  sumEvenNumbers,
  printNumbersBackwards,
  reverseString,
  countOccurrences,
};

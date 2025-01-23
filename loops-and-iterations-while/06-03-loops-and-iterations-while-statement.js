// whileStatement.js

// Function 1
function sumOfSquares(n) {
    if (n <= 0) return 0;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * i;
    }
    return sum;
}

// Function 2
function printReverseArray(arr) {
  if (!Array.isArray(arr)) {
    console.log("Veuillez fournir un tableau valide.");
    return;
}

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}
}

const exempleTableau = [1, 2, 3, 4, 5];
printReverseArray(exempleTableau);


// Function 3
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Function 4
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

module.exports = {
  sumOfSquares,
  printReverseArray,
  reverseString,
  findMax,
};

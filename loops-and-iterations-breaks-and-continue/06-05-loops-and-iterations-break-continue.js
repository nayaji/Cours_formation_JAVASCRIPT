// breakContinue.js

// Function 1
function findElement(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
        return i;
    }
}
return -1;
}


// Function 2
function sumUntilStop(arr) {
  let sum = 0; 

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
          break; 
      }
      sum += arr[i]; 
  }

  return sum; 
}

// Function 3
function skipStrings(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
          sum += arr[i];
      }
  }

  return sum;
}

// Function 4
function countVowels(str) {
  let count = 0;
    const vowels = 'aeiouAEIOU';

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

module.exports = {
  findElement,
  sumUntilStop,
  skipStrings,
  countVowels,
};

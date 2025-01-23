// stringManipulation.js

// Function 1
function createString() {
  let name = "Najib";
  return name;
}

// Function 2
function stringLength(str) {
    return str.length;
}

// Function 3
function stringConcat(str1, str2) {
  return str1 + str2;
}

// Function 4
function stringUpperCase(str) {
  return str.toUpperCase();
}

// Function 5
function stringLowerCase(str) {
  return str.toLowerCase();
}

// Function 6
function stringSubstring(str, start, end) {
  return str.substring(start, end);}


module.exports = {
  createString,
  stringLength,
  stringConcat,
  stringUpperCase,
  stringLowerCase,
  stringSubstring,
};

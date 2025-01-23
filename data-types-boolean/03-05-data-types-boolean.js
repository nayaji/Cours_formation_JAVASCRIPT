// booleanOperations.js

// Function 1
function returnTrue() {
  return true;
}

// Function 2
function returnFalse() {
  return false;
}

// Function 3
function negateBoolean(value) {
  return !value;}

// Function 4
function compareBooleans(bool1, bool2) {
  return bool1 === bool2;
}

module.exports = {
  returnTrue,
  returnFalse,
  negateBoolean,
  compareBooleans,
};

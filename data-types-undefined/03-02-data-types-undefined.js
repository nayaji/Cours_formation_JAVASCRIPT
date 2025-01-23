// undefinedType.js

// Function 1
function returnUndefined() {
  return undefined;
}

// Function 2
function undefinedVariable() {
  let variable;
  return variable;
}

// Function 3
function checkType(param) {
  return typeof param;
}

// Function 4
function returnUndefinedVar() {
  let undefinedVar;
  return undefinedVar;
}

module.exports = {
  returnUndefined,
  undefinedVariable,
  checkType,
  returnUndefinedVar,
};

// namingRules.js


// Function 1
function validVariableName() {
  // Your code here
  const validVariableName = "$jean_dodo"
  return validVariableName
}

// Function 2
function invalidVariableName() {
  // Your code here
  const invalidVariableName = "1jean dodo"
  return invalidVariableName
}

// Function 3
function camelCaseVariableName() {
  // Your code here
  const camelCaseVariableName = "jeanDodo"
  return camelCaseVariableName
}

// Function 4
function snake_caseVariableName() {
  // Your code here
  const snake_case_variable_name = "jean_dodo_beaucoup"
  return snake_case_variable_name
}

// Function 5
function PascalCaseVariableName() {
  // Your code here
  const PascalCaseVariableName = "JeanDodo"
  return PascalCaseVariableName
}

module.exports = {
  validVariableName,
  invalidVariableName,
  camelCaseVariableName,
  snake_caseVariableName,
  PascalCaseVariableName,
};

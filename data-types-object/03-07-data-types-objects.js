// objectOperations.js

// Function 1
function createObject(key1, value1, key2, value2) {
  const obj = {};
  obj[key1] = value1;
  obj[key2] = value2;
  return obj;
}

// Function 2
function accessPropertyValue(obj, property) {
  return obj[property];
}

// Function 3
function checkProperty(obj, property) {
  return property in obj;
}

// Function 4
function addProperty(obj, property, value) {
  obj[property] = value;
  return obj;
}

// Function 5
function removeProperty(obj, property) {
  delete obj[property];
  return obj;
}

module.exports = {
  createObject,
  accessPropertyValue,
  checkProperty,
  addProperty,
  removeProperty,
};

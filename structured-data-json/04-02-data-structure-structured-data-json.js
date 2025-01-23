// structuredDataJSON.js

// Function 1
function parseJSON(json) {
  const obj = JSON.parse(json);
  return obj;

}

// Function 2
function stringifyJSON(obj) {
  return (JSON.stringify(obj));

}

// Function 3
function getValueFromJSON(obj, key) {
  if (key in obj) {
    return obj[key];
  }
}

// Function 4
function updateValueInJSON(obj, key, value) {
  if (key in obj) {
    obj[key] = value;
    return "value ajouté !";
}
}

// Function 5
function removeKeyFromJSON(obj, key) {
  delete obj[key];
  return obj;
}

// Function 6
function filterByAttribute(JSON, attr) {
  if (Array.isArray(JSON.people)) {
    JSON.people = JSON.people.filter(item => item.hasOwnProperty(attr));
}
return { people: JSON.people };
}

// Function 7
function sortByAttribute(JSON, attr) {
  if (Array.isArray(JSON.people)) {
    JSON.people.sort((a, b) => {
        if (a[attr] < b[attr]) {
            return -1;
        } else if (a[attr] > b[attr]) {
            return 1;
        } else {
            return 0;
        }
    });
}
return JSON;
}

// Function 8
function countAttributes(JSON) {
  return Object.keys(JSON).length;
}



// Function 9
function findNestedValue(JSON, path) {

  if (typeof path === 'string') {
    path = path.split('.').map(part => {
        const match = part.match(/^(\w+)\[(\d+)\]$/);
        if (match) {
            return { key: match[1], index: parseInt(match[2], 10) };
        }
        return { key: part };
    });
}

let currentValue = JSON;

for (let { key, index } of path) {
    if (currentValue && currentValue.hasOwnProperty(key)) {
        currentValue = currentValue[key];
        if (index !== undefined && Array.isArray(currentValue)) {
            currentValue = currentValue[index];
        }
    } else {
        return undefined;  // Si une clé n'existe pas, retourner undefined
    }
}
return currentValue;  // Retourner la valeur à la fin du chemin
}


// Function 10
function flattenJSON(JSON, parentKey = '', result = {}) {
  for (let key in JSON) {
      if (JSON.hasOwnProperty(key)) {
          const newKey = Array.isArray(JSON)
              ? `${parentKey}[${key}]`
              : parentKey
              ? `${parentKey}.${key}`
              : key;
          if (typeof JSON[key] === 'object' && JSON[key] !== null) {
              flattenJSON(JSON[key], newKey, result);
          } else {
              result[newKey] = JSON[key];
          }
      }
  }
  return result;
}
   


module.exports = {
  parseJSON,
  stringifyJSON,
  getValueFromJSON,
  updateValueInJSON,
  removeKeyFromJSON,
  filterByAttribute,
  sortByAttribute,
  countAttributes,
  findNestedValue,
  flattenJSON,
};
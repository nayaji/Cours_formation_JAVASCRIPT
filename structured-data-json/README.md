# JavaScript Data Structures Introduction - Structured Data JSON Assignment

This assignment introduces handling structured data in JSON format in JavaScript.

## Instructions

1. Open the `structuredDataJSON.js` file.
2. Complete the functions as per the instructions provided in each function's comment block.
3. Save the file and run the tests using Jest to verify your implementations.

## Getting Started

1. Clone this repository.
2. Open `structuredDataJSON.js`.
3. Follow the instructions within each function's comments.
4. Run `npm install` to install dependencies.
5. Run `npm test` to test your code using Jest.

## Functions to Implement

| Function Name      | Description                                                         |
|--------------------|---------------------------------------------------------------------|
| `parseJSON(json)`  | Parse the provided JSON string and return the JavaScript object.     |
| `stringifyJSON(obj)`| Convert the provided JavaScript object to a JSON string.            |
| `getValueFromJSON(obj, key)`| Retrieve and return the value associated with the given key in the JSON object.      |
| `updateValueInJSON(obj, key, value)`| Update the value associated with the provided key in the JSON object.          |
| `removeKeyFromJSON(obj, key)`| Remove the key-value pair corresponding to the given key from the JSON object. |
| `filterByAttribute(JSON, attr)`| Filter the JSON object based on the provided attribute key. Return the filtered object.|
| `sortByAttribute(JSON, attr)`  | Sort the JSON object based on the provided attribute key. Return the sorted object.    |
| `countAttributes(JSON)`        | Count and return the number of attributes in the JSON object.                          |
| `findNestedValue(JSON, path)`  | Find and return the value at the given nested path in the JSON object.                 |
| `flattenJSON(JSON)`            | Flatten the JSON object into a single-level object.                                     |



## Files Included

- `structuredDataJSON.js`: Starter file where you will write your code.
- `structuredDataJSON.test.js`: Test file to check your implementations using Jest.

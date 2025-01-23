// structuredDataJSON.test.js
const {
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
} = require('./04-02-data-structure-structured-data-json');

describe('JavaScript Data Structures - Structured Data JSON', () => {
  test('parseJSON should parse the JSON string into a JavaScript object', () => {
    const jsonString = '{"name": "Alice", "age": 30, "city": "New York"}';
    const expectedObject = { name: 'Alice', age: 30, city: 'New York' };
    expect(parseJSON(jsonString)).toEqual(expectedObject);
  });

  test('stringifyJSON should convert the JavaScript object to a JSON string', () => {
    const obj = { name: 'Bob', age: 25, city: 'San Francisco' };
    const expectedJSONString = '{"name":"Bob","age":25,"city":"San Francisco"}';
    expect(stringifyJSON(obj)).toEqual(expectedJSONString);
  });

  var sampleJSON1 = {
    name: 'Alice',
    age: 30,
    city: 'New York',
  };

  test('getValueFromJSON should retrieve value associated with the key', () => {
    expect(getValueFromJSON(sampleJSON1, 'name')).toBe('Alice');
    expect(getValueFromJSON(sampleJSON1, 'age')).toBe(30);
    expect(getValueFromJSON(sampleJSON1, 'city')).toBe('New York');
  });

  test('updateValueInJSON should update the value associated with the key', () => {
    const updatedJSON = { ...sampleJSON1 };
    updateValueInJSON(updatedJSON, 'age', 35);
    expect(updatedJSON.age).toBe(35);
  });

  test('removeKeyFromJSON should remove the key-value pair from the JSON object', () => {
    const modifiedJSON = { ...sampleJSON1 };
    removeKeyFromJSON(modifiedJSON, 'age');
    expect(modifiedJSON).toEqual({ name: 'Alice', city: 'New York' });
  });

  var sampleJSON = {
    people: [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 35 },
    ],
    city: 'New York',
    year: 2023,
  };

  test('filterByAttribute should filter JSON based on the provided attribute key', () => {
    const filteredJSON = filterByAttribute(sampleJSON, 'age');
    expect(filteredJSON).toEqual({
      people: [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 25 },
        { name: 'Charlie', age: 35 },
      ],
    });
  });

  test('sortByAttribute should sort JSON based on the provided attribute key', () => {
    const sortedJSON = sortByAttribute(sampleJSON, 'age');
    expect(sortedJSON.people[0].age).toBe(25);
    expect(sortedJSON.people[1].age).toBe(30);
    expect(sortedJSON.people[2].age).toBe(35);
  });

  test('countAttributes should count the number of attributes in the JSON object', () => {
    expect(countAttributes(sampleJSON)).toBe(3);
  });

  var sampleJSON_2 = {
    people: [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 35 },
    ],
    city: 'New York',
    year: 2023,
  };

  test('findNestedValue should find and return the value at the given nested path', () => {
    expect(findNestedValue(sampleJSON_2, 'people[0].name')).toBe('Alice');
    expect(findNestedValue(sampleJSON_2, 'city')).toBe('New York');
  });

  test('flattenJSON should flatten the JSON object into a single-level object', () => {
    const flattened = flattenJSON(sampleJSON_2);
    expect(flattened).toEqual({
      'people[0].name': 'Alice',
      'people[0].age': 30,
      'people[1].name': 'Bob',
      'people[1].age': 25,
      'people[2].name': 'Charlie',
      'people[2].age': 35,
      city: 'New York',
      year: 2023,
    });
  });
});

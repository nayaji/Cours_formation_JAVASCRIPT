// objectOperations.test.js
const {
  createObject,
  accessPropertyValue,
  checkProperty,
  addProperty,
  removeProperty,
} = require('./03-07-data-types-objects');

describe('JavaScript Data Types - Objects', () => {
  test('createObject should return an object with provided key-value pairs', () => {
    expect(createObject('name', 'John', 'age', 25)).toEqual({ name: 'John', age: 25 });
    expect(createObject('fruit', 'apple', 'color', 'red')).toEqual({ fruit: 'apple', color: 'red' });
  });

  test('accessPropertyValue should return the value of the provided property from the object', () => {
    const obj = { name: 'Alice', age: 30, city: 'New York' };
    expect(accessPropertyValue(obj, 'age')).toBe(30);
    expect(accessPropertyValue(obj, 'city')).toBe('New York');
  });

  test('checkProperty should check if the object contains the provided property and return true or false', () => {
    const obj1 = { name: 'Sam', age: 28 };
    const obj2 = { city: 'London', country: 'UK' };
    expect(checkProperty(obj1, 'age')).toBe(true);
    expect(checkProperty(obj2, 'state')).toBe(false);
  });

  test('addProperty should add a new property to the object and return the updated object', () => {
    const obj = { fruit: 'banana', color: 'yellow' };
    expect(addProperty(obj, 'taste', 'sweet')).toEqual({ fruit: 'banana', color: 'yellow', taste: 'sweet' });
  });

  test('removeProperty should remove the property from the object and return the updated object', () => {
    const obj = { name: 'Emma', age: 35, city: 'Paris' };
    expect(removeProperty(obj, 'age')).toEqual({ name: 'Emma', city: 'Paris' });
  });
});

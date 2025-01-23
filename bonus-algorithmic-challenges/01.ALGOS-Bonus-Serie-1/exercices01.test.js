const {
  oddishOrEvenish,
  reverseOdd,
  isSmooth,
  sevenBoom,
  convert,
  findBrokenKeys,
  getTotalPrice,
} = require('./exercices01');

describe('JavaScript exo bonus 00', () => {
  test('Find if a number  is odd or even', () => {
    expect(oddishOrEvenish(43)).toBe("Oddish");
    expect(oddishOrEvenish(373)).toBe("Oddish");
    expect(oddishOrEvenish(4433)).toBe("Evenish");
  });

  test('calculates the total price and returns it as a number', () => {
    expect(getTotalPrice([
      { product: "Milk", quantity: 1, price: 1.50 },
    ])).toBe(1.5);
    expect(getTotalPrice([
      { product: "Milk", quantity: 1, price: 1.50 },
      { product: "Cereals", quantity: 1, price: 2.50 },
    ])).toBe(4);
    expect(getTotalPrice([
      { product: "Milk", quantity: 3, price: 1.50 },
    ])).toBe(4.5);
    expect(getTotalPrice([
      { product: "Milk", quantity: 1, price: 1.50 },
      { product: "Eggs", quantity: 12, price: 0.10 },
      { product: "Bread", quantity: 2, price: 1.60 },
      { product: "Cheese", quantity: 1, price: 4.50 },
    ])).toBe(10.4);
    expect(getTotalPrice([
      { product: "Chocolate", quantity: 1, price: 0.10 },
      { product: "Lollipop", quantity: 1, price: 0.20 },
    ])).toBe(0.3);
  });


test('reverse all the words which have odd length', () => {
  expect(reverseOdd("Bananas")).toBe("sananaB");
  expect(reverseOdd("One two three four")).toBe("enO owt eerht four");
  expect(reverseOdd("Make sure uoy only esrever sdrow of ddo length")).toBe("Make sure you only reverse words of odd length");
});

test('determines whether the input sentence is a smooth sentence', () => {
  expect(isSmooth("Marta appreciated deep perpendicular right trapezoids")).toBe(true);
  expect(isSmooth("Someone is outside the doorway")).toBe(false);
  expect(isSmooth("She eats super righteously")).toBe(true);
});


test('Return boom if 7 is in the array', () => {
  expect(sevenBoom([1, 2, 3, 4, 5, 6, 7])).toBe("Boom!");
  expect(sevenBoom([8, 6, 33, 100])).toBe("there is no 7 in the array");
  expect(sevenBoom([2, 55, 60, 97, 86])).toBe("Boom!");
});

test('converts Celsius to Fahrenheit and vice versa', () => {
  expect(convert("35°C")).toBe("95°F");
  expect(convert("19°F")).toBe("-7°C");
  expect(convert("33")).toBe("Error");
});

test('returns the broken key(s)', () => {
  expect(findBrokenKeys("happy birthday", "hawwy birthday")).toEqual(["p"]);
  expect(findBrokenKeys("starry night", "starrq light")).toEqual(["y", "n"]);
  expect(findBrokenKeys("beethoven", "affthoif5")).toEqual(["b", "e", "v", "n"]);
});
});
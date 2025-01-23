// switchStatements.test.js
const {
  getDayName,
  calculateDiscount,
  getSeason,
  convertGrade,
  getShippingCost,
  calculateTax,
  getTrafficSignalColor,
} = require('./07-02-control-flow-conditional-statements-switch.js');

describe('JavaScript Control Flow - Switch Statements', () => {
  test('getDayName should return the day name based on the day number', () => {
    expect(getDayName(1)).toBe('Sunday');
    expect(getDayName(4)).toBe('Wednesday');
    expect(getDayName(7)).toBe('Saturday');
  });

  test('calculateDiscount should calculate a discount based on the item type', () => {
    expect(calculateDiscount('Electronics')).toBe('20% Discount');
    expect(calculateDiscount('Clothing')).toBe('15% Discount');
    expect(calculateDiscount('Other')).toBe('No Discount');
  });

  test('getSeason should return the season based on the month', () => {
    expect(getSeason(3)).toBe('Spring');
    expect(getSeason(8)).toBe('Summer');
    expect(getSeason(12)).toBe('Winter');
  });

  test('convertGrade should convert a numeric grade into a letter grade', () => {
    expect(convertGrade(90)).toBe('A');
    expect(convertGrade(75)).toBe('C');
    expect(convertGrade(55)).toBe('F');
  });

  test('getShippingCost should calculate shipping cost based on weight and type', () => {
    expect(getShippingCost(5, 'standard')).toBe(10);
    expect(getShippingCost(10, 'express')).toBe(25);
    expect(getShippingCost(20, 'overnight')).toBe(40);
  });

  test('calculateTax should calculate tax based on amount and state', () => {
    expect(calculateTax(100, 'NY')).toBe(8.25);
    expect(calculateTax(50, 'CA')).toBe(5);
    expect(calculateTax(200, 'TX')).toBe(0);
  });

  test('getTrafficSignalColor should get the traffic signal color based on the code', () => {
    expect(getTrafficSignalColor(1)).toBe('Red');
    expect(getTrafficSignalColor(2)).toBe('Yellow');
    expect(getTrafficSignalColor(3)).toBe('Green');
  });
});
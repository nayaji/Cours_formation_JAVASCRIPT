// switchStatements.js

// Function 1
function getDayName(dayNumber) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (dayNumber < 1 || dayNumber > 7) {
      return "Invalid day number. Please enter a number between 1 and 7.";
    }
    return daysOfWeek[dayNumber - 1];
  }

// Function 2
function calculateDiscount(itemType) {
  let discount;
  switch (itemType.toLowerCase()) {
    case "electronics":
      discount = "20% Discount";
      break;
    case "clothing":
      discount = "15% Discount";
      break;
    default:
      discount = "No Discount";
      break;
  }
  return discount;
}

// Function 3
function getSeason(month) {
  if (month >= 3 && month <= 5) {
    return 'Spring';
  } else if (month >= 6 && month <= 8) {
    return 'Summer';
  }else if (month >= 9 && month <= 11) {
    return 'Fall';
  }else if (month === 12 || month <= 2) {
    return 'Winter';
  }else {
    return 'Invalid month';
  }
}

// Function 4
function convertGrade(grade) {
  if (grade >= 90) {
    return 'A';
    } else if (grade > 75) {
    return 'B';
    } else if (grade < 75) {
    return 'F';
    } else {
      return 'C';
    }
}


// Function 5
function getShippingCost(weight, type) {
  if (type === "standard") {
    return weight + 5;
      } else if (type === "express"){
    return weight + 15;
      } else if (type === "overnight"){
    return weight + 20;
}
}

// Function 6
function calculateTax(amount, state) {
  const taxRates = {  
 NY: 0.0825,
 CA: 0.10,
 TX: 0,
};
const tax = amount * taxRates[state];
return tax;
}

// Function 8
function getTrafficSignalColor(code) {
  if (code === 1) {
    return "Red";
  }else if (code === 2) {
return "Yellow";
  }else if (code === 3) {
    return "Green";
  }
}

module.exports = {
  getDayName,
  calculateDiscount,
  getSeason,
  convertGrade,
  getShippingCost,
  calculateTax,
  getTrafficSignalColor

};



function oddishOrEvenish(number) {
  let digits = number.toString();
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]);
  }
  if (sum % 2 === 0) {
  return "Evenish";
  } else {
    return "Oddish";
  }
}

function getTotalPrice(product){
  let total = 0;
  for(let item of product) {
    total += item.price * item.quantity;
  }
  return parseFloat(total.toFixed(1));
}


function reverseOdd(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 === 1) {
      words[i] = words[i].split("").reverse().join("");
    }
  }
  return words.join(" ");
}


function isSmooth(str) {

}

function sevenBoom(arr) {

}

function convert(str) {

}

function findBrokenKeys(str1, str2) {

}


module.exports = {
  oddishOrEvenish,
  reverseOdd,
  isSmooth,
  sevenBoom,
  convert,
  findBrokenKeys,
  getTotalPrice,
};
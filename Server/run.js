const { multiply } = require('./multiply');
const { subtract } = require('./subtract');

let mulResult = multiply(10, 5);
console.log("Multiply: 10 × 5 =", mulResult);

let subResult = subtract(10, 5);
console.log("Subtract: 10 - 5 =", subResult);
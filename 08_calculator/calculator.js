const add = function(x1, x2) {
	return x1 + x2;
};

const subtract = function(x1, x2) {
  return x1 - x2;
	
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
	
};

const multiply = function(x1, x2) {
  return x1 * x2;

};

const power = function(x1, x2) {
  return Math.pow(x1, x2);
	
};

const factorial = function(x) {
	let product = 1;
  for (let i = x; i > 0; i--) {
    product *= i;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function ([...numbers]) {
  return numbers.reduce((acc, current) => acc + (current || 0), 0);
};

const multiply = function ([...numbers]) {
  return numbers.reduce((acc, current) => acc * (current || 1), 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let output = 1;
  for (let i = a; i >= 1; i--) {
    output *= i;
  }
  return output;
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

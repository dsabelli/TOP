let num1 = "";
let num2 = "";
let operator = "";
let product = "";

const dotBtn = document.querySelector(".btn-18");
const acBtn = document.querySelector(".btn-1");
const percentBtn = document.querySelector(".btn-3");
const equalBtn = document.querySelector(".btn-19");
const plusMinusBtn = document.querySelector(".btn-2");
const numBtn = document.querySelectorAll(".num-btn");
const operatorBtn = document.querySelectorAll(".operator");

const output = document.querySelector(".output");

for (let btn of numBtn) {
  btn.addEventListener("click", function () {
    if (operator === "") {
      num1 += btn.textContent;
      num1 = parseInt(num1);
      output.textContent = num1;
    }
    if (operator !== "") {
      num2 += btn.textContent;
      num2 = parseInt(num2);
      output.textContent = num2;
    }
  });
}

for (let btn of operatorBtn) {
  btn.addEventListener("click", function () {
    if (operator !== "" && num2 !== "") {
      product = operate(operator, num1, num2);
      product = parseInt(product);
      output.textContent = product;
      num1 = product;
      num2 = "";
      product = "";
    }
    operator = btn.textContent;
  });
}

equalBtn.addEventListener("click", function () {
  product = operate(operator, num1, num2);
  product = parseInt(product);
  output.textContent = product;
  num1 = product;
  num2 = "";
  operator = "";
  product = "";
});

acBtn.addEventListener("click", clear);

function flip(num) {
  return num * -1;
}
// Function clears variables and display
function clear() {
  num1 = "";
  num2 = "";
  operator = "";
  product = 0;
  output.textContent = 0;
}

// Function returns an operator that is equal
//  to the respective operator button
function operate(operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "x") {
    return multiply(num1, num2);
  } else if (operator === "÷") {
    return divide(num1, num2);
  }
}
// Individual operator functions
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

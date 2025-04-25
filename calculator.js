// Math Operator Functions
function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function operate(firstOperand, operator, secondOperand) {
  switch (operator) {
    case "+":
      return add(firstOperand, secondOperand);
    case "-":
      return substract(firstOperand, secondOperand);
    case "x":
      return multiply(firstOperand, secondOperand);
    case "/":
      return divide(firstOperand, secondOperand);
  }
}
function clear(Value) {
  if (Value.textContent === "clear") {
    calculatorDisplay.textContent = "";
    firstOperand = "";
    operator = "";
    secondOperand = "";
    result = "";
    isFisrtOperandCompleted = false;
    isSecondOperatorExist = false;
    resultExist = false;
  }
}

let numberContent = "0123456789.";
let operatorContent = "+-x/";

function getOperand(buttonContent) {
  return numberContent.includes(buttonContent);
}
function getOperator(buttonContent) {
  return operatorContent.includes(buttonContent);
}
// assign global variables
const calculatorDisplay = document.querySelector(".calculator-display");
const calculatorButtons = document.querySelectorAll(".calculator-button");
let firstOperand = "";
let operator = "";
let secondOperand = "";
let isFisrtOperandCompleted = false;
let isSecondOperatorExist = false;
let result;
let resultExist = false;

//make buttons interactive for user
calculatorButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let textDisplay = button.textContent;
    //get first operand
    if (getOperand(button.textContent) && isFisrtOperandCompleted === false) {
      firstOperand += button.textContent;
    }
    //get first operator
    if (getOperator(button.textContent) && isSecondOperatorExist === false) {
      operator = button.textContent;
      isFisrtOperandCompleted = true;
    }

    //get second operand

    if (getOperand(button.textContent) && isFisrtOperandCompleted === true) {
      secondOperand += button.textContent;
      if (operator === "/" && secondOperand === "0") {
        calculatorDisplay.textContent = "DON'T DIVIDE WITH 0";
        firstOperand = "";
        operator = "";
        secondOperand = "";
        result = "";
        isFisrtOperandCompleted = false;
        isSecondOperatorExist = false;
        return;
      }

      isSecondOperatorExist = true;
    }
    // If second operator exist

    //Calculate in order
    if (getOperator(button.textContent) && isSecondOperatorExist === true) {
      firstOperand = operate(
        Number(firstOperand),
        operator,
        Number(secondOperand)
      );
      secondOperand = "";
      operator = button.textContent;
    }

    //Execute operation
    if (button.textContent === "=") {
      result = operate(
        Number(firstOperand),
        operator,
        Number(secondOperand)
      ).toFixed(2);
      textDisplay = result;
      calculatorDisplay.textContent = "";
      firstOperand = result;
      secondOperand = "";
      isFisrtOperandCompleted = false;
      isSecondOperatorExist = false;
      resultExist = true;
    }
    if (getOperator(button.textContent) && resultExist) {
      calculatorDisplay.textContent += textDisplay;
      resultExist = false;
      return;
    }
    if (getOperand(button.textContent) && resultExist) {
      calculatorDisplay.textContent = "";
      textDisplay = button.textContent;
      firstOperand = button.textContent;
      resultExist = false;
    }
    //display and update text
    calculatorDisplay.textContent += textDisplay;

    //clear everything when clicking
    clear(button);
  });
});

function clear(Value) {
  if (Value.textContent === "clear") {
    calculatorDisplay.textContent = "";
    firstOperand = "";
    operator = "";
    secondOperand = "";
    result = "";
    isFisrtOperandCompleted = false;
    isSecondOperatorExist = false;
    resultExist = false;
  }
}

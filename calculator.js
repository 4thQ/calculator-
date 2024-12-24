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
  if (num2 == 0) {
    return console.error;
  }
  return num1 / num2;
}

function remainder(num1, num2) {
  return num1 % num2;
}

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);

    case "-":
      return subtract(num1, num2);

    case "*":
      return multiply(num1, num2);

    case "/":
      return divide(num1, num2);

    case "%":
      return remainder(num1, num2);

    default:
      break;
  }
}

let firstNumber = ""; //holds the value 12
let secondNumber = ""; // holds 34
let operator = ""; //holds +

const container = document.querySelector(".bottomContainer");
const display = document.querySelector(".displaySpan");
const dot = document.querySelector(".dot");
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("num")) {
    // If there's an operator, we're building `secondNumber`
    if (operator === "") {
      firstNumber += e.target.innerText;
      display.innerText = firstNumber;
    } else {
      secondNumber += e.target.innerText;
      display.innerText = firstNumber + operator + secondNumber;
    }
  } else if (e.target.classList.contains("op")) {
    operator = e.target.innerText;
    display.innerText = firstNumber + operator;
  }

  if (e.target.classList.contains("eq")) {
    finalFirstNum = Number(firstNumber);
    finalSecondNum = Number(secondNumber);

    finalSum = operate(finalFirstNum, operator, finalSecondNum);
    display.innerText = finalSum;

    firstNumber = finalSum; // Use the result as the first number for next operation
    secondNumber = "";
    operator = "";
  }

  if (e.target.classList.contains("clear")) {
    display.innerText = "0";
    firstNumber = "";
    secondNumber = "";
    operator = "";
  }
  if (e.target.classList.contains("del")) {
    if (operator === "") {
      firstNumber = firstNumber.slice(0, -1);
      display.innerText = firstNumber || "0";
    } else if (secondNumber === "") {
      operator = "";
      display.innerText = firstNumber || "0"; // Default to "0" if firstNumber is empty
    } else {
      secondNumber = secondNumber.slice(0, -1);
      display.innerText = firstNumber + operator + secondNumber;
    }
  }

  if (e.target.classList.contains("dot")) {
    // Prevent adding more than one dot in the current number
    if (operator === "") {
      // If `firstNumber` doesn't already contain a dot, add it
      if (!firstNumber.includes(".")) {
        firstNumber += ".";
        display.innerText = firstNumber;
      }
    } else {
      // If `secondNumber` doesn't already contain a dot, add it
      if (!secondNumber.includes(".")) {
        secondNumber += ".";
        display.innerText = firstNumber + operator + secondNumber;
      }
    }
  }
});

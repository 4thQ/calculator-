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
      // Deleting from `firstNumber`
      firstNumber = firstNumber.slice(0, -1);
      display.innerText = firstNumber || "0"; // Show "0" if firstNumber is empty
    } else if (secondNumber === "") {
      // If `secondNumber` is empty, remove the operator
      operator = "";
      display.innerText = firstNumber;
    } else {
      // Deleting from `secondNumber`
      secondNumber = secondNumber.slice(0, -1);
      display.innerText = firstNumber + operator + secondNumber;
    }
  }

  //   if (e.target.classList.contains("dot")) {
  //     if (display.innerText.includes(".")) {
  //       console.log("asd");
  //     } else {
  //       display.innerText += e.target.innerText;
  //     }
  //   }
});

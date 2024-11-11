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

let num1 = "";
let num2 = "";

let firstNumber = "";
let secondNumber = "";

let operator = "";

const btnContainer = document.querySelector(".bottomContainer");
const span0 = document.querySelector(".span0");
btnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("num")) {
    const btnValue = e.target.innerText;
    num1 += btnValue;
    span0.innerText = num1;
    console.log(num1);
  } else if (e.target.classList.contains("op")) {
    firstNumber = num1;
    num1 = "";
    secondNumber = num1;
    operator = e.target.innerText;
    console.log(operator);

    span0.innerText = firstNumber + operator + secondNumber;
  }
});

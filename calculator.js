let num1;
let operator;
let num2;

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
      break;

    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return multiply(num1, num2);
      break;
    default:
      break;
  }
}

const btnContainer = document.querySelector(".bottomContainer");

btnContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const value = e.target.innerText;
    const display = document.querySelector(".display");
    const span = document.createElement("span");
    display.appendChild(span);
    span.innerText = value;
    console.log(span.innerText);
  }
});

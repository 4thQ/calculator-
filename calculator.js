let num1 = "";
let operator = "";
let num2 = "";

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

const btnContainer = document.querySelector(".bottomContainer");

btnContainer.addEventListener("click", (e) => {
  if (e.target.className.includes("btn")) {
    const btnValue = e.target.innerText;
    num1 += btnValue;
    console.log(num1);
    const span = document.querySelector(".span");
    span.innerText = num1;
  }
});

function add(a, b) {
  return Number(a) + Number(b);
}
function multiply(a, b) {
  return Number(a) * Number(b);
}
function divide(a, b) {
  return Number(a) / Number(b);
}
function subtract(a, b) {
  return Number(a) - Number(b);
}
function calculate(event) {
  event.preventDefault();

  const firstNumber = document.getElementById("firstNumber").value;
  const secondNumber = document.getElementById("secondNumber").value;
  const operation = document.getElementById("operation").value;
  const resultDiv = document.getElementById("result");
  let result = null;

  if (operation === "add") {
    result = add(firstNumber, secondNumber);
  } else if (operation === "divide") {
    result = divide(firstNumber, secondNumber);
  } else if (operation === "multiply") {
    result = multiply(firstNumber, secondNumber);
  } else {
    result = subtract(firstNumber, secondNumber);
  }
  resultDiv.innerHTML = result;
  //   alert(result);

  console.log(firstNumber);
  console.log(secondNumber);
  console.log(operation);

  console.log("calculate");
}

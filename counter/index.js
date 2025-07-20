function increment(value) {
  return value + 1;
}
function decrement(value) {
  return value - 1;
}
function reset() {
  return 0;
}

const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");
const result = document.getElementById("result");

incrementButton.addEventListener("click", function () {
  let count = Number(result.innerText);
  const value = increment(count);
  result.innerText = value;
});
decrementButton.addEventListener("click", function () {
  let count = Number(result.innerText);
  const value = decrement(count);
  result.innerText = value;
});
resetButton.addEventListener("click", function () {
  result.innerText = 0;
});

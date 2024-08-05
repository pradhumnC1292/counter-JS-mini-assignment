let count = 0;

function increment() {
  const incrementValue = parseInt(
    document.getElementById("incrementValue").value,
    10
  );
  count += incrementValue;
  updateCount();
}

function decrement() {
  const decrementValue = parseInt(
    document.getElementById("incrementValue").value,
    10
  );
  count -= decrementValue;
  updateCount();
}

function reset() {
  count = 0;
  updateCount();
}

function updateCount() {
  document.getElementById("count").textContent = count;
}

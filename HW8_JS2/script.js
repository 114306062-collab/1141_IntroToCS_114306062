function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}

function calculate() {
  const n1 = Number(document.getElementById("num1").value);
  const n2 = Number(document.getElementById("num2").value);
  const op = document.getElementById("operator").value;

  if (isNaN(n1) || isNaN(n2)) {
    document.getElementById("result").textContent = "Result = Invalid input";
    return;
  }

  let result;

  switch (op) {
    case "+":
      result = add(n1, n2);
      break;
    case "-":
      result = subtract(n1, n2);
      break;
    case "*":
      result = multiply(n1, n2);
      break;
    case "/":
      result = divide(n1, n2);
      break;
  }

  if (typeof result === "number") {
    result = result.toFixed(2);
  }

  document.getElementById("result").textContent = "Result = " + result;
}

const display = document.getElementById("display");

let currentValue = "0";
let previousValue = "";
let operator = null;
let shouldResetDisplay = false;

// Update display text
function updateDisplay() {
    display.value = currentValue;
}

// Handle number buttons
function appendNumber(number) {
    if (currentValue === "0" || shouldResetDisplay) {
        currentValue = number;
        shouldResetDisplay = false;
    } else {
        currentValue += number;
    }
    updateDisplay();
}

// Handle decimal
function appendDecimal() {
    if (!currentValue.includes(".")) {
        currentValue += ".";
        updateDisplay();
    }
}

// Set operator
function setOperator(op) {
    if (operator !== null) calculate();
    previousValue = currentValue;
    operator = op;
    shouldResetDisplay = true;
}

// Perform calculation
function calculate() {
    if (operator === null || shouldResetDisplay) return;

    const prev = parseFloat(previousValue);
    const curr = parseFloat(currentValue);

    switch (operator) {
        case "+":
            currentValue = prev + curr;
            break;
        case "-":
            currentValue = prev - curr;
            break;
        case "*":
            currentValue = prev * curr;
            break;
        case "/":
            currentValue = curr === 0 ? "Error" : prev / curr;
            break;
    }

    operator = null;
    previousValue = "";
    updateDisplay();
}

// Clear all
function clearAll() {
    currentValue = "0";
    previousValue = "";
    operator = null;
    updateDisplay();
}

// Backspace
function backspace() {
    currentValue = currentValue.slice(0, -1) || "0";
    updateDisplay();
}

// Percentage
function percent() {
    currentValue = parseFloat(currentValue) / 100;
    updateDisplay();
}

// +/- sign toggle
function toggleSign() {
    currentValue = (parseFloat(currentValue) * -1).toString();
    updateDisplay();
}

// Square
function square() {
    currentValue = Math.pow(parseFloat(currentValue), 2);
    updateDisplay();
}

// Square root
function squareRoot() {
    currentValue = Math.sqrt(parseFloat(currentValue));
    updateDisplay();
}

// Cube root
function cubeRoot() {
    currentValue = Math.cbrt(parseFloat(currentValue));
    updateDisplay();
}

// 1/x
function reciprocal() {
    const num = parseFloat(currentValue);
    currentValue = num === 0 ? "Error" : (1 / num).toString();
    updateDisplay();
}

// Event Listeners for buttons
document.querySelectorAll("button").forEach(button => {
    if (button.dataset.digit) {
        button.addEventListener("click", () => appendNumber(button.dataset.digit));
    } else if (button.dataset.decimal) {
        button.addEventListener("click", appendDecimal);
    } else if (button.dataset.op) {
        button.addEventListener("click", () => setOperator(button.dataset.op));
    } else if (button.dataset.action) {
        switch (button.dataset.action) {
            case "equals": button.addEventListener("click", calculate); break;
            case "clear": button.addEventListener("click", clearAll); break;
            case "backspace": button.addEventListener("click", backspace); break;
            case "percent": button.addEventListener("click", percent); break;
            case "sign": button.addEventListener("click", toggleSign); break;
            case "square": button.addEventListener("click", square); break;
            case "squareroot": button.addEventListener("click", squareRoot); break;
            case "cuberoot": button.addEventListener("click", cubeRoot); break;
            case "1/number": button.addEventListener("click", reciprocal); break;
        }
    }
});

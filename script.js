let currentInput = '';

function appendValue(value) {
    currentInput += value;
    document.getElementById('displayInput').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('displayInput').value = '';
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        document.getElementById('displayInput').value = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById('displayInput').value = 'Error';
        currentInput = '';
    }
}

function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
        const resultField = document.getElementById('result');
        resultField.value = resultField.value.slice(0, -1); 
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}

// TRIGGER KEYBOARD FUNCTION
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // pengecekan apakah tombol yang ditekan adalah angka atau operator hayuk
    if ('0123456789+-*/'.includes(key)) {
        appendToResult(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        clearResult();
    } else if (key === 'Escape') {
        clearResult();
    }
});
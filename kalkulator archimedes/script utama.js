function clearDisplay() {
    document.getElementById('display').textContent = '0';
}

function appendCharacter(character) {
    const display = document.getElementById('display');
    if (display.textContent === '0') {
        display.textContent = character;
    } else {
        display.textContent += character;
    }
}

function deleteCharacter() {
    const display = document.getElementById('display');
    display.textContent = display.textContent.slice(0, -1) || '0';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Error';
    }
}

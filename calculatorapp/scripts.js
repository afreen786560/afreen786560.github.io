const display = document.getElementById('display');

// Display me value add karne ke liye
function appendValue(input) {
    display.value += input;
}

// Display saaf (clear) karne ke liye
function clearDisplay() {
    display.value = '';
}

// Ek character piche delete (backspace) karne ke liye
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Calculation karne ke liye
function calculate() {
    try {
        if (display.value !== '') {
            // eval function expression ko compute karta ha
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => {
            clearDisplay();
        }, 1500);
    }
}const display = document.getElementById('display');

// Display me value add karne ke liye
function appendValue(input) {
    display.value += input;
}

// Display saaf (clear) karne ke liye
function clearDisplay() {
    display.value = '';
}

// Ek character piche delete (backspace) karne ke liye
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Calculation karne ke liye
function calculate() {
    try {
        if (display.value !== '') {
            // eval function expression ko compute karta ha
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => {
            clearDisplay();
        }, 1500);
    }
}
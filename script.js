const display = document.getElementById('display');
let currentInput = '';

document.querySelectorAll('.btn').forEach(button => {
button.addEventListener('click', () => {
const value = button.textContent;

if (value === 'C') {
currentInput = '';
display.textContent = '0';
} else if (value === '=') {
try {
if (currentInput && /[0-9)]$/.test(currentInput)) {
currentInput = eval(currentInput).toString();
display.textContent = currentInput;
} else {
display.textContent = 'Error';
}
} catch (e) {
display.textContent = 'Error';
}
} else {
currentInput += value;
display.textContent = currentInput;
}
});
});
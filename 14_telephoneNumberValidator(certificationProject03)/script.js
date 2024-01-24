const userInput = document.getElementById('user-input');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const results = document.getElementById('results-div');

const validRegex = /^1?[-.\s]?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;


function checkInput() {
    const value = userInput.value;
    if (value === '') {
        alert('Please provide a phone number');
        return;
    }
    if (validRegex.test(value)) {
        results.textContent = `Valid US number: ${value}`
    } else {
        results.textContent = `Invalid US number: ${value}`
    }
    userInput.value = '';
};

const clearResult = () => results.textContent = '';

checkButton.addEventListener('click', checkInput);
clearButton.addEventListener('click', clearResult);
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkInput();
    }
})
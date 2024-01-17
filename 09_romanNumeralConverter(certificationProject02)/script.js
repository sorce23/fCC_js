const inputNumber = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const romanNumbers = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M'
}

function convert(input) {
    let result = '';

    const keys = Object.keys(romanNumbers).sort((a, b) => b - a);

    for (const key of keys) {
        const keyInt = parseInt(key);

        while (input >= keyInt) {
            result += romanNumbers[key];
            input -= keyInt;
        }
    }

    return result;
}


function checkInput() {
    const inputInt = parseInt(inputNumber.value);
    if (!inputNumber.value || isNaN(inputInt)) {
        output.textContent = 'Please enter a valid number';
        return;
    }
    if (inputInt <= 0 ) {
        output.textContent = 'Please enter a number greater than or equal to 1';
        return;
    }
    if (inputInt >= 4000) {
        output.textContent = 'Please enter a number less than or equal to 3999';
        return;
    }
    output.textContent = convert(inputInt);
    inputNumber.value = '';
};


convertBtn.addEventListener('click', checkInput);
inputNumber.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkInput();
    }
});
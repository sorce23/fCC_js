const input = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');
let isPalindrome = false;

function output() {
    if (!input.value) {
        alert('Please input a value');
        return null;
    }
    const str = cleanInputString(input.value);
    if (str.join("").toLowerCase() === str.reverse().join("").toLowerCase()) {
        isPalindrome = true;
    }
    const palindromeMatch = isPalindrome ? "is a palindrome" : "is not a palindrome";
    result.innerText = `${input.value} ${palindromeMatch}`;
    input.value = null;
    isPalindrome = false;
}

function cleanInputString(str) {
    const regex = /[a-z\d]/gi;
    return str.match(regex);
}

checkBtn.addEventListener('click', output)
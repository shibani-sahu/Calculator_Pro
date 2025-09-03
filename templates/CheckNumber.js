const palindromeCheck = () => {
    const num = document.getElementById('palindromeInput').value;
    const reversedNum = num.split('').reverse().join('');
    const result = (num === reversedNum) ? `${num} is a Palindrome Number.` : `${num} is not a Palindrome Number.`;
    document.getElementById('palindromeResult').innerText = result;
}
document.getElementById('checkPalindrome').addEventListener('click', palindromeCheck);
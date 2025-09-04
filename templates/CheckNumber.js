const palindromeCheck = () => {
    const num = document.getElementById('palindromeInput').value;
    const reversedNum = num.split('').reverse().join('');
    const result = (num === reversedNum) ? `${num} is a Palindrome Number.` : `${num} is not a Palindrome Number.`;
    document.getElementById('palindromeResult').innerText = result;
}
document.getElementById('checkPalindrome').addEventListener('click', palindromeCheck);

const primeCheck = () =>{
    const num = document.getElementById('primeInput').value;
    let isPrime = true;
    if (num <=1) 
        isPrime = false;
    else{
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i===0)
                isPrime=false;
        }
    }
    const result=isPrime?`${num} is a Prime Number.`:`${num} is not a Prime Number.`;
    document.getElementById('primeResult').innerText=result;
}
document.getElementById('checkPrime').addEventListener('click', primeCheck);

const evenOddCheck = () => {
    const no = document.getElementById('evenOddInput').value;
    const result = (no % 2 === 0) ? `${no} is an Even Number.` : `${no} is an Odd Number.`;
    document.getElementById('evenOddResult').innerText = result;
}
document.getElementById('checkEvenOdd').addEventListener('click', evenOddCheck);

const armstrongCheck = () => {
    const number = document.getElementById('armstrongInput').value;
    const numStr = number.toString();
    const numDigits = numStr.length;
    let sum = 0;
    for (let char of numStr) {
        sum += Math.pow(parseInt(char), numDigits);
    }
    const result = (sum === parseInt(number)) ? `${number} is an Armstrong Number.` : `${number} is not an Armstrong Number.`;
    document.getElementById('armstrongResult').innerText = result;
}
document.getElementById('checkArmstrong').addEventListener('click', armstrongCheck);

const strongCheck = () => {
    const num = document.getElementById('strongInput').value;
    let sum = 0;
    for (let char of num) {
        let digit = parseInt(char);
        let fact = 1;
        for (let i = 1; i <= digit; i++) {
            fact *= i;
        }
        sum += fact;
    }
    const result = (sum === parseInt(num)) ? `${num} is a Strong Number.` : `${num} is not a Strong Number.`;
    document.getElementById('strongResult').innerText = result;
}
document.getElementById('checkStrong').addEventListener('click', strongCheck);
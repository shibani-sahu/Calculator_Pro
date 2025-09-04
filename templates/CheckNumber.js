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

const automorphicCheck = () => {
    const num = document.getElementById('automorphicInput').value;
    const squaredNum = (parseInt(num) * parseInt(num)).toString();
    const result = squaredNum.endsWith(num) ? `${num} is an Automorphic Number.` : `${num} is not an Automorphic Number.`;
    document.getElementById('automorphicResult').innerText = result;
}
document.getElementById('checkAutomorphic').addEventListener('click', automorphicCheck);

const spyCheck = () => {
    const num = document.getElementById('spyInput').value;
    let sum = 0;
    let product = 1;
    for (let char of num) {
        let digit = parseInt(char);
        sum += digit;
        product *= digit;
    }
    const result = (sum === product) ? `${num} is a Spy Number.` : `${num} is not a Spy Number.`;
    document.getElementById('spyResult').innerText = result;
}
document.getElementById('checkSpy').addEventListener('click', spyCheck);

const neonCheck = () => {
    const num = document.getElementById('neonInput').value;
    const squaredNum = (parseInt(num) * parseInt(num)).toString();
    let sum = 0;
    for (let char of squaredNum) {
        sum += parseInt(char);
    }
    const result = (sum === parseInt(num)) ? `${num} is a Neon Number.` : `${num} is not a Neon Number.`;
    document.getElementById('neonResult').innerText = result;
}
document.getElementById('checkNeon').addEventListener('click', neonCheck);
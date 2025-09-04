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
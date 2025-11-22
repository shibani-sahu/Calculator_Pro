const findNumbers = () =>{
    const start = document.getElementById('startInput').value;
    const end = document.getElementById('endInput').value;
    const type = document.getElementById('numbers').value;
    console.log(start, end, type);
    let result = [];
    for(let num = parseInt(start); num <= parseInt(end); num++){
        if(type === "prime"){
            let isPrime = true;
            if(num <=1)
                isPrime = false;
            else{
                for(let i=2;i<=Math.sqrt(num);i++){
                    if(num%i===0)
                        isPrime=false;
                }
            }
            if(isPrime)
                result.push(num);
        }
        else if(type === "even"){
            if(num % 2 === 0)
                result.push(num);
        }
        else if(type === "odd"){
            if(num % 2 !== 0)
                result.push(num);
        }
        else if(type === "armstrong"){
            const numStr = num.toString();
            const numDigits = numStr.length;
            let sum = 0;
            for (let char of numStr) {
                sum += Math.pow(parseInt(char), numDigits);
            }
            if (sum === num)
                result.push(num);
        }
        else if(type === "strong"){
            let sum = 0;
            for (let char of num.toString()) {
                let digit = parseInt(char);
                let fact = 1;
                for (let i = 1; i <= digit; i++) {
                    fact *= i;
                }
                sum += fact;
            }
            if (sum === num)
                result.push(num);
        }
        else if(type === "automorphic"){
            const squaredNum = (num * num).toString();
            if (squaredNum.endsWith(num.toString()))
                result.push(num);
        }
        else if(type === "perfect"){
            let sum = 0;
            for (let i = 1; i <= num / 2; i++) {
                if (num % i === 0) {
                    sum += i;
                }
            }
            if (sum === num && num !== 0)
                result.push(num);
        }
        else if(type === "fibonacci"){
            let a = 0, b = 1;
            while (b <= num) {
                if (b === num) {
                    result.push(num);
                    break;
                }
                let next = a + b;
                a = b;
                b = next;
            }
        }
        else if(type === "neon"){
            const squaredNum = (num * num).toString();
            let digitSum = 0;
            for (let char of squaredNum) {
                digitSum += parseInt(char);
            }
            if (digitSum === num)
                result.push(num);
        }
        else if(type === "buzz"){
            if (num % 10 === 7 || num % 7 === 0)
                result.push(num);
        }
        else if(type === "harshad"){
            let digitSum = 0;
            for (let char of num.toString()) {
                digitSum += parseInt(char);
            }
            if (num % digitSum === 0)
                result.push(num);
        }
        else if(type === "happy"){
            let temp = num;
            const seen = new Set();
            while (temp !== 1 && !seen.has(temp)) {
                seen.add(temp);
                let digitSum = 0;
                for (let char of temp.toString()) {
                    digitSum += Math.pow(parseInt(char), 2);
                }
                temp = digitSum;
            }
            if (temp === 1)
                result.push(num);
        }
        else if (type === "spy"){
            let sum = 0;
            let product = 1;
            for (let char of num.toString()) {
                let digit = parseInt(char);
                sum += digit;
                product *= digit;
            }
            if (sum === product)
                result.push(num);
        }
        else if(type === "palindrome"){
            const numStr = num.toString();
            const reversedStr = numStr.split('').reverse().join('');
            if (numStr === reversedStr)
                result.push(num);
        }
    }
    document.getElementById('result').innerText = result.length > 0 ? `The ${type} numbers between ${start} and ${end} are: ${result.join(", ")}` : `No ${type} numbers found between ${start} and ${end}.`;

}
document.getElementById("find").addEventListener("click", findNumbers);
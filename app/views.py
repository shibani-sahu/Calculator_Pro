from django.shortcuts import render
# Create your views here.

from django.http import HttpResponse

def index(request):
    return render(request,'index.html')

def Currency(request):
    return render(request,'Currency.html')

def Measurement(request):
    return render(request, 'Measurement.html')

def Time(request):
    return render(request, 'Time.html')

def About(request):
    return render(request, 'About.html')

def Temperature(request):
    return render(request,'Temperature.html')

def FindNumbers(request):
    return render(request, 'FindNumbers.html') 

def prime(request):
    result = ""
    if request.method == "POST":
        n = int(request.POST.get("n"))
        if n > 1:
            for i in range(2, int(n/2) + 1):
                if n % i == 0:
                    result = f"{n} is not a prime number"
                    break
            else:
                result = f"{n} is a prime number"
        else:
            result = f"{n} is not a prime number"
    return render(request, "CheckNumbers.html", {"primeResult": result})


def Palindrome(request):
    result =""
    if request.method=='POST':
        n=int(request.POST['n'])
        n1=n
        rev=0
        while n1>0:
            r=n1%10
            n1=n1//10
            rev=rev*10+r
       
        if n==rev:
            result = f"{n} is a palindrome number"
        else:
            result = f"{n} is not a palindrome number"
    return render(request,'CheckNumbers.html',{"palindromeResult": result})

def Strong(request):
    result=""
    if request.method=='POST':
        n=int(request.POST['n'])
        n1=n
        Sn=0
        while n1>0:
            r=n1%10
            fact=1
            for i in range(1,r+1):
                fact=fact*i
            Sn+=fact
            n1=n1//10
        if n==Sn:
            result=f"{n} is a Strong number"
        else:
            result = f"{n} is not a Strong number"
    return render(request, 'CheckNumbers.html',{"strongResult":result})

def Armstrong(request):
    result=""
    if request.method=='POST':
        n=int(request.POST['n'])
        n1=n
        An=0
        while n1>0:
            r=n1%10
            n1= n1//10
            An+=r**len(str(n))
        if n==An:
            result=f"{n} is an Armstrong number"
        else:
            result = f"{n} is not an Armstrong  number"
    return render(request, 'CheckNumbers.html',{"armstrongResult":result})

def EvenOdd(request):
    result=""
    if request.method=='POST':
        n=int(request.POST['n'])
        if n%2==0:
            result = f"{n} is Even"
        else:
            result = f"{n} is Odd"
    return render(request, 'CheckNumbers.html',{"evenOddResult":result})

def Automorphic(request):
    result=""
    if request.method=='POST':
        n=int(request.POST['n'])
        square=n*n
        str_n=str(n)
        str_square=str(square)
        if str_square.endswith(str_n):
            result=f"{n} is an Automorphic number"
        else:
            result = f"{n} is not an Automorphic number"
    return render(request, 'CheckNumbers.html',{"automorphicResult":result})

def spy(request):
    result=""
    if request.method=='POST':
        n=int(request.POST['n'])
        n1=n
        sum=0
        prod=1
        while n1>0:
            r=n1%10
            sum+=r
            prod*=r
            n1=n1//10
        if sum==prod:
            result=f"{n} is a Spy number"
        else:
            result = f"{n} is not a Spy number"
    return render(request, 'CheckNumbers.html',{"spyResult":result})

def Happy(request):
    result=""
    if request.method=='POST':
        n=int(request.POST['n'])
        n1=n
        seen=set()
        while n1!=1 and n1 not in seen:
            seen.add(n1)
            sum=0
            while n1>0:
                r=n1%10
                sum+=r**2
                n1=n1//10
            n1=sum
        if n1==1:
            result=f"{n} is a Happy number"
        else:
            result = f"{n} is not a Happy number"
    return render(request, 'CheckNumbers.html',{"happyResult":result})

def Harshad(request):
    result=""
    if request.method=='POST':
        n=int(request.POST['n'])
        n1=n
        sum=0
        while n1>0:
            r=n1%10
            sum+=r
            n1=n1//10
        if n%sum==0:
            result=f"{n} is a Harshad number"
        else:
            result = f"{n} is not a Harshad number"
    return render(request, 'CheckNumbers.html',{"harshadResult":result})

def Perfect(request):
    result=""
    if request.method=='POST':
        n=int(request.POST['n'])
        sum=0
        for i in range(1,n):
            if n%i==0:
                sum+=i
        if sum==n:
            result=f"{n} is a Perfect number"
        else:
            result = f"{n} is not a Perfect number"
    return render(request, 'CheckNumbers.html',{"perfectResult":result})

def Buzz(request):
    result=""
    if request.method=='POST':
        n=int(request.POST['n'])
        if n%7==0 or str(n).endswith('7'):
            result=f"{n} is a Buzz number"
        else:
            result = f"{n} is not a Buzz number"
    return render(request, 'CheckNumbers.html',{"buzzResult":result})

def Neon(request):
    result=""
    if request.method=='POST':
        n=int(request.POST['n'])
        square=n*n
        sum=0
        for digit in str(square):
            sum+=int(digit)
        if sum==n:
            result=f"{n} is a Neon number"
        else:
            result = f"{n} is not a Neon number"
    return render(request, 'CheckNumbers.html',{"neonResult":result})

def CheckNumbers(request):
    return render(request, 'CheckNumbers.html')








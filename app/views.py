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
        print(rev)
        print(n)
        if n==rev:
            result = f"{n} is a palindrome number"
        else:
            result = f"{n} is not a palindrome number"
    return render(request,'CheckNumbers.html',{"palindromeResult":result})

def Armstrong(request):
    if request.method=='POST':
        n=int(request.POST['n'])
        n1=n
        An=0
        while n1>0:
            r=n1%10
            n1= n1//10
            An+=r**len(str(n))
        if n==An:
            return HttpResponse(True)
        else:
            return HttpResponse(False)
    return render(request, 'CheckNumbers.html')

def EvenOdd(request):
    if request.method=='POST':
        n=int(request.POST['n'])
        if n%2==0:
            return HttpResponse('Even')
        else:
            return HttpResponse('Odd')
        
    return render(request, 'CheckNumbers.html')
        
def Harshad(request):
    if request.method=='POST':
        n=int(request.POST['n'])
        n1=n
        Hn=0
        while n1>0:
            r=n1%10
            n1=n1//10
            Hn+=r
        if n%Hn==0:
            return HttpResponse(True)
        else:
            return HttpResponse(False)

    return render(request, 'CheckNumbers.html') 

def Perfect(request):
    if request.method=='POST':
        n=int(request.POST['n'])
        sum=0
        i=1
        while i<n:
            if n%i==0:
                sum+=i
            i+=1
        if sum==n:
            return HttpResponse(True)
        else:
            return HttpResponse(False)
    return render(request, 'CheckNumbers.html') 

def Buzz(request):
    if request.method=='POST':
        n=int(request.POST['n'])
        if n % 7 == 0 or n % 10 == 7:
            return HttpResponse(True)
        else:
            return HttpResponse(False)  
    return render(request, 'CheckNumbers.html')


def CheckNumbers(request):
    return render(request, 'CheckNumbers.html')








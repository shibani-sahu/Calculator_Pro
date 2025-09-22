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
    if request.method=='POST':
        n=int(request.POST['n'])
        if n>1:
            for i in range(2,n//2+1):
                if n%i==0:
                    return HttpResponse(False)
        
            else:
                return HttpResponse(True)
        else:
            return HttpResponse(False)
    return render(request,'CheckNumbers.html')

def Palindrome(request):
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
            return HttpResponse(True)
        else:
            return HttpResponse(False)
    return render(request,'CheckNumbers.html')

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
'''
def Strong(request):
     if request.method=='POST':
        n=int(request.POST['n'])
        n1 = n
        sum_fact = 0
        while n1 > 0:
            rem = n1 % 10
            fact = 1
            for i in range(1, rem + 1):
                fact *= i

            sum_fact += fact
            n1 //= 10

        if sum_fact == n:
            return HttpResponse(True)
        else:
            return HttpResponse(False)      
    return render(request, 'CheckNumbers.html')

def Happy(request):
     if request.method=='POST':
        n=int(request.POST['n'])
        new = set()
        while n != 1 and n not in visited:
            new.add(num)
            sum_sq = 0
            while num > 0:
                digit = num % 10
                sum_sq += digit * digit
                num //= 10
            
            num = sum_sq

        if num == 1:
            print("Happy number")
        else:
            print("Not a Happy number")

    return render(request, 'CheckNumbers.html')

def Automorphic(request):
     if request.method=='POST':
        n=int(request.POST['n'])

    

def Spy(request):
     if request.method=='POST':
        n=int(request.POST['n'])

   
def Neon(request):
     if request.method=='POST':
        n=int(request.POST['n'])
        square = n * n
        sum = 0
        while square > 0:
            sum += square % 10
            square //= 10

        if sum == n:
            return HttpResponse(True)
        else:
            return HttpResponse(False)
'''   

def CheckNumbers(request):
    return render(request, 'CheckNumbers.html')

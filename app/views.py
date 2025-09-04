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


def CheckNumbers(request):
    return render(request, 'CheckNumbers.html')

def FindNumbers(request):
    return render(request, 'FindNumbers.html') 


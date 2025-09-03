from django.shortcuts import render
# Create your views here.
<<<<<<< Updated upstream
from django.http import HttpResponse

=======
from django.http import HttpResponse 
>>>>>>> Stashed changes



def index(request):
    return render(request,'index.html')

def Currency(request):
    return render(request,'Currency.html')

def Measurement(request):
<<<<<<< Updated upstream
    return render(request, 'Measurement.html')

def Time(request):
    return render(request, 'Time.html')

def About(request):
    return render(request, 'About.html')

def Temperature(request):
    return render(request,'Temperature.html')
=======
    return render(request, 'Measurement.html')
>>>>>>> Stashed changes

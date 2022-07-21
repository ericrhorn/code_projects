from django.shortcuts import render

# Create your views here.

from django.shortcuts import render, HttpResponse
def index(request):
    return HttpResponse("Everything works so far!")

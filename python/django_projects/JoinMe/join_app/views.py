from django.shortcuts import render, redirect
from django.contrib import messages
from .models import *
# import bcrypt

from django.shortcuts import render, HttpResponse

def index(request):
    return render(request, "index.html")

def register(request):
    return render(request, "register.html")

def login(request):
    return render(request, "login.html")

def dashboard(request):
    return render(request, "dashboard.html")

def new_event(request):
    return render(request, "new_event.html")

def all_events(request):
    return render(request, "all_events.html")

def update(request):
    return render(request, "edit_event.html")

def info(request):
    return render(request, "event_details.html")

def logout(request):
    request.session.flush()
    return redirect('/')

def delete(request):
    return redirect('/')



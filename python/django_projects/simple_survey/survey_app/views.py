from django.shortcuts import render, redirect


def index(request):
    return render(request, "index.html")
    

def display(request):
    if request.method == "POST":
        context = {
            "first_name" : request.POST["first_name"],
            "last_name" : request.POST["last_name"],
        }
    return render(request, "display.html", context)


def index(request):
    return render(request, "index.html")
    

def display(request):
    if request.method == "POST":
        context = {
            "first_name" : request.POST["first_name"],
            "last_name" : request.POST["last_name"],
            "language" : request.POST["language"],
            "affinity" : request.POST["affinity"],
            "comm" : request.POST["comment"]
        }
    return render(request, "display.html", context)







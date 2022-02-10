from django.shortcuts import render, HttpResponse
# from time import gmtime, strftime
import datetime
import time

# def index(request):
#     return render(request, "index.html")


    
def index(request):
    t = time.localtime()
    context = {
        "date": datetime.date.today(),
        "time": time.strftime("%I:%M %p", t)
        # "date": strftime("%Y-%m-%d", gmtime()),
        # "time": strftime("%H:%M %p", gmtime())
    }
    return render(request,'index.html', context)


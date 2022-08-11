from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import redirect, render
from event.forms import newEventForm, newVenueForm
from event.models import Event, Venue
from account.models import Account




def new_event_view(request, *args, **kwargs):
    submitted = False
    venue_list = Venue.objects.all()
    if request.method == "POST":
        form = newEventForm(request.POST)
        if form.is_valid():
            event = form.save(commit=False)
            user = request.user
            event.host = user
            event.save()
            return HttpResponseRedirect('/new_event?submitted=True')
    else:
        form = newEventForm()
        if 'submitted' in request.GET:
            submitted = True
    return render(request, "new_event.html", {'venue_list' : venue_list, 'form' : form, 'submitted' : submitted})



def new_venue_view(request, *args, **kwargs):
    submitted = False
    if request.method == "POST":
        form = newVenueForm(request.POST)
        if form.is_valid():
            venue = form.save(commit=False)
            user = request.user
            venue.owner = user
            venue.save()
            return HttpResponseRedirect('/new_venue?submitted=True')
    else:
        form = newVenueForm()
        if 'submitted' in request.GET:
            submitted = True
    return render(request, "new_venue.html", {'form' : form, 'submitted' : submitted})





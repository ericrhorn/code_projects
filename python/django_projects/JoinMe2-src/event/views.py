from multiprocessing import context
from django.http import HttpResponseRedirect
from django.shortcuts import redirect, render
from event.forms import newEventForm, newVenueForm
from event.models import Event, Venue
from account.models import Account




def new_event_view(request, *args, **kwargs):
    venue_list = Venue.objects.all()
    if request.method == "POST":
        form = newEventForm(request.POST)
        if form.is_valid():
            event = form.save(commit=False)
            user = request.user
            event.host = user
            event.save()
            # return redirect('home')
    else:
        form = newEventForm()
    return render(request, "new_event.html", {'venue_list' : venue_list, 'form' : form})



def new_venue_view(request, *args, **kwargs):
    # context = {}
    
    if request.method == "POST":
        form = newVenueForm(request.POST)
        if form.is_valid():
            venue = form.save(commit=False)
            user = request.user
            # user_id = kwargs.get('user_id')
            # owner = Account.objects.get(pk=user_id)
            venue.owner = user
            # venue.owner = Account.objects.get(id = 'user_id')
            venue.save()
            # form.save()
            # return HttpResponseRedirect('/dashboard/<user_id>')
        # else:
            # context['new_venue_form'] = form

    else:
        form = newVenueForm()
        # context['new_venue_form'] = form
    return render(request, "new_venue.html", {'form' : form})





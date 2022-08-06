from django.shortcuts import render
from event.models import Event, Venue


# Create your views here.
def dashboard_view(request, *args, **kwargs):
    # context = {}
    event_list = Event.objects.all()
    return render(request, "dashboard.html", {'event_list' : event_list})


# def dashboard(request):
#     if 'user_id' not in request.session:
#         return redirect('/')
#     else:
#         logged_user = User.objects.filter(id=request.session['user_id'])
#         context = {
#             'events' : Event.objects.all(),
#             'user' : logged_user[0],
#             'all_users' : User.objects.all(),
#         }
#     return render(request, "dashboard.html", context)

def new_event_view(request, *args, **kwargs):
    venue_list = Venue.objects.all()
    return render(request, "new_event.html", {'venue_list' : venue_list})



def new_venue_view(request, *args, **kwargs):
    return render(request, "new_venue.html")



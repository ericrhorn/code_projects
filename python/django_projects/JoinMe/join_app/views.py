from django.shortcuts import render, redirect
from django.contrib import messages
from .models import *
import bcrypt

from django.shortcuts import render, HttpResponse

def index(request):
    return render(request, "home.html")

def register(request):
    if request.method == 'POST': 
        errors = User.objects.registration_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.item():
                messages.error(request, value)
            return redirect("/")
        else: 
            password = request.POST['password']
            pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt(4)).decode()
            user = User.objects.create(
                first_name = request.POST ['first_name'],
                last_name = request.POST ['last_name'],
                user_name = request.POST ['user_name'],
                email = request.POST ['email'],
                password = pw_hash,
            )
            request.session['user_id'] = user.id
            return redirect('dashboard')
    return redirect('/')

def login(request):
    if request.method == 'POST':
        errors = User.objects.login_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.item():
                messages.error(request, value)
            return redirect('/')
        else:
            logged_user = User.objects.filter(email = request.POST['email'])
            request.session['user_id'] = logged_user[0].id
            
            logged_user = User.objects.filter(user_name = request.POST['user_name'])
            request.session['user_id'] = logged_user[0].id

        return redirect('/dashboard')
    return redirect('/')

def dashboard(request):
    if 'user_id' not in request.session:
        return redirect('/')
    else:
        logged_user = User.objects.filter(id=request.sesison['user_id'])
        context = {
            'event' : Event.objects.all(),
            'user' : logged_user[0],
            'all_users' : User.objects.all(),
        }
    return render(request, "dashboard.html", context)





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






# from django.shortcuts import render, redirect
# from django.contrib import messages
# from .models import *
# import bcrypt

# def index(request):
#     return render(request, "reglog.html")


# def dashboard(request):
#     if "user_id" not in request.session:
#         return redirect ("/")
#     else:
#         logged_user = User.objects.filter(id=request.session['user_id'])
#         context = {
#             'trips': Trip.objects.all(),
#             'user': logged_user[0],
#             'all_users': User.objects.all(),
#         }
#         return render(request, "dashboard.html", context)


# def register(request):
#     if request.method == 'POST':
#         errors = User.objects.registration_validator(request.POST)
#     if len(errors) > 0:
#         for key, value in errors.items():
#             messages.error(request, value)
#         return redirect("/")
#     else:
#         password = request.POST['password']
#         pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt(4)).decode()    
#         user = User.objects.create(
#             first_name = request.POST ["first_name"],
#             last_name = request.POST ["last_name"],
#             email = request.POST ["email"],
#             password = pw_hash,
#         )
#         request.session['user_id'] = user.id
#         return redirect("/dashboard")
#     return redirect('/')


# def login(request):
#     if request.method == 'POST':
#         errors = User.objects.login_validator(request.POST)
#         if len(errors) > 0:
#             for key, value in errors.items():
#                 messages.error(request, value)
#             return redirect('/')
#         else:
#             logged_user = User.objects.filter(email = request.POST['email'])
#             request.session['user_id'] = logged_user[0].id
#         return redirect('/dashboard')
#     return redirect("/")

# def new_trip(request):
#     if request.method == 'POST':
#         errors = Trip.objects.trip_validator(request.POST)
#         if len(errors) > 0:
#             for key, value in errors.items():
#                 messages.error(request, value)
#             return redirect("/trip")
#         else:
#             user = User.objects.get(id=request.session['user_id'])
#             trip = Trip.objects.create(
#             destination = request.POST ["destination"],
#             plan = request.POST ["plan"],
#             start_date = request.POST ["start_date"],
#             end_date = request.POST ["end_date"],
#             planned_by = user,
#         )
#         return redirect('/dashboard')
#     return redirect('/')


# def trip(request):
#     context = {
#         "trip": Trip.objects.all(),
#         "user": User.objects.get(id=request.session['user_id']),
#     }
#     return render(request, 'new.html', context)

# def update(request, trip_id):
#     if request.method == 'POST':
#         errors = Trip.objects.trip_validator(request.POST)
#         if len(errors) > 0:
#             for key, value in errors.items():
#                 messages.error(request, value)
#             return redirect(f"/{ trip_id }/edit")
#         else:
#             update = Trip.objects.get(id=trip_id)
#             update.destination = request.POST['destination']
#             update.plan = request.POST['plan']
#             update.start_date = request.POST['start_date']
#             update.end_date = request.POST['end_date']
#             update.save()
#         return redirect('/dashboard')
#     return redirect("/")
    

# def edit(request, trip_id):
#     context = {
#         "trip": Trip.objects.get(id=trip_id),
#         "user": User.objects.get(id=request.session['user_id']),
#     }
#     return render(request, 'edit.html', context)


# def info(request, trip_id):
#     context = {
#         "trip": Trip.objects.get(id=trip_id),
#         "user": User.objects.get(id=request.session['user_id']),
#     }
#     return render(request, 'info.html', context)


# def granted(request, wish_id):
#     pass
#     # user = Users.objects.get(id=request.session['user_id'])
#     # wish = Wish.objects.get(id=wish_id)
#     # wish.granted = True
#     # wish.save()
#     # return redirect('/dashboard')


# def like(request, wish_id):
#     pass
# #     user = Users.objects.get(id=request.session['user_id'])
# #     wish = Books.objects.get(id=book_id)
# #     user.books_liked.add(book)
# #     return redirect('/dashboard')


# def delete(request, trip_id):
#     if request.method == 'POST':
#         delete = Trip.objects.get(id=trip_id)
#         delete.delete()
#         return redirect('/dashboard')
#     return redirect('/')

# def logout(request):
#     request.session.flush()
#     return redirect('/')


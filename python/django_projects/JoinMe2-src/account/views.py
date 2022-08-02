# from dataclasses import is_dataclass
# import email
# from multiprocessing import context
# import profile
# from time import strftime
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import login, authenticate, logout

from django.core.files.storage import default_storage
from django.core.files.storage import FileSystemStorage
import os
import cv2
import json
import base64
# import requests
from django.core import files

from friend.utils import get_friend_request_or_false
from friend.friend_request_status import FriendRequestStatus

from account.forms import AccountAuthenticationForm, RegistrationForm, AccountUpdateForm
from account.models import Account
from django.conf import settings

from friend.models import FriendList, FriendRequest

TEMP_PROFILE_IMAGE_NAME = "temp_profile_image.png"


# Create your views here.

def register_view(request, *args, **kwargs):
	user = request.user
	if user.is_authenticated: 
		return HttpResponse("You are already authenticated as " + str(user.email))

	context = {}
	if request.POST:
		form = RegistrationForm(request.POST)
		if form.is_valid():
			form.save()
			email = form.cleaned_data.get('email').lower()
			raw_password = form.cleaned_data.get('password1')
			account = authenticate(email=email, password=raw_password)
			login(request, account)
			destination = kwargs.get("next")
			if destination:
				return redirect(destination)
			return redirect('dashboard')
		else:
			context['registration_form'] = form

	else:
		form = RegistrationForm()
		context['registration_form'] = form
	return render(request, 'account/register.html', context)


def logout_view(request):
    logout(request)
    return redirect('home')


def login_view(request, *args, **kwargs):
    context = {}
    user = request.user
    if user.is_authenticated:
        return redirect('home')

    if request.POST:
        form = AccountAuthenticationForm(request.POST)
        if form.is_valid():
            email = request.POST['email']
            password = request.POST['password']
            user = authenticate(email=email, password=password)
            if user:
                login(request, user)
                destination = get_redirect_if_exists(request)
                if destination:
                    return redirect(destination)
                return redirect('dashboard')
        else: 
            context['login_form'] = form
    return render(request, 'account/login.html', context)

def get_redirect_if_exists(request):
    redirect = None
    if request.GET:
        if request.GET.get('next'):
            redirect = str(request.GET.get('next'))
    return redirect 

def account_view(request, *args, **kwargs):
    context = {}
    user_id = kwargs.get('user_id')
    try:
        account = Account.objects.get(pk=user_id)
    except Account.DoesNotExist:
        return HttpResponse('This user does not exist')
    if account:
        context['id'] = account.id
        context['username'] = account.username
        context['first_name'] = account.first_name
        context['last_name'] = account.last_name
        context['email'] = account.email
        context['profile_img'] = account.profile_img.url
        context['hide_email'] = account.hide_email

        try:
            friend_list = FriendList.objects.get(user=account)
        except FriendList.DoesNotExist:
            friend_list = FriendList(user=account)
            friend_list.save()
        friends = friend_list.friends.all()
        context['friends'] = friends

        is_self = True
        is_friend = False

        request_sent = FriendRequestStatus.NO_REQUEST_SENT.value
        friend_requests = None

        user = request.user
        if user.is_authenticated and user != account:
            is_self = False
            if friends.filter(pk=user.id):
                is_friend = True
            else:
                is_friend = False
                if get_friend_request_or_false(sender=account, receiver=user) != False:
                    request_sent = FriendRequestStatus.THEM_SENT_TO_YOU.value
                    context['pending_friend_request_id'] = get_friend_request_or_false(sender=account, receiver=user).id

                elif get_friend_request_or_false(sender=user, receiver=account) != False:
                    request_sent = FriendRequestStatus.YOU_SENT_TO_THEM.value
                else:
                    request_sent = FriendRequestStatus.NO_REQUEST_SENT.value

        elif not user.is_authenticated:
            is_self = False
        else: 
            try:
                friend_requests = FriendRequest.objects.filter(receiver=user, is_active=True)
            except:
                pass

        context['is_self'] = is_self
        context['is_friend'] = is_friend
        context['BASE_URL'] = settings.BASE_URL
        context['request_sent'] = request_sent
        context['friend_requests'] = friend_requests
        return render(request, "account/account.html", context)


def all_accounts(request, *args, **kwargs):
    context = {}

    if request.method == 'GET':
        search_query = request.GET.get('q')
        if len(search_query) > 0:
            search_results = Account.objects.filter(email__icontains=search_query).filter(username__icontains=search_query).distinct()
        accounts = [] 
        for account in search_results:
            accounts.append((account, False))
        context['accounts'] = accounts

    return render(request, "account/all_accounts.html", context)


def edit_account(request, *args, **kwargs):
    if not request.user.is_authenticated:
        return redirect ('login')
    user_id = kwargs.get('user_id')
    try:
        account = Account.objects.get(pk=user_id)
    except Account.DoesNotExist:
        raise HttpResponse('user does not exist')
    if account.pk != request.user.pk:
        return HttpResponse('You can only edit your own information')
    context = {}
    if request.POST:
        form = AccountUpdateForm(request.POST, request.FILES, instance=request.user)
        if form.is_valid():
            form.save()
            return redirect("account:view", user_id=account.pk)
        else:
            form = AccountUpdateForm(request.POST, instance=request.user,
                initial = {
                    "id" : account.pk,
                    "first_name" : account.first_name,
                    "last_name" : account.last_name,
                    "email" : account.email,
                    "username" : account.username,
                    "profile_img" : account.profile_img,
                    "hide_email" : account.hide_email,
                }
            )
            context ["form"] = form
    else:
        form = AccountUpdateForm(
            initial = {
                "id" : account.pk,
                "first_name" : account.first_name,
                "last_name" : account.last_name,
                "email" : account.email,
                "username" : account.username,
                "profile_img" : account.profile_img,
                "hide_email" : account.hide_email,
            }
        )
        context ["form"] = form 
    context ["DATA_UPLOAD_MAX_MEMORY_SIZE"] = settings.DATA_UPLOAD_MAX_MEMORY_SIZE
    return render(request, 'account/edit_account.html', context)



def save_temp_profile_image_from_base64String(imageString, user):
	INCORRECT_PADDING_EXCEPTION = "Incorrect padding"
	try:
		if not os.path.exists(settings.TEMP):
			os.mkdir(settings.TEMP)
		if not os.path.exists(settings.TEMP + "/" + str(user.pk)):
			os.mkdir(settings.TEMP + "/" + str(user.pk))
		url = os.path.join(settings.TEMP + "/" + str(user.pk),TEMP_PROFILE_IMAGE_NAME)
		storage = FileSystemStorage(location=url)
		image = base64.b64decode(imageString)
		with storage.open('', 'wb+') as destination:
			destination.write(image)
			destination.close()
		return url
	except Exception as e:
		print("exception: " + str(e))
		
		if str(e) == INCORRECT_PADDING_EXCEPTION:
			imageString += "=" * ((4 - len(imageString) % 4) % 4)
			return save_temp_profile_image_from_base64String(imageString, user)
	return None


def crop_image(request, *args, **kwargs):
	payload = {}
	user = request.user
	if request.POST and user.is_authenticated:
		try:
			imageString = request.POST.get("image")
			url = save_temp_profile_image_from_base64String(imageString, user)
			img = cv2.imread(url)

			cropX = int(float(str(request.POST.get("cropX"))))
			cropY = int(float(str(request.POST.get("cropY"))))
			cropWidth = int(float(str(request.POST.get("cropWidth"))))
			cropHeight = int(float(str(request.POST.get("cropHeight"))))
			if cropX < 0:
				cropX = 0
			if cropY < 0:
				cropY = 0
			crop_img = img[cropY:cropY+cropHeight, cropX:cropX+cropWidth]

			cv2.imwrite(url, crop_img)

			user.profile_img.delete()

			user.profile_img.save("profile_image.png", files.File(open(url, 'rb')))
			user.save()

			payload['result'] = "success"
			payload['cropped_profile_image'] = user.profile_img.url

			os.remove(url)
			
		except Exception as e:
			print("exception: " + str(e))
			payload['result'] = "error"
			payload['exception'] = str(e)
	return HttpResponse(json.dumps(payload), content_type="application/json")

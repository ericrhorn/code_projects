from re import A
from django.shortcuts import redirect, render
from django.http import HttpResponse
import json

from django.shortcuts import redirect, render

from account.models import Account
from friend.models import FriendList, FriendRequest

def friend_requests(request, *args, **kwargs):
    context = {}
    user = request.user
    if user.is_authenticated:
        user_id = kwargs.get('user_id')
        account = Account.objects.get(pk=user_id)
        if account == user:
            friend_requests = FriendRequest.objects.filter(receiver=account, is_active=True)
            context['friend_requests'] = friend_requests
        else:
            return HttpResponse("you cant view another person friend requests")
    else:
        redirect('login')
    return render(request, 'friend/friend_requests.html', context)


def send_friend_request(request, *args, **kwargs):
    user = request.user
    payload = {}
    if request.method == 'POST' and user.is_authenticated:
        user_id = request.POST.get("receiver_user_id")
        if user_id:
            receiver = Account.objects.get(pk=user_id)
            try:
                friend_requests = FriendRequest.objects.filter(sender=user, receiver=receiver)
                try:
                    for request in friend_requests:
                        if request.is_active:
                            raise Exception ("You already sent a friend request")
                    friend_requests = FriendRequest(sender=user, receiver=receiver)
                    friend_requests.save()
                    payload['response'] = 'Friend request sent'
                except Exception as e:
                    payload['response'] = str(e)
            except FriendRequest.DoesNotExist:
                friend_requests = FriendRequest(sender=user, receiver=receiver)
                friend_requests.save()
                payload['response'] = 'Friend request sent'
            
            if payload['response'] == None:
                payload['response'] = "Something went wrong"
        else:
            payload['response'] = "Unable to send friend request"
    else:
        payload['response'] = "You must be authenticated to send a friend request"
    return HttpResponse(json.dumps(payload), content_type="application/json")


def accept_friend_request(request, *args, **kwargs):
    user = request.user
    payload = {}
    if request.method == "GET" and user.is_authenticated:
        friend_request_id = kwargs.get("friend_request_id")
        if friend_request_id:
            friend_request = FriendRequest.objects.get(pk=friend_request_id)
            if friend_request.receiver == user:
                if friend_request:
                    friend_request.accept()
                    payload['response'] = 'Friend request accepted'
                else:
                    payload['response'] = 'something went wrong'
            else:
                payload['response'] = 'this is not your request to accept'
        else:
            payload['response'] = 'unable to accept that friend request'
    else:
        payload['response'] = 'you must be authenticated to accept a friend request'
    return HttpResponse(json.dumps(payload), content_type='application/json')


def cancel_friend_request(request, *args, **kwargs):
    user = request.user
    payload = {}
    if request.method == "POST" and user.is_authenticated:
        user_id = request.POST.get("receiver_user_id")
        # if receicer is not = to none then get the reeciver user_id from args in post request
        if user_id:
            receiver = Account.objects.get(pk=user_id)
            try:
                friend_requests = FriendRequest.objects.filter(sender=user, receiver=receiver, is_active=True)
            except Exception as e:
                payload['response'] = "No friend request to cancel"
            #if more than one request auto cancel anymore than one
            if len(friend_requests) > 1:
                for request in friend_requests:
                    request.cancel()
                payload['response'] = "friend request canceled"
            else:
                friend_requests.first().cancel()
                payload['response'] = "friend request canceled"
        else:
            payload['response'] = "Unable to cancel friend request"
    else:
        payload['response'] = 'you must be authenticated to cancel a friend request'
    return HttpResponse(json.dumps(payload), content_type='application/json')


def decline_friend_request(request, *args, **kwargs):
    user = request.user
    payload ={}
    if request.method == "GET" and user.is_authenticated:
        friend_request_id = kwargs.get("friend_request_id")
        if friend_request_id:
            friend_request = FriendRequest.objects.get(pk=friend_request_id)
            if friend_request.receiver == user:
                if friend_request:
                    friend_request.decline()
                    payload['response'] = "Successfully declined friend request"
                else:
                    payload['response'] = "Something went wrong!"
            else:
                payload['response'] = "Not your friend request to decline"
        else:  
            payload['response'] = "Error, Unable to decline friend request"
    else:
        payload['response'] = 'you must be authenticated to remove a friend'
    return HttpResponse(json.dumps(payload), content_type='application/json')


def remove_friend(request, *args, **kwargs):
    user = request.user
    payload = {}
    if request.method == "POST" and user.is_authenticated:
        user_id = request.POST.get("receiver_user_id")
        if user_id:
            try:
                removee = Account.objects.get(pk=user_id)
                friend_list = FriendList.objects.get(user=user)
                friend_list.unfriend(removee)
                payload['response'] = "Successfully removed friend"
            except Exception as e:
                payload['response'] = "Something went wrong"
        else:  
            payload['response'] = "Error, Unable to remove friend"
    else:
        payload['response'] = 'you must be authenticated to remove a friend'
    return HttpResponse(json.dumps(payload), content_type='application/json')

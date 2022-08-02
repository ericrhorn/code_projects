from django.shortcuts import redirect, render
from django.http import HttpResponse
import json

from django.shortcuts import redirect, render

from account.models import Account
from friend.models import FriendRequest

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
                payload['response'] = 'Friend request not sent'
            
            if payload['response'] == None:
                payload['response'] = "Something went wrong"
        else:
            payload['response'] = "Unable to send friend request"
    else:
        payload['response'] = "You must be authenticated to send a friend request"
    return HttpResponse(json.dumps(payload), content_type="application/json")

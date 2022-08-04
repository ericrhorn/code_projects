from django.urls import path

from friend.views import (
    send_friend_request,
    friend_requests,
    accept_friend_request,
    cancel_friend_request,
    remove_friend,
    decline_friend_request,
    friend_list_view,
)

app_name = 'friend'

urlpatterns = [
    path('friend_list/<user_id>', friend_list_view, name="friend-list"),
    path('friend_request/', send_friend_request, name="friend-request"),
    path('friend_request/<user_id>/', friend_requests, name="friend-requests"),
    path('accept_friend_request/<friend_request_id>', accept_friend_request, name="friend-request-accept"),
    path('cancel_friend_request/', cancel_friend_request, name="friend-request-cancel"),
    path('decline_friend_request/<friend_request_id>', decline_friend_request, name="friend-request-decline"),
    path('remove_friend/', remove_friend, name="remove-friend")
]

from django.urls import path     

from account.views import (
    account_view,
    crop_image,
    edit_account,
)

app_name = 'account'

urlpatterns = [
    path('<user_id>/', account_view, name="view"),
    path('<user_id>/edit_account/', edit_account, name="edit"),
    path('<user_id>/edit_account/crop_image', crop_image, name="crop_image"),
]

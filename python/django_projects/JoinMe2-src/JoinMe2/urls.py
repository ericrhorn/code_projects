"""JoinMe2 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from argparse import Namespace
from unicodedata import name
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import include
from django.urls import path
from django.contrib.auth import views as auth_views

from welcome.views import (
    # dashboard_view,
    home_screen_view
)

from event.views import (
    new_event_view,
    new_venue_view,
)

from account.views import (
    register_view,
    login_view,
    logout_view,
    all_accounts,
    # edit_account,
)

urlpatterns = [
    path('', home_screen_view, name='home'),
    path('admin/', admin.site.urls),
    path('account/', include('account.urls', namespace='account')),
    path('friend/', include('friend.urls', namespace='friend')),
    path('dashboard/', include('event.urls', namespace='dashboard')),
    path('search/', all_accounts, name='search'),
    # path('edit_account/', edit_account, name='edit_account'),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
    path('register/', register_view, name='register'),
    path('new_event/', new_event_view, name='new_event'),
    path('new_venue/', new_venue_view, name='new_venue'),

    path('password_change/done/', auth_views.PasswordChangeDoneView.as_view(template_name='password_reset/password_change_confirm.html'), name='password_change_confirm'),

    path('password_change/', auth_views.PasswordChangeView.as_view(template_name='password_reset/password_change.html'), name='password_change'),
    
    path('password_reset_done/', auth_views.PasswordResetCompleteView.as_view(template_name='password_reset/password_reset_done.html'), name='password_reset_done'),
    
    path('reset/<uidb64>/<token>', auth_views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    
    path('password_reset/', auth_views.PasswordResetView.as_view(), name='password_reset'),
    
    path('reset/done/', auth_views.PasswordResetCompleteView.as_view(template_name='password_reset/password_reset_complete.html'), name='password_reset_complete'),

]

if settings.DEBUG:
    urlpatterns+= static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns+= static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

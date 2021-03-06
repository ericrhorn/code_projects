"""JoinMe URL Configuration

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
# from django.contrib import admin

# from django.urls import path, include           # import include
# from django.contrib import admin              # comment out, or just delete
# urlpatterns = [
#     path('', include('join_app.urls')),	   
#     path('', include('friend_app.urls')),	   
#     path('', include('user_app.urls')),	   
#     path('admin/', admin.sites.urls)         # comment out, or just delete
# ]

# from xml.dom.minidom import Document
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include

from join_app.views import (
    home_screen_view
)

from user_app.views import (
    register_view,
)

urlpatterns = [
    # path('', include('join_app.urls')),	   
    path('', home_screen_view, name='home'),	   
    path('register/', register_view, name='register'),	   
    path('', include('friend_app.urls')),	   
    path('', include('user_app.urls')),
    path('admin/', admin.site.urls),
]

if settings.DEBUG:
    urlpatterns+= static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns+= static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

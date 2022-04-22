from django.urls import path     
from . import views
urlpatterns = [
    path('', views.index),
    path('register', views.register),
    path('login', views.login),
    path('dashboard', views.dashboard),
    path('new_event', views.new_event),
    path('all_events', views.all_events),
    path("<int:event_id>/update", views.update),
    # path('<int:event_id>/edit', views.edit),
    path('<int:event_id>/info', views.info),
    path('<int:event_id>/delete', views.delete),
    # path('<int:event_id>/join', views.join),
    path('logout', views.logout), 
]
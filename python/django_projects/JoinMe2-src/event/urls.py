from django.urls import path     

from event.views import (
    dashboard_view,
)

app_name = 'event'

urlpatterns = [
    path('<user_id>/', dashboard_view, name="dashboard"),
]

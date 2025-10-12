from django.urls import path
from .views import create_link, reveal_message

urlpatterns = [
    path('create/', create_link),
    path('reveal/<str:key>/', reveal_message),
]

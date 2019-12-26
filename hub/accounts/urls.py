from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI
from knox import views as knox_views

urlpatterns = [
    path('api/auth', include('knox.urls')), 
    path('api/auth/register', RegisterAPI.as_view()), # endpoint rejestrowania
    path('api/auth/login', LoginAPI.as_view()),# endpoint logowania
    path('api/auth/user', UserAPI.as_view()), # endpoint widoku użytkownika
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout') # endpoint wylogowania
    ]

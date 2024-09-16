# users/urls.py
from django.urls import path
from .views import UserSignupAPI, UserLoginAPI, UserProfileAPI, ForgotPasswordAPI, UpdateVerificationAPI

urlpatterns = [
    path('signup/', UserSignupAPI.as_view(), name='signup'),
    path('login/', UserLoginAPI.as_view(), name='login'),
    path('profile/', UserProfileAPI.as_view(), name='profile'),
    path('forgot-password/', ForgotPasswordAPI.as_view(), name='forgot_password'),
    path('update-verification/', UpdateVerificationAPI.as_view(), name='update_verification'),
]


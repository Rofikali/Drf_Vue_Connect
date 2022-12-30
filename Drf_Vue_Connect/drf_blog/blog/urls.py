from django.urls import path
from .views import PostListAPIView, PostDetailAPIVIew

app_name = 'blogs'


urlpatterns = [
    path("", PostListAPIView.as_view()),
    path("detail/<slug:slug>/", PostDetailAPIVIew.as_view()),
]

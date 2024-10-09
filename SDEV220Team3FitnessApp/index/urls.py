from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('create-workout/', views.create_workout_plan, name='create_workout_plan'),
]


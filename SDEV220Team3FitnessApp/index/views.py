from django.shortcuts import render, redirect
from .forms import WorkoutPlanForm

def index(request):
    return render(request, 'index/index.html')

def create_workout_plan(request):
    if request.method == 'POST':
        form = WorkoutPlanForm(request.POST)
        if form.is_valid():
            form.save()  # Save the form data to the database
            return redirect('index')  # Redirect to index page or another page
    else:
        form = WorkoutPlanForm()

    return render(request, 'index/create_workout_plan.html', {'form': form})

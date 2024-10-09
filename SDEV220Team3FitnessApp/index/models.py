from django.db import models

class WorkoutPlan(models.Model):
    workout_name = models.CharField(max_length=100)
    exercise = models.CharField(max_length=100)
    sets = models.IntegerField()
    reps = models.IntegerField()
    duration = models.IntegerField()  # Duration in minutes

    def __str__(self):
        return self.workout_name

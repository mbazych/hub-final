from django.db import models
from django.utils.timezone import now
from django.utils.dateformat import format
from django.contrib.auth.models import User

# Create your models here.
class CarReservation(models.Model):
    CAR_CHOICES = [
        ('Skoda Superb', 'Skoda Superb'), 
        ('Skoda Octavia', 'Skoda Octavia')
    ]

    user = models.ForeignKey(User, on_delete = models.CASCADE)
    car = models.CharField(max_length = 32, choices = CAR_CHOICES)
    start_date = models.DateTimeField(default = now)
    end_date = models.DateTimeField(default = now)
    purpose = models.CharField(max_length = 32)
    active = models.BooleanField(default = True)
    class Meta:
        db_table = 'car_reservations'
        ordering = ['end_date']
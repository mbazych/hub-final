from django.db import models
from datetime import datetime
from django.utils.timezone import now
from django.utils.dateformat import format
from django.contrib.auth.models import User

# Create your models here.
class CarReservation(models.Model):
    CAR_CHOICES = [
        ('Skoda Superb', 'Skoda Superb'), 
        ('Skoda Octavia', 'Skoda Octavia')
    ]

    user = models.ForeignKey(User, on_delete = models.CASCADE, default="michal.bazych")
    car = models.CharField(max_length = 32, choices = CAR_CHOICES)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    purpose = models.CharField(max_length = 32)
    active = models.BooleanField(default = False)
        
    # def name(self):
    #     return self.user.get_full_name()

    # def start_date_formatted(self):
    #     return format(self.start_date, 'd-m-Y H:i')

    # def end_date_formatted(self):
    #     return format(self.end_date, 'd-m-Y H:i')

    # def __str__(self):
    #     return '{}, {}, {} - {}, {}'.format(self.car, self.user.get_full_name(), format(self.start_date, 'd-m-Y H:i'), format(self.end_date, 'd-m-Y H:i'), self.purpose)

    class Meta:
        db_table = 'car_reservations'
        ordering = ['end_date']

class CarRentalActive(models.Model):
    reservation = models.ForeignKey(CarReservation, on_delete = models.CASCADE)
    start_date = models.DateTimeField(default = now)
    active = models.BooleanField(default = True)

    class Meta:
        db_table = 'active_rental'
        ordering = ['start_date']



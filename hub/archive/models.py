from django.db import models
from datetime import datetime,timedelta
from django.utils.timezone import now
from django.utils.dateformat import format
from django.contrib.auth.models import User
from django.utils import timezone

class ReservationArchive(models.Model):
    TANK_CHOICES = [
        ('1/4', '1/4'),
        ('2/4', '2/4'),
        ('3/4', '3/4'),
        ('4/4', '4/4')
    ]

    user = models.ForeignKey(User, on_delete = models.CASCADE, default=1)
    car = models.CharField(max_length = 32)
    start_date = models.DateTimeField()
    gas_state = models.CharField(max_length = 3, choices=TANK_CHOICES)
    fuel_state = models.CharField(max_length = 3, choices=TANK_CHOICES)
    end_date = models.DateTimeField(default=datetime.now())
    purpose = models.CharField(max_length = 64)
    comment = models.CharField(max_length = 32)

    def name(self):
        return self.user.get_full_name()

    class Meta:
        db_table = 'reservations_archive'
        ordering = ['end_date']
from rest_framework import serializers
from car_reservation.models import CarReservation

# CarReservation Serializer
class CarReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarReservation
        fields = '__all__'
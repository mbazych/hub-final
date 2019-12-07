from rest_framework import serializers
from car_reservation.models import CarReservation, CarRentalActive

# CarReservation Serializer
class CarReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarReservation
        fields = '__all__'

class CarRentalActiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarRentalActive
        fields = '__all__'
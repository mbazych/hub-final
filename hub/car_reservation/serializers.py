from rest_framework import serializers
from car_reservation.models import CarReservation, CarRentalActive

# CarReservation Serializer
class CarReservationSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    active = serializers.ReadOnlyField()

    class Meta:
        model = CarReservation
        #fields = ('id', 'user', 'car', 'start_date_formatted', 'end_date_formatted', 'purpose', 'active')
        fields = "__all__"
class CarRentalActiveSerializer(serializers.ModelSerializer):
    active = serializers.ReadOnlyField()
    class Meta:
        model = CarRentalActive
        fields = ('id', 'reservation', 'start_date_formatted', 'active')
from car_reservation.models import CarReservation, CarRentalActive
from rest_framework import  viewsets, permissions
from .serializers import CarReservationSerializer, CarRentalActiveSerializer

# CarReservationViewSet

class CarReservationViewSet(viewsets.ModelViewSet):
    queryset = CarReservation.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CarReservationSerializer

class CarRentalActiveViewSet(viewsets.ModelViewSet):
    queryset = CarRentalActive.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CarRentalActiveSerializer
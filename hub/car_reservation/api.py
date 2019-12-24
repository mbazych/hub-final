from car_reservation.models import CarReservation
from rest_framework import  viewsets, permissions
from .serializers import CarReservationSerializer

# CarReservationViewSet

class CarReservationViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = CarReservationSerializer

    def get_queryset(self):
        return self.request.user.car_reservation.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


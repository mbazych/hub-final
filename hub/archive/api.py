from archive.models import ReservationArchive
from rest_framework import  viewsets, permissions
from .serializers import ReservationAchiveSerializer

class ReservationArchiveViewSet(viewsets.ModelViewSet):
    queryset = ReservationArchive.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ReservationAchiveSerializer 

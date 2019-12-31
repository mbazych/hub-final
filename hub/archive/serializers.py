from rest_framework import serializers
from archive.models import ReservationArchive

class ReservationAchiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReservationArchive
        fields = "__all__"
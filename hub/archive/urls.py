from rest_framework import routers
from .api import ReservationArchiveViewSet


router = routers.DefaultRouter()
router.register('api/reservation_archive', ReservationArchiveViewSet , basename="Reservation Archive")
urlpatterns = router.urls 
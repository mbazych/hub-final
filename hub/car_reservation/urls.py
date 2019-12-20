from rest_framework import routers
from .api import CarReservationViewSet


router = routers.DefaultRouter()
router.register('api/car_reservation', CarReservationViewSet)
urlpatterns = router.urls 
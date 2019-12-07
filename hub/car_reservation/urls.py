from rest_framework import routers
from .api import CarReservationViewSet, CarRentalActiveViewSet


router = routers.DefaultRouter()
router.register('api/car_reservation', CarReservationViewSet)
router.register('api/rental_active', CarRentalActiveViewSet)
urlpatterns = router.urls 
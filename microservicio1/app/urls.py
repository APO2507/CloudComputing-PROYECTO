from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from pacientes.views import PropietarioViewSet, MascotaViewSet

router = routers.DefaultRouter()
router.register(r'propietarios', PropietarioViewSet)
router.register(r'mascotas', MascotaViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

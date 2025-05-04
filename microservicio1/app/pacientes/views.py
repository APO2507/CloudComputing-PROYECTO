from rest_framework import viewsets
from .models import Propietario, Mascota
from .serializers import PropietarioSerializer, MascotaSerializer

class PropietarioViewSet(viewsets.ModelViewSet):
    queryset = Propietario.objects.all()
    serializer_class = PropietarioSerializer

class MascotaViewSet(viewsets.ModelViewSet):
    queryset = Mascota.objects.all()
    serializer_class = MascotaSerializer

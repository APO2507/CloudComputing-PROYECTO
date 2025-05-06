from app.services.ms1 import get_mascota_by_id
from app.services.ms2 import get_consulta_by_id
from app.services.ms3 import get_images_by_consulta

def armar_historia_clinica(consulta_id):
    consulta = get_consulta_by_id(consulta_id)
    if not consulta:
        return {"error": "Consulta no encontrada"}

    mascota = get_mascota_by_id(consulta["mascotaId"])
    propietario = get_propietario_by_id(mascota["propietarioId"]) if mascota else None
    imagenes = get_images_by_consulta(consulta_id)

    return {
        "consulta": consulta,
        "mascota": mascota,
        "propietario": propietario,
        "imagenes": imagenes,
    }
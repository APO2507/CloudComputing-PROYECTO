import os
import requests
from dotenv import load_dotenv

load_dotenv()
MS1_URL = os.getenv("MS1_URL")

def get_mascota_by_id(mascota_id):
    try:
        response = requests.get(f"{MS1_URL}/mascotas/{mascota_id}")
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        print(f"Error al obtener mascota {mascota_id} desde MS1:", e)
        return None
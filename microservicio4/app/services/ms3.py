# services/ms3.py
import os
import requests
from dotenv import load_dotenv

load_dotenv()
MS3_URL = os.getenv("MS3_URL")

def get_images_by_consulta(consulta_id):
    try:
        response = requests.get(f"{MS3_URL}/images/consulta/{consulta_id}")
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        print(f"Error al obtener imágenes de la consulta {consulta_id} desde MS3:", e)
        return []
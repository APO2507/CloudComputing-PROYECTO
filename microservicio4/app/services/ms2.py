# services/ms2.py
import os
import requests
from dotenv import load_dotenv

load_dotenv()
MS2_URL = os.getenv("MS2_URL")

def get_consulta_by_id(consulta_id):
    try:
        response = requests.get(f"{MS2_URL}/consultas/{consulta_id}")
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        print(f"Error al obtener consulta {consulta_id} desde MS2:", e)
        return None

FROM python:3.10-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Instala netcat-openbsd (necesario para wait-for-it.sh)
RUN apt-get update && apt-get install -y netcat-openbsd && apt-get clean

WORKDIR /code

COPY requirements.txt /code/
RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . /code/

COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

WORKDIR /code/app

CMD ["sh", "/wait-for-it.sh", "postgres", "5432", "--", "python", "manage.py", "runserver", "0.0.0.0:8000"]


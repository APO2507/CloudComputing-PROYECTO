FROM node:18

# Instala bash (necesario para ejecutar wait-for-it.sh)
RUN apt-get update && apt-get install -y bash

WORKDIR /app

# Copia e instala dependencias
COPY package*.json ./
RUN npm install

# Copia el resto de archivos y construye la app
COPY . .
RUN npm run build

# Copia el script de espera y dale permisos
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

# Usa bash explícitamente para ejecutar el script
CMD ["bash", "/wait-for-it.sh", "mysql:3306", "--", "npm", "run", "start"]
FROM node:16-alpine AS builder

# Define el directorio de trabajo
WORKDIR /app

# Copia los archivos package.json y package-lock.json e instala dependencias
COPY package*.json ./
RUN npm install

# Copia el resto del proyecto y compila la aplicación
COPY . .
RUN npm run build
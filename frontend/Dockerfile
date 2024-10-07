# Usa una imagen base de Node.js para construir el proyecto
FROM node:16-alpine AS builder

# Define el directorio de trabajo
WORKDIR /app

# Copia los archivos package.json y package-lock.json e instala dependencias
COPY package*.json ./
RUN npm install

# Copia el resto del proyecto y compila la aplicación
COPY . .
RUN npm run build

# Usa la imagen de Nginx para servir el contenido estático
FROM nginx:alpine

# Copia el contenido de la carpeta build a la carpeta de Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Expone el puerto 80 para el tráfico HTTP
EXPOSE 80


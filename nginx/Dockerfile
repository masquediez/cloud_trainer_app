# Usa una imagen base de Nginx
FROM nginx:alpine

# Copia el contenido estático generado en el frontend-builder
COPY ../frontend/build /usr/share/nginx/html

# Expone el puerto 80 para el tráfico HTTP
EXPOSE 80

# Inicia el servidor de Nginx
CMD ["nginx", "-g", "daemon off;"]

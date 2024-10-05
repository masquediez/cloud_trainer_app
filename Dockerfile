# Usar la imagen base de Nginx
FROM nginx:1.27.2-alpine-slim

# Actualizar los repositorios con mirrors alternativos
RUN echo "https://mirror.clarkson.edu/alpine/v3.18/main" > /etc/apk/repositories && \
    echo "https://mirror.clarkson.edu/alpine/v3.18/community" >> /etc/apk/repositories

# Instalar Certbot y dependencias necesarias
RUN apk update && apk add --no-cache certbot certbot-nginx bash

# Copiar el archivo de configuración de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Crear un directorio para los certificados
RUN mkdir -p /etc/letsencrypt/live/cloud-ki-assistent.duckdns.org/

# Exponer los puertos 80 y 443
EXPOSE 80
EXPOSE 443

# Script para iniciar Nginx y generar los certificados
COPY init.sh /usr/local/bin/init.sh
RUN chmod +x /usr/local/bin/init.sh

# Usar el script como comando principal para iniciar el contenedor
CMD ["/usr/local/bin/init.sh"]

#!/bin/bash

# Iniciar Nginx en segundo plano
nginx &

# Esperar un momento para que Nginx esté listo
sleep 5

# Generar los certificados (esto requiere que el contenedor esté expuesto a internet)
certbot certonly --standalone -d cloud-ki-assistent.duckdns.org --non-interactive --agree-tos --email gabriel.torres@docc.techstarter.de

# Mover los certificados a la ubicación correcta (esto es redundante, pero lo dejamos para claridad)
cp /etc/letsencrypt/live/cloud-ki-assistent.duckdns.org/fullchain.pem /etc/letsencrypt/live/cloud-ki-assistent.duckdns.org/fullchain.pem
cp /etc/letsencrypt/live/cloud-ki-assistent.duckdns.org/privkey.pem /etc/letsencrypt/live/cloud-ki-assistent.duckdns.org/privkey.pem

# Reiniciar Nginx para aplicar los certificados SSL
nginx -s reload

# Mantener el contenedor en ejecución
tail -f /dev/null

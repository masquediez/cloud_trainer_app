# Usa la imagen base de Node.js
FROM node:16-alpine

# Define el directorio de trabajo
WORKDIR /app

# Copia los archivos package.json y package-lock.json e instala dependencias
COPY package*.json ./
RUN npm install --production

# Copia el resto del proyecto
COPY . .
RUN npm run build
# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]

#Imagen ligera de Node
FROM node:20-alpine

#Carpeta de trabajo dentro del contendor
WORKDIR /app

#Copiamos solo los package*.json primero (mejor cache)
COPY package*.json ./

#Instalamos las dependencias
RUN npm install

#Copiamos el resto del código
COPY . .

#Puerto que expone el servidor
EXPOSE 4000

#Comando por defecto
CMD ["npm", "start"]
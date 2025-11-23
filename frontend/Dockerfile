#Etapa 1: build de la app React
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . . 

# Construimos la app (generará /dist en Vite)
RUN npm run build

#Etapa 2: Servimos estático con Nginx
FROM nginx:alpine

#Copiamos los archivos estáticos construidos
COPY --from=build /app/dist /usr/share/nginx/html

#Exponemos el puerto de Nginx
EXPOSE 80

#Comando por defecto de Nginx
CMD ["nginx", "-g", "daemon off;"]
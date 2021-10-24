################## STAGE 1: Run ##################
##################################################
# imagen de node a usar
FROM node:lts-alpine3.12 as node

# Crea un directorio de trabajo llamado "app"}
RUN mkdir /app

# Copiamos estos archivos en la carpeta app
COPY package.json package-lock.json /app/

WORKDIR /app

# Instalamos todas las dependencias
RUN npm ci

# Copiamos todo el proyecto a la carpeta /app
COPY ./ /app/

# Compilamos el proyecto en modo de ssr
RUN npm run build

# Angular app construida, la vamos a hostear un server production, este es Nginx
# FROM nginx:1.19.0-alpine
FROM nginx:stable-alpine
COPY --from=node /app/dist/bancoBogotaPropuesta/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# FROM node:lts-alpine3.10 AS ssr-server
# COPY --from=node /app/dist /app/dist/
# COPY /package.json /app/package.json
# WORKDIR /app
# Exponemos el puerto 400
# EXPOSE 4000
# Ejecutamos el comando
# CMD npm run serve:ssr

################## STAGE 2: Run ##################
##################################################
# Imagen final de docker que se utilizará en el despliegue
# Comprobar que se utiliza la dirección correcta en que se construye el proyecto
# COPY --from=node /app/dist/ferresseq /usr/share/nginx/html
# Copiar la configuración de nginx dentro del contenedor
# COPY nginx.conf /etc/nginx/conf.d/default.conf
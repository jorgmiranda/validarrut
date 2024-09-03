# Usar la imagen base de Nginx
FROM nginx:alpine

# Copiar archivos de la aplicación a la carpeta de Nginx
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Copiar la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx
#CMD ["nginx", "-g", "daemon off;"]

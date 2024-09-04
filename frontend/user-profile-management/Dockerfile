# Construire l'application Angular
FROM node:14 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Utiliser une image Nginx pour servir l'application
FROM nginx:alpine
COPY --from=build /app/dist/user-profile-management /usr/share/nginx/html
EXPOSE 80

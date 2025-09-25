# Use the latest LTS version of Node.js
FROM mirror.gcr.io/library/node:22-alpine AS build
 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 1 - Serve Frontend Assets
FROM mirror.gcr.io/library/nginx:stable-alpine

WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
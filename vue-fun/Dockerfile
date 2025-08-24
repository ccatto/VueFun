# Build stage
FROM node:20-alpine as build-stage
WORKDIR /app

# Enable Corepack and install correct Yarn version
RUN corepack enable && corepack prepare yarn@4.7.0 --activate

COPY package.json yarn.lock ./
COPY . .

# Install without frozen lockfile to allow resolution
RUN yarn install

RUN yarn build

# Production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Create nginx config for SPA routing
RUN echo 'server { \
    listen 8080; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
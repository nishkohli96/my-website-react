# syntax=docker/dockerfile:1

# Dockerfile for production env

### Phase 1 - Build our app
FROM node:14.15.4-alpine3.10

# For specific environment
# ENV NODE_ENV=production

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .
RUN npm run build 

### Phase 2 - Get the Build and host on nginx

# server to serve static files, we will run build files on this server.
FROM nginx

# nginx runs on port 80. Port mapping done
EXPOSE 80  

COPY --from=0 /app/build /usr/share/nginx/html

# Stage 1: Build the Angular application (browser bundle for nginx)
FROM node:latest AS build

WORKDIR /usr/src/app

# Copy package manifests and npm registry config
COPY package*.json .npmrc ./

# Install dependencies
RUN npm i

# Copy the entire application source code
COPY . .

# Use `npm run build` (prerender disabled). `build:ssg` fails on SSR
# (NG0201 / window|document is not defined) for many demo routes.
RUN npm run build

# Stage 2: Create the final production image with Nginx
FROM nginx:alpine

# Copy the built static files from the previous stage
COPY --from=build /usr/src/app/dist/acorex-demo/browser /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
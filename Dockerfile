# Base image
FROM node:16.15.1 as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --force --no-package-lock

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build

# Production image
FROM nginx:1.21.0-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built Angular app from the build stage to the NGINX HTML directory
COPY --from=build /app/dist/acorex-demo /usr/share/nginx/html

# Expose the NGINX port
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
# Stage 1: Build the Angular application with SSG
FROM node:latest AS build

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm i

# Copy the entire application source code
COPY . .

# Build the Angular application with SSG (Static Site Generation)
RUN npm run build:ssg

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
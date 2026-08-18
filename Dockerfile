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

# Remove the default nginx pages (welcome index.html, 50x.html) so they can
# never be served as a stale SPA fallback.
RUN rm -rf /usr/share/nginx/html/*

# Copy the built static files from the previous stage
COPY --from=build /usr/src/app/dist/acorex-demo/browser /usr/share/nginx/html

# The Angular builder emits the CSR app shell as index.csr.html when
# SSR/prerender is enabled and ignores a custom index output name
# (angular-cli issue #29088). Expose it as index.html so nginx's
# try_files SPA fallback works for client-rendered routes.
RUN [ -f /usr/share/nginx/html/index.html ] || cp /usr/share/nginx/html/index.csr.html /usr/share/nginx/html/index.html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
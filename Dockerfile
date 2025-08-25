#Stage 1: Build the Angular application
FROM node:latest AS build

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm i

# Copy the entire application source code
COPY . .

# Build the Angular SSR application
RUN npm run build

# Stage 2: Create the final production image
FROM node:latest

WORKDIR /usr/src/app

# Copy the built Angular SSR files from the previous stage
COPY --from=build /usr/src/app/dist ./dist

# Install only production dependencies
COPY package*.json ./
RUN npm i 


# Start the SSR server
CMD ["npm", "run", "serve:ssr:acorex-demo"]
# Use an official Node.js runtime as a parent image
FROM node:18 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install --force

# Copy the rest of your application's source code to the container
COPY . .

# Build your Next.js app
RUN npm run build

# Use an Nginx image to serve the build files
FROM nginx:alpine

# Copy the build files from the previous stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy your custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port on which Nginx will serve the application
EXPOSE 4000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

# Use the official Node.js image as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install --legacy-peer-deps

# Copy Copy the rest of the application code to the container
COPY . .

# Build the React application for production
# RUN npm run build

# Expose the port that the application will run on
EXPOSE 4000

# Start the application
CMD ["npm", "start"]

# Use an official Node.js runtime as the base image
FROM node:16.16

# Set the working directory inside the container
WORKDIR /src/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Expose the port your Express.js application listens on
EXPOSE 3001

# Define the command to run your application
CMD ["node", "index.js"]

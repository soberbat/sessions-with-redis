# Use an official Node.js runtime as the base image
FROM node:16.16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json  ./


# Install app dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Expose the port your Next.js app is running on
EXPOSE 3000

# Define the command to start your Next.js app
CMD ["npm", "run", "dev"]

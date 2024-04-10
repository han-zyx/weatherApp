
FROM node:alpine


# Set the working directory inside the container
WORKDIR /app

# Copy the contents of the src directory to the working directory in the container
COPY src/ /app

# Install dependencies (if you have a package.json file)
# COPY src/package.json /app/package.json
# RUN npm install

# Command to run your application
CMD ["node", "app.js"]

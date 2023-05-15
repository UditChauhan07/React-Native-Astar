# Base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock /app/
RUN yarn install --frozen-lockfile

# Copy project files
COPY . /app/

# Build the React Native project
RUN npx react-native build --platform android

# Expose necessary ports
EXPOSE 8081
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

# Start the React Native packager
CMD ["npx", "react-native", "start"]

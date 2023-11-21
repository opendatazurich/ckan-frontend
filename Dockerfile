##################
# BUILD FRONTEND #
##################
FROM node:20.9.0-alpine AS build-frontend

ENV VITE_CKAN_URL=${VITE_CKAN_URL}
ENV VITE_ANALYTICS_SRC=${VITE_ANALYTICS_SRC}
ENV VITE_ROBOTS_DIRECTIVE=${VITE_ROBOTS_DIRECTIVE}
ENV VITE_SCHEMA_ORG_PROFILE=${VITE_SCHEMA_ORG_PROFILE}

# bundle frontend
WORKDIR /app

# this uses docker cache, if no dependencies change
COPY package*.json .
# ci means "clean install" like "rm -rf node_modules"
RUN npm ci
COPY . .
RUN npm run build

##################
# FINAL APP      #
##################
FROM node:20.9.0-alpine

WORKDIR /app

# Copy only what's necessary to run the app
COPY --from=build-frontend /app/build build
COPY package*.json .
# only install prod dependencies
RUN npm i --only=prod
# needed to restart the app on crashed
RUN npm install pm2 -g

USER node:node

CMD ["pm2-runtime", "build/index.js"]

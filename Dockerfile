##################
# BUILD FRONTEND #
##################
FROM node:20.9.0-alpine AS build-frontend

ENV PUBLIC_CKAN_URL=${PUBLIC_CKAN_URL}
ENV PUBLIC_ANALYTICS_SRC=${PUBLIC_ANALYTICS_SRC}
ENV PUBLIC_ROBOTS_DIRECTIVE=${PUBLIC_ROBOTS_DIRECTIVE}
ENV PUBLIC_SCHEMA_ORG_PROFILE=${PUBLIC_SCHEMA_ORG_PROFILE}
ENV PUBLIC_SURVEY_LINK=${PUBLIC_SURVEY_LINK}

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

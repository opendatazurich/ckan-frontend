##################
# BUILD FRONTEND #
##################
FROM node:18.17.1-alpine AS build-frontend

ENV VITE_CKAN_URL=${VITE_CKAN_URL}
ENV VITE_ANALYTICS_SRC=${VITE_ANALYTICS_SRC}
ENV VITE_ROBOTS_DIRECTIVE=${VITE_ROBOTS_DIRECTIVE}
ENV VITE_SCHEMA_ORG_PROFILE=${VITE_SCHEMA_ORG_PROFILE}

# bundle frontend
WORKDIR /app
COPY . .
RUN npm install && npm run build

##################
# FINAL APP      #
##################
FROM node:18.17.1-alpine

WORKDIR /app

# Copy only what's necessary to run the app
COPY --from=build-frontend /app/build build
COPY --from=build-frontend /app/node_modules node_modules
COPY package.json package.json

USER node:node

CMD ["node", "build/index.js"]


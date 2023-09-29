##################
# BUILD FRONTEND #
##################
FROM node:20-alpine AS build-frontend

# bundle frontend
WORKDIR /app
COPY . .
RUN npm install && npm run build

##################
# FINAL APP      #
##################
FROM node:20-alpine

WORKDIR /app

# Copy only what's necessary to run the app
COPY --from=build-frontend /app/build build
COPY --from=build-frontend /app/node_modules node_modules
COPY package.json package.json

USER node:node

CMD ["node", "build/index.js"]


FROM node:10-slim

WORKDIR /primer-changelog
COPY . .
RUN npm install

ENTRYPOINT ["/primer-changelog/entrypoint.js"]

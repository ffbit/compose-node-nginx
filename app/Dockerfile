# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=prod
COPY . .
ENV PORT=3000
EXPOSE $PORT

CMD node app.js

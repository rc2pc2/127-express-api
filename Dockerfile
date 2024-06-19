FROM node:22

WORKDIR /usr/src/127-express-api

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 22111

CMD [ "node", "index.js" ]
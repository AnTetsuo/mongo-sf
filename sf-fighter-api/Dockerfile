FROM node:16.14-alpine

WORKDIR /sf-fighter-api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm", "run" ]

CMD [ "dev" ]
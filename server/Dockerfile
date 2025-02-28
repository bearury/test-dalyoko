FROM node:21-alpine3.19

WORKDIR /usr/src/app

COPY ./server/package*.json .

RUN npm install

COPY ./server .

RUN npm run build

EXPOSE 3030

CMD ["npm", "run", "start:prod"]
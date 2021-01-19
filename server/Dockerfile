FROM node:8-alpine

RUN mkdir /server

WORKDIR /server
ADD package.json package.json
RUN npm install

COPY . .

EXPOSE 3333

CMD npm start
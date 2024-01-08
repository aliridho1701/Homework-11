FROM alpine:3.18

WORKDIR /usr/src/app

COPY  package*.json ./

RUN npm isntall

COPY . .

EXPOSE 8090

CMD [ "node", "app.js" ]
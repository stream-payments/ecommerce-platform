FROM node:17.1.0

WORKDIR /app/streampay

COPY package.json .
COPY develop.sh .
COPY yarn.* .

RUN apt-get update

RUN apt-get install -y python

RUN npm install -g npm@8.1.2

RUN npm install -g @stream-pay/ecommerce-cli@latest

RUN npm install

COPY . .

ENTRYPOINT ["./develop.sh"]

FROM node:6.5.0-slim
MAINTAINER Theo Pack <tf.pack@gmail.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ONBUILD COPY package.json /usr/src/app/
ONBUILD RUN npm install
ONBUILD COPY index.js /usr/src/app/

ENTRYPOINT ["node index.js"]

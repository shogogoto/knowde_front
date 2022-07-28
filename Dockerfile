 FROM node:16.15.1

ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

WORKDIR /usr/src/app

RUN yarn install

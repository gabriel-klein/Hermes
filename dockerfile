FROM node:lts
LABEL maintainer="joao.cruz@soulasalle.com.br"

RUN npm i -g @angular/cli firebase-tools

WORKDIR /hermes

EXPOSE 4200
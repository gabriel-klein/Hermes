FROM node:lts
LABEL maintainer="joao.cruz@soulasalle.com.br"

RUN npm i -g @angular/cli@10.1.0 firebase-tools

WORKDIR /hermes

EXPOSE 4200
FROM nginx:1.29.2 AS base

RUN apt update & \
    apt upgrade & \
    apt install curl

COPY ./index.html /usr/share/nginx/html

EXPOSE 80


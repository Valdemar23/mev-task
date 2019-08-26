FROM tbaltrushaitis/ubuntu-nodejs
# https://hackernoon.com/a-better-way-to-develop-node-js-with-docker-cd29d3a0093 - A Better Way to Develop Node.js with Docker
# https://hackernoon.com/a-tale-of-two-docker-multi-stage-build-layers-85348a409c84 - A Tale of Two (Docker Multi-Stage Build) Layers
USER root

RUN apt -y update 

RUN apt -y install curl

RUN mkdir -p /home/node-npm/mev-spa/
# First parameter copy all files in current directory
COPY . /home/node-npm/mev-spa/

WORKDIR /home/node-npm/mev-spa

RUN npm install --save                             

VOLUME /home/operator/web/volume

ENV TARGET_URL http://172.17.0.1:4000/ping

EXPOSE 8080

ENTRYPOINT npm start

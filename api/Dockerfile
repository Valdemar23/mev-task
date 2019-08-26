FROM tbaltrushaitis/ubuntu-nodejs
# https://www.howtoforge.com/tutorial/how-to-create-docker-images-with-dockerfile/
# https://hackernoon.com/a-better-way-to-develop-node-js-with-docker-cd29d3a0093 - A Better Way to Develop Node.js with Docker
# https://hackernoon.com/a-tale-of-two-docker-multi-stage-build-layers-85348a409c84 - A Tale of Two (Docker Multi-Stage Build) Layers
USER root

RUN apt -y update  

RUN apt -y install curl

RUN mkdir -p /home/node-npm/mev-api/
# First parameter copy only files (without directory consists) in current directory
COPY ./* /home/node-npm/mev-api/

WORKDIR /home/node-npm/mev-api

RUN npm install --save 

EXPOSE 4000

ENTRYPOINT npm start

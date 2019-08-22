FROM tbaltrushaitis/ubuntu-nodejs
# https://www.howtoforge.com/tutorial/how-to-create-docker-images-with-dockerfile/
# https://hackernoon.com/a-better-way-to-develop-node-js-with-docker-cd29d3a0093 - A Better Way to Develop Node.js with Docker
# https://hackernoon.com/a-tale-of-two-docker-multi-stage-build-layers-85348a409c84 - A Tale of Two (Docker Multi-Stage Build) Layers
USER root

RUN apt -y update  

RUN apt -y install curl

#RUN curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

#RUN apt-get install -y nodejs && mkdir -p /home/node-npm/mev-api
RUN mkdir -p /home/node-npm/mev-api/

COPY ./* /home/node-npm/mev-api/

WORKDIR /home/node-npm/mev-api

RUN npm install --save 

EXPOSE 4000

ENTRYPOINT npm start

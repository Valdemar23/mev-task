FROM ubuntu:16.04

USER root

RUN apt-get -y update

#RUN apt-get install -y --fix-missing

RUN apt-get install -y software-properties-common --fix-missing 

RUN add-apt-repository -y ppa:nginx/stable

RUN apt-get update -y

RUN apt-get install -y nginx
# deamon mode off
RUN echo "\ndaemon off;" >> /etc/nginx/nginx.conf

RUN chown -R www-data:www-data /var/lib/nginx
# volume
VOLUME ["/etc/nginx/sites-enabled", "/etc/nginx/certs", "/var/log/nginx"]

EXPOSE 8081 

ADD nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /etc/nginx

CMD ["nginx"]


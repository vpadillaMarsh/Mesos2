FROM nginx:1.20-alpine
# FROM base-images.mgti-dal-so-art.mrshmc.com/mmc/ubuntu/nginx-focal:1.24
RUN rm -rf /etc/nginx/conf.d/default.conf
#COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY Mesos/ /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
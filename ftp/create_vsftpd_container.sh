#!/bin/bash
rm -rf $(pwd)/logs/*
rm -rf $(pwd)/data/*

# docker load -i $(pwd)/fauria_vsftpd_latest.tar

docker run -itd \
  --name vsftpd \
  --restart always \
  --user=root \
  --privileged=true \
  --network fcs_net_work \
  --ip 172.23.0.6 \
  --hostname vsftpd \
  --publish 10020:20 \
  --publish 10021:21 \
  --publish 21100-21110:21100-21110 \
  --volume $(pwd)/logs:/var/log \
  --volume $(pwd)/../media_nginx/html/vsftpd:/home/vsftpd \
  --env TZ=Asia/Shanghai \
  --env PASV_MIN_PORT=21100 \
  --env PASV_MAX_PORT=21110 \
  --env LOCAL_UMASK=022 \
  --env ANON_UMASK=022 \
  --env FTP_USER="root" \
  --env FTP_PASS="vsftpd_21" \
  --env PASV_ADDRESS=10.127.20.157 \
  --workdir /home \
  ftp:latest

sleep 2
docker ps -a -f name=vsftpd

sleep 1

docker logs -f --tail 100 vsftpd

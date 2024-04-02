#!/bin/bash

container_name="redis"
# 检查容器是否存在
if docker ps -a --format "{{.Names}}" | grep -q "$container_name"; then
    echo "正在停止容器 $container_name ..."
    docker stop $container_name
    echo "正在删除容器 $container_name ..."
    docker rm -vf $container_name
    echo "容器 $container_name 已删除"
else
    echo "容器不存在,无需操作"
fi

# 清除数据
data_dir="./data"
if [ -n "$(ls -A $data_dir)" ]; then
    echo "删除原数据"
    rm -rf $data_dir/*
else
    echo "原数据为空，无需清理"
fi

# 清除日志
log_file="$(pwd)/logs"
if [ ! -f "$log_file/redis.log" ]; then
    echo "创建日志挂载文件"
    touch $log_file/redis.log
    chmod 777 $log_file/redis.log
elif [ $(ls -A "$logs_dir" | wc -l) -gt 0 ]; then
    echo "清除挂载日志数据"
    echo '' >log_file/redis.log
fi

# 加载镜像
image_tag="redis:latest"
# 检查Docker中是否已加载镜像
if docker images --format "{{.Repository}}:{{.Tag}}" | grep -q "$image_tag"; then
    echo "$image_tag 镜像已加载"
else
    echo "$image_tag 镜像正在加载..."
    docker load -i $(pwd)/redis.tar
    if [ $? -eq 0 ]; then
        echo "$image_tag 加载成功."
    else
        echo "$image_tag 加载失败，请检查路径和权限."
        exit 1
    fi
fi

# 构建容器
redis_password="redis_6379"
local_ip="172.18.0.3"
docker run -itd \
    --name $container_name \
    --restart always \
    --user root \
    --privileged=true \
    --ip $local_ip \
    --hostname $container_name \
    --network fcsNet \
    --publish 6379:6379 \
    --volume $(pwd)/config/redis.conf:/usr/local/etc/redis/redis.conf:ro \
    --volume $(pwd)/data:/data \
    --volume $(pwd)/logs/redis.log:/var/log/redis/redis.log \
    --volume /etc/localtime:/etc/localtime:ro \
    --env TZ=Asia/Shanghai \
    $image_tag redis-server /usr/local/etc/redis/redis.conf --requirepass $redis_password

sleep 5

docker ps -a -f name=$container_name

sleep 3
docker logs --tail 100 $container_name

echo "容器IP:$local_ip 容器Host:$container_name 访问端口:6379 连接密码:$redis_password"
echo "docker exec -it -u root $container_name /bin/bash -c 'redis-cli -p 6379'"
echo "> auth $redis_password"

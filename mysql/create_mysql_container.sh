#!/bin/bash

# 创建网络组
is_create_network=true # 是否创建网络组
network_name="fcsNet"  # 网络组名称
if "$is_create_network"; then
    docker network create -d bridge \
        --subnet 172.18.0.0/24 \
        --gateway 172.18.0.1 \
        $network_name
    docker network inspect "$network_name"
else
    echo "网络组已存在，无需创建网络组"
fi

# 检查容器是否存在
container_name="mysql" # 容器名称
if docker ps -a --format "{{.Names}}" | grep -q "$container_name"; then
    echo "正在停止容器 $container_name ..."
    docker stop $container_name
    echo "正在删除容器 $container_name ..."
    docker rm -vf $container_name
    echo "容器 $container_name 已删除"
else
    echo "容器不存在,无需删除原容器"
fi

# 清除原数据
isClearData=false # 是否清除原数据
data_dir="$(pwd)/data"
if [ ! -e "$data_dir" ]; then
    echo "创建数据挂载目录"
    mkdir $data_dir
elif [ $(ls -A "$data_dir" | wc -l) -gt 0 ] && "$isClearData"; then
    echo "清除原挂载数据"
    rm -rf $data_dir/*
fi

# 清除历史日志
logs_dir="./logs"
if [ ! -e "$logs_dir" ]; then
    echo "创建日志挂载目录"
    mkdir $logs_dir
elif [ $(ls -A "$logs_dir" | wc -l) -gt 0 ]; then
    echo "清除挂载日志数据"
    rm -rf $logs_dir/*
fi

# 加载镜像
image_tag="mysql:8"
# 检查Docker中是否已加载镜像
if docker images --format "{{.Repository}}:{{.Tag}}" | grep -q "$image_tag"; then
    echo "$image_tag 镜像已加载"
else
    echo "$image_tag 镜像正在加载..."
    docker load -i $(pwd)/mysql_8.0.27.tar
    if [ $? -eq 0 ]; then
        echo "$image_tag 加载成功."
    else
        echo "$image_tag 加载失败，请检查路径和权限."
        exit 1
    fi
fi

# 构建容器
mysql_password="mysql_3306"
local_ip="172.18.0.2"
docker run -itd \
    --name $container_name \
    --user=root \
    --privileged=true \
    --restart always \
    --ip $local_ip \
    --network $network_name \
    --hostname $container_name \
    --publish 3306:3306 \
    --volume $(pwd)/conf/my.cnf:/etc/mysql/conf.d/my.cnf:ro \
    --volume $(pwd)/data:/var/lib/mysql \
    --volume $(pwd)/logs:/var/log/mysql \
    --volume $(pwd)/sql/:/opt/sql:ro \
    --volume /etc/localtime:/etc/localtime \
    --env TZ=Asia/Shanghai \
    --env MYSQL_ROOT_PASSWORD="$mysql_password" \
    $image_tag

#  --volume $(pwd)/init:/docker-entrypoint-initdb.d \

sleep 5
docker ps -a -f name=$container_name

sleep 3
docker logs --tail 100 $container_name

sleep 1
docker network inspect $network_name

sleep 2
echo "容器IP:$local_ip 容器Host:$container_name 访问端口:3306 连接密码:$mysql_password"
echo "docker exec -it -u root $container_name /bin/bash -c 'mysql -h127.0.0.1 -uroot -P3306 -p$mysql_password --default-character-set=utf8mb4'"

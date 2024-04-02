#!/bin/bash
# 清除原容器信息
container_name="emqx"

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

# 清除原数据
data_dir="$(pwd)/data"
if [ ! -e "$data_dir" ]; then
    mkdir $data_dir
else
    if [ $(ls -A "$data_dir" | wc -l) -gt 0 ]; then
        rm -rf $data_dir/*
    fi
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
image_tag="emqx/emqx:latest"
# 检查Docker中是否已加载镜像
if docker images --format "{{.Repository}}:{{.Tag}}" | grep -q "$image_tag"; then
    echo "$image_tag 镜像已加载"
else
    echo "$image_tag 镜像正在加载..."
    docker load -i $(pwd)/emqx-enterprise_5.2.0_amd.tar
    if [ $? -eq 0 ]; then
        echo "$image_tag 加载成功."
    else
        echo "$image_tag 加载失败，请检查路径和权限."
        exit 1
    fi
fi

# 构建容器
emqx_password="emqx_1883"
local_ip="172.18.0.4"
docker run -itd \
    --name $container_name \
    --user root \
    --privileged=true \
    --restart always \
    --ip $local_ip \
    --hostname $container_name \
    --net fcsNet \
    --publish 1883:1883 \
    --publish 8083:8083 \
    --publish 8084:8084 \
    --publish 8883:8883 \
    --publish 18083:18083 \
    --volume $(pwd)/logs:/opt/emqx/log \
    --volume $(pwd)/data:/opt/emqx/data \
    --env TZ=Asia/Shanghai \
    --env EMQX_DASHBOARD_DEFAULT_USER_LOGIN="root" \
    --env EMQX_DASHBOARD_DEFAULT_USER_PASSWORD="$emqx_password" \
    $image_tag

sleep 3

docker ps -a -f name=$container_name

sleep 2

echo "容器IP:$local_ip 容器Host:$container_name 上报端口:1883 连接密码:$emqx_password"
echo "dashbord: http://127.0.0.1:18083 / admin / public "

# 初始化后设置密码默认设置: emqx_18083
# 当前版本5.4.0,免费终端连接数：25

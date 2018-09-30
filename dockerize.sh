#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
IMAGE_NAME="enochtsang/birthday_sushi_blitz"
DOCKER_HOME="/birthday_sushi_blitz/"
CONTAINER_NAME="birthday_sushi_blitz"

ACTION="$1"

if [ "$ACTION" == "init" ]; then
    docker build -t $IMAGE_NAME .
    docker run --rm \
        --volume "$DIR:$DOCKER_HOME" \
        $IMAGE_NAME yarn install --frozen-lockfile
elif [ "$ACTION" == "install" ]; then
    docker run --rm \
        --volume "$DIR:$DOCKER_HOME" \
        $IMAGE_NAME yarn add "${@:2}"
elif [ "$ACTION" == "start" ]; then
    docker run --rm \
        --name "birthday_sushi_blitz" \
        --volume "$DIR:$DOCKER_HOME" \
        -p 8080:8080 \
        $IMAGE_NAME npm start
elif [ "$ACTION" == "run" ]; then
    docker run --rm \
        --volume "$DIR:$DOCKER_HOME" \
        $IMAGE_NAME npm run "${@:2}"
elif [ "$ACTION" == "kill" ]; then
    docker kill $(docker ps -q -f name=birthday_sushi_blitz)
else
    echo "usage: $0 [ init | install | start | run [args] ]"
fi

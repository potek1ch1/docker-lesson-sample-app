#コンテナを削除
container_name=$(docker container ls --format {{.Names}} | grep docker-lesson-db)
docker container rm -f $container_name

#prismaのmigrationsを削除
script_dir=$(dirname "$0")
rm -r $script_dir/../board-back/prisma/migrations
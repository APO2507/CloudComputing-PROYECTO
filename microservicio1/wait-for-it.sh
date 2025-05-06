#!/usr/bin/env bash

set -e

host="$1"
port="$2"
shift 2

# Si el siguiente argumento es "--", eliminarlo
if [ "$1" = "--" ]; then
  shift
fi

cmd="$@"

until nc -z "$host" "$port"; do
  >&2 echo "Esperando a que $host:$port esté disponible..."
  sleep 1
done

>&2 echo "$host:$port está disponible, ejecutando comando"
exec $cmd

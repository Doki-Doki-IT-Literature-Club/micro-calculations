#!/bin/sh
eval $(minikube docker-env)

SERVICES_DIR="./services"

for dir in "$SERVICES_DIR"/*/; do
    if [ -f "$dir/build.sh" ]; then
        echo "Running build.sh in $dir"
        chmod +x "$dir/build.sh"
        "$dir/build.sh"
    else
        echo "No build.sh found in $dir, skipping..."
    fi
done

./apply.sh
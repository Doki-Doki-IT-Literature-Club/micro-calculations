#!/bin/sh

SCRIPT_DIR=$(dirname "$(readlink -f "$0")")

docker build "$SCRIPT_DIR" -t app-example-a

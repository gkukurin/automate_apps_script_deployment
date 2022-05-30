#!/bin/bash

if [ "$1" == "dev" ]
then
    echo "Preparing files for development environment"
    cp .clasp-dev.json .clasp.json
    sed -i "/const ENVIRONMENT/s/'.*'/'dev'/" src/const.ts
elif [ "$1" == "prd" ] 
then
    echo "Preparing files for production environment"
    cp .clasp-prd.json .clasp.json
    sed -i "/const ENVIRONMENT/s/'.*'/'prd'/" src/const.ts
else
    echo "Usage: prepare [dev|prd]"
    exit 1
fi

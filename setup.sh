#!/bin/bash

docker rm expanse-character-creator

docker build -t expanse-character-creator:0.0.0 .

docker run --name expanse-character-creator -p 3000:3000 expanse-character-creator:0.0.0
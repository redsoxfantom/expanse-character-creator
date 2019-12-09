FROM node:alpine
WORKDIR /expanse-character-creator
COPY . /expanse-character-creator
RUN npm install
RUN npm run-script build
ENTRYPOINT npm start
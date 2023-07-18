FROM node:lts-alpine

RUN npm install -g http-server

ENV VITE_BASE_URL=https://fakestoreapi.com

WORKDIR /Workspace/DockerizeLimupa

COPY package.json /Workspace/DockerizeLimupa
COPY package-lock.json /Workspace/DockerizeLimupa

RUN npm install

COPY . /Workspace/DockerizeLimupa

RUN npm run build

EXPOSE 8080

CMD [ "http-server", "dist" ]
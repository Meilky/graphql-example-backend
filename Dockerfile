FROM node:latest as base

WORKDIR /usr/app
COPY package*.json ./
COPY . .

FROM base as dev

RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "start:dev" ]

FROM base as prod

RUN npm ci --omit=dev
EXPOSE 3000
CMD [ "npm", "run", "start" ]

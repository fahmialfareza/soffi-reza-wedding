FROM node:18-alpine

EXPOSE 5000

WORKDIR /app

COPY package.json .
RUN yarn install
COPY . .
RUN yarn build
RUN apk add --no-cache tini

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["yarn", "start"]
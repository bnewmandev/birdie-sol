FROM node:18-alpine as builder
WORKDIR /app
COPY ./package.json .
COPY ./yarn.lock .
COPY . .
RUN yarn install
RUN yarn build

FROM nginx:1.22
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
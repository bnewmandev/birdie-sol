FROM node:18-alpine as ts-compiler
WORKDIR /app
COPY ./package.json .
COPY ./tsconfig.json .
COPY ./yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

FROM node:18-alpine as backend
WORKDIR /app
COPY --from=ts-compiler /app/package.json .
COPY --from=ts-compiler /app/build .
RUN yarn install --prod
EXPOSE 8000

CMD [ "yarn", "start" ]

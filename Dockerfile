FROM node:18 as base

FROM base as project
WORKDIR /project
COPY . .
RUN ls -la
RUN npm run setup:ci --if-present
RUN npm ci

FROM project as test
RUN npm run test:ci

FROM test as dist
RUN npm run dist
RUN ls ./dist -la

FROM dist as http-server
EXPOSE 4200
ENTRYPOINT [ "npm" ]
CMD [ "run", "http-server" ]

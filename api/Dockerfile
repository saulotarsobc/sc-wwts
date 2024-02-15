# build
FROM node:20 as build

WORKDIR /app

RUN apt-get update && apt-get install

COPY . .
COPY ./.env.production ./.env

RUN npm install -g npm@latest
RUN npm install --quiet --no-optional --no-fund --loglevel=error

RUN npm run mg
RUN npm run build

# oroduction
FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/.env /app/.env
COPY --from=build /app/prisma /app/prisma
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist

EXPOSE 3000

CMD ["node","dist/main.js"]

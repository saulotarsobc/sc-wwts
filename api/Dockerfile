# build
FROM node:20 as build

WORKDIR /app

RUN apt-get update && apt-get install -y
RUN apt-get install -y \
    # gconf-service \
    # libgbm-dev \
    # libasound2 \
    # libatk1.0-0 \
    # libc6 \
    # libcairo2 \
    # libcups2 \
    # libdbus-1-3 \
    # libexpat1 \
    # libfontconfig1 \
    # libgcc1 \
    # libgconf-2-4 \
    # libgdk-pixbuf2.0-0 \
    # libglib2.0-0 \
    # libgtk-3-0 \
    # libnspr4 \
    # libpango-1.0-0 \
    # libpangocairo-1.0-0 \
    # libstdc++6 \
    # libx11-6 \
    # libx11-xcb1 \
    # libxcb1 \
    # libxcomposite1 \
    # libxcursor1 \
    # libxdamage1 \
    # libxext6 \
    # libxfixes3 \
    # libxi6 \
    # libxrandr2 \
    # libxrender1 \
    # libxss1 \
    # libxtst6 \
    # ca-certificates \
    # fonts-liberation \
    # libappindicator1 \
    # libnss3 \
    # lsb-release \
    # xdg-utils \
    wget


COPY . .
COPY ./.env.production ./.env

RUN npm install -g npm@latest
RUN npm install --quiet --no-optional --no-fund --loglevel=error

EXPOSE 3000

RUN npm run mg
RUN npm run build

# poroduction
# FROM debian:latest

# WORKDIR /app

# COPY --from=build /app/.env /app/.env
# COPY --from=build /app/prisma /app/prisma
# COPY --from=build /app/node_modules /app/node_modules
# COPY --from=build /app/dist /app/dist

# EXPOSE 3000

# CMD ["node","dist/main.js"]

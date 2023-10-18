
FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN npm install
# RUN npm prisma migrate

EXPOSE 3000

CMD ["npm" "run" "start"]




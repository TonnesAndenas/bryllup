FROM node:lts

WORKDIR /app
ADD /src ./src
ADD /public ./public
ADD package.json .
ADD tsconfig.json .

EXPOSE 3000

RUN npm install

CMD [ "npm", "start" ]
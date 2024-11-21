FROM node:18

WORKDIR /app

copy package.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
FROM node:16.15

WORKDIR /app

COPY package*.json ./

RUN npm install && npm install -g dotenv

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

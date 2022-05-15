
# Crypto test app

Application that allows you to get crypto rates in real time


## Installation

Install dependencies with npm

```bash
  git clone [project https/ssh link]
  cd [cloned project's folder]
  npm install
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file (config/.env)

`SERVER_PORT`

`COIN_API_KEY`

`DB_CONNECTION_URL`


## Run Locally

#### Mongodb installation is required!

Start the server via nodemon

```bash
  npm run dev
```

Start the server without hot reload

```bash
  npm start
```


## Docker

To run this project via docker you need to follow several commands

```bash
  docker-compose build
```

After build you should type the next command

```bash
  docker-compose up
```

Server will up on 3000 port by default

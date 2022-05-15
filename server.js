const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')
const mongoose = require('mongoose')

const routes = require('./routes/routes')
const middlewares = require('./middlewares/middlewares')
const { initRatesCheckerTimer } = require('./utils/coinapi')
const { initSocket } = require('./utils/socketio')

const { serverStartupOptions, databaseOptions } = config

const app = express()
const server = http.createServer(app)

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(routes)
app.use('*', (req, res) => res.status(404).render('404'))

app.use(middlewares.errorHandler)

mongoose.connect(databaseOptions.connectionUrl).then(() => {
  console.log('\nDB connection successfull')

  initSocket(server)

  server.listen(serverStartupOptions.port, (err) => {
    if (err) {
      return console.log(err)
    }

    // initRatesCheckerTimer()

    console.log(`Server started on port ${serverStartupOptions.port}`)
  })
}).catch(err => console.error(err))

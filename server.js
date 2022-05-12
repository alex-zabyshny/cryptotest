const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes/routes')
const middlewares = require('./middlewares/middlewares')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(routes)
app.use('*', (req, res) => res.status(404).render('404'))

app.use(middlewares.errorHandler)

const port = 3000

const server = http.createServer(app)
server.listen(port, (err) => {
  if (err) console.log(err)
  console.log(`\nServer started on port ${port}`)
})

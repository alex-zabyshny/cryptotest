const { Server } = require('socket.io')

let io

const initSocket = (server) => {
  io = new Server(server)

  io.on('connection', (socket) => {
    const { currency: room } = socket.handshake.query
    socket.join(room)
  })

  return io
}

const sendRealTimeRates = (room, data) => {
  io.to(room).emit('rates', JSON.stringify(data))
}

module.exports = {
  initSocket,
  sendRealTimeRates,
}

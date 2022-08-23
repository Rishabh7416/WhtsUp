const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 8083;

io.on('connection', function (socket) {
  console.log(`socket: ${socket.id}`);
  socket.on('chat message', message => {
    console.log(`Message: ${message}`);
  });
});

server.listen(port, function () {
  console.log(`listening to the port: ${port}`);
});

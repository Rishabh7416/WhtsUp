const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 8080;

// io.on('connection', socket => {
//   console.log('server connected');
//   socket.on('chat message', (msg) => {
//     console.log(msg);
//     io.emit("chat message", msg);
//     // socket.join(meetingcred);
//     // pushUsersForMeet(username, meetingcred);
//     // socket.to(meetingcred).emit('people-connected', username);
//     // io.to(meetingcred).emit('list-of-users', accessUsers(meetingcred));
//     // socket.on('disconnect', () => {
//     //   console.log('disconnected');
//     //   socket.leave(meetingcred);
//     //   leftUsers(username);
//     //   io.to(meetingcred).emit('list-of-users', accessUsers(meetingcred));
//     // });
//   });
// });

io.on('connection', socket => {
  console.log(`Connected: ${socket.id}`);
  socket.on('disconnect', () => console.log(`Disconnected: ${socket.id}`));

  socket.on('join', room => {
    console.log(`Socket ${socket.id} joining ${room}`);
    socket.join(room);
  });

  socket.on('chat message', data => {
    const {message, room} = data;
    console.log(`msg: ${message}, room: ${room}`);
    socket.broadcast.emit('chat message', message);
  });
});

server.listen(port, () => console.log('server running on port:' + port));

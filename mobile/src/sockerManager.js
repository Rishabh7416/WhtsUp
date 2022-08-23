import io from 'socket.io-client';
let socket;
export const initiateSocket = room => {
  socket = io('http://10.10.8.23:8080');
  console.log('connected');
  if (socket && room) socket.emit('join', room);
};

export const disconnectSocket = () => {
  console.log('disconnecting');
  if (socket) socket.disconnect();
};

export const _sendMessage = (room, message) => {
  // alert(`room: ${room} && message: ${message}`);
  if (socket) socket.emit('chat message', {message, room});
};

import {View, Text} from 'react-native';
import React from 'react';
import {io} from 'socket.io-client';

export default function Practice() {
  let socket;
  React.useEffect(() => {
    socket = io('http://192.168.1.2:8083');
    socket.on('connect', function () {
      console.log(`connect: ${socket.connected}`);
    });

    return () => {
      socket.on('disconnect', function () {
        console.log(`disconnect: ${socket.connected}`);
      });
    };
  }, []);

  function _socket() {
    console.log(socket.ids);
    socket.emit('practice', function (variable) {
      variable = 'Rishabh';
      console.log(`message: ${variable}`);
    });
  }

  return (
    <View>
      <Text onPress={_socket}>Practice</Text>
    </View>
  );
}

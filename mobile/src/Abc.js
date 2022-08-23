import {faker} from '@faker-js/faker';
import {uid} from 'uid';

export const _animal = [
  {
    name: 'Rishabh',
    image: faker.image.animals(),
    uid: uid(10),
    chat: 'Hi, I am Rishabh',
  },
  {
    name: 'Satyam',
    image: faker.image.animals(),
    uid: '1234abc',
    chat: 'Hi, I am Satyam',
  },
  // {
  //   name: 'Prakhar',
  //   image: faker.image.animals(),
  //   uid: '4567def',
  //   chat: 'Hi, I am Prakhar',
  // },
  // {
  //   name: 'Reetu raj',
  //   image: faker.image.animals(),
  //   uid: '8910ghi',
  //   chat: 'Hi, I am Reeturaj',
  // },
  // {
  //   name: 'Shubhankar',
  //   image: faker.image.animals(),
  //   uid: '1234jkl',
  //   chat: 'Hi, I am Shubhankar',
  // },
];

import {View, Text} from 'react-native';
import React from 'react';
import { io } from 'socket.io-client';

export default function Abc() {
  const uidData = {uid1: uid(), uid2: uid()};

  const uniqueRoomId = () => {
    if (uidData.uid1 > uidData.uid2) {
      console.log(
        '${uidData.uid1}-${uidData.uid2} : ',
        `${uidData.uid1}-${uidData.uid2}`,
      );
      return `${uidData.uid1}-${uidData.uid2}`;
    } else {
      console.log(
        '${uidData.uid1}-${uidData.uid2} : ',
        `${uidData.uid1}-${uidData.uid2}`,
      );
      return `${uidData.uid1 + uidData.uid2}`;
    }
  };

  React.useEffect(() => {
    const socket = io('http://192.168.1.2:8080');
    socket.on('Hello world', msg => {
      // console.log('msg', msg)
      socket.emit('Hello world', 'abc')
    });
  }, []);

  return (
    <View>
      <Text>Abc</Text>
    </View>
  );
}
// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
// } from 'react-native';
// import {
//   initiateSocket,
//   disconnectSocket,
//   subscribeToChat,
//   sendMessage,
// } from './sockerManager';

// export default function Abc() {
//   const rooms = ['A', 'B', 'C'];
//   const [room, setRoom] = useState(rooms[0]);
//   const [message, setMessage] = useState('');
//   const [chat, setChat] = useState([]);

//   React.useEffect(() => {
//     if (room) initiateSocket(room);
//     // subscribeToChat((err, data) => {
//     //   if (err) return;
//     //   setChat(oldChats => [data, ...oldChats]);
//     // });
//     return () => {
//       disconnectSocket();
//     };
//   }, [room]);

//   return (
//     <View>
//       <Text>Room: {room}</Text>
//       {rooms.map((r, i) => (
//         <TouchableOpacity onPress={() => setRoom(r)}>
//           <Text>{r}</Text>
//         </TouchableOpacity>
//       ))}
//       <Text>Live Chat:</Text>
//       <TextInput
//         placeholder="Enter Name"
//         value={message}
//         onChangeText={text => setMessage(text)}
//       />
//       <TouchableOpacity onPress={() => sendMessage(room, message)}>
//         <Text>Send</Text>
//       </TouchableOpacity>
//       {chat.map((m, i) => (
//         <Text>{alert(m)}</Text>
//       ))}
//     </View>
//   );
// }

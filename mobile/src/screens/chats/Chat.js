import React, {useState} from 'react';
import {
  FlatList,
  Platform,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import {
  updateChatMessage,
  updateChatMessages,
  updatedChatMessageTime,
} from '../../redux/reducer';
import io from 'socket.io-client';
import {ChatStyles} from './chatStyle';
import Header from '../../components/header';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {LocalImages} from '../../utils/localImages/localImages';
import MessageComponent from '../../components/reusableComponent/messageComponent';
import TextInputBtnComponent from '../../components/reusableComponent/textInputBtnComponent';
import {_animal} from '../../Abc';
import {
  initiateSocket,
  _sendMessage,
  disconnectSocket,
} from '../../sockerManager';

/**
 * @returns Chat Component,
 */
const Chat = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const socket = io('http://10.10.8.23:8080');
  const [selected, setSelected] = React.useState(false);
  const msg = useSelector(Store => Store.dataReducer.msg);
  const msgs = useSelector(Store => Store.dataReducer.msgs);
  const rooms = ['A', 'B', 'C'];
  const [room, setRoom] = useState(rooms[1]);
  console.log('route.parmas', 
  );

  /**
   * connection for the component at the mounting time
   * 'chat message' argument of same string on the server
   * callback is the 2nd argument to send message to the server
   */
  const serverConnection = () => {
    const connecting = socket;
    connecting.on('chat message', msg => {
      debugger
      console.log({msg})
      handleUseCases(msg);
    });
  };

  /**
   * @param {*} msg
   * handling use cases with handleUseCases : Function
   */
  const handleUseCases = msg => {
    let handledTextResult = msg.trim();
    if (handledTextResult.length > 0) {
      dispatch(updateChatMessages(handledTextResult));
    } else {
      return null;
    }
  };

  /**
   * returns time
   */
  const messageTime = () => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const format = hours > 12 ? 'pm' : 'am';
    const time = `${hours}:${minutes}${format}`;
    dispatch(updatedChatMessageTime(time));
  };

  /**
   * connection to the server
   * dispatches date and time to the reducer
   */
  const sendMessages = React.useCallback(() => {
    console.log('msg', msg)
    socket.emit('chat message', msg);
    messageTime();
    dispatch(updateChatMessages(msg))
  }, [msg]);

  /**
   *
   */
  const updateMessages = React.useCallback(msging => {
    if (msging.length == 0) setSelected(false);
    else setSelected(true);
    dispatch(updateChatMessage(msging));
  }, []);

  // React.useEffect(() => {
  //   if (room) initiateSocket(room);
  //   return () => {
  //     disconnectSocket();
  //   };
  // }, [room]);

  React.useEffect(() => {
    initiateSocket
    serverConnection();
    return () => {
      socket.disconnect();
    };
  }, []);

  /**
   * @argument {*} item in-built with renderitem
   * @param {*} param0
   * @returns customComponent(message)
   */
  const renderItem = ({item}) => {
    return (
      <MessageComponent
        id={true}
        item={item}
        left={ChatStyles.viewBasedOnOwnId}
        textStyle={ChatStyles.textStyling}
        right={ChatStyles.viewBasedOnOtherId}
        unseenImage={LocalImages.chatUnseenImage}
      />
    );
  };

  return (
    <ImageBackground
      style={{flex: 1}}
      resizeMode="stretch"
      source={LocalImages.chatBackgroundImage}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <Header username={route.params} userimage={route.params} />
        <FlatList
          data={msgs}
          renderItem={renderItem}
          bounces={false}
          keyExtractor={item => item.id}
        />
        <TextInputBtnComponent
          placeholder="Message"
          placeholderTextColor="white"
          micImage={LocalImages.chatMicImage}
          cameraImage={LocalImages.chatCameraImage}
          selectedImage={
            selected ? LocalImages.sendImage : LocalImages.chatMicImage
          }
          sendImage={LocalImages.sendImage}
          viewStyle={ChatStyles.sendItemContainer}
          style={ChatStyles.textInputStyle}
          autoCorrect={false}
          value={msg}
          onSubmitEditing={sendMessages}
          onChangeText={msging => updateMessages(msging)}
          onPress={() => _sendMessage(room, msg)}
          buttonStyle={ChatStyles.buttonContainer}
          attachIcon={LocalImages.chatCameraImage}
          emojiIcon={LocalImages.chatCameraImage}
          iconStyles={ChatStyles.iconStyles}
        />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default React.memo(Chat);

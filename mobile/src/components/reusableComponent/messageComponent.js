import {View, Text, Image} from 'react-native';
import React from 'react';
import { _animal } from '../../Abc';

const MessageComponent = ({
  left,
  right,
  id,
  item,
  textStyle,
  unseenImage,
  time,
  chat,
}) => {
  return (
    <View style={id ? left : right}>
      <Text style={textStyle}>{`message: ${item}`}</Text>
      <Text>{time}</Text>
      <Image source={unseenImage} style={{height: 15, width: 15}} />
    </View>
  );
};

export default MessageComponent;

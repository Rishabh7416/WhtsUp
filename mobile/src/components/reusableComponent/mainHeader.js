import {View, Text, Image} from 'react-native';
import React from 'react';

const MainHeader = ({
  title,
  mainstyles,
  textStyles,
  searchImageStyle,
  searchImage,
}) => {
  return (
    <View style={mainstyles}>
      <Text style={textStyles}>{title}</Text>
      <Image source={searchImage} style={searchImageStyle} />
    </View>
  );
};

export default MainHeader;

import React from 'react';
import {View, Image, TextInput, TouchableOpacity} from 'react-native';

/**
 * Custom component for textInputs
 * @param {*} param0 
 * @returns 
 */
export default function TextInputBtnComponent({
  style,
  autoCorrect,
  value,
  onSubmitEditing,
  onChangeText,
  onPress,
  buttonStyle,
  viewStyle,
  micImage,
  cameraImage,
  attachIcon,
  emojiIcon,
  iconStyles,
  placeholder,
  placeholderTextColor,
  sendImage,
  selectedImage,
}) {
  return (
    <View style={viewStyle}>
      <TextInput
        style={style}
        autoCorrect={autoCorrect}
        value={value}
        onSubmitEditing={onSubmitEditing}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
      <View style = {{alignItems: 'center', justifyContent: 'center'}}>
        <Image source={cameraImage} style={iconStyles} />
      </View>
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Image source={selectedImage} style={{height: 25, width: 25}} />
      </TouchableOpacity>
    </View>
  );
}

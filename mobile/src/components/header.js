import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import React from 'react';
import HeaderImage from './reusableComponent/headerImage';
import {LocalImages} from '../utils/localImages/localImages';
import {useNavigation} from '@react-navigation/native';
import {ChatStyles} from '../screens/chats/chatStyle';

/**
 * useNavigation : Hook
 * ChatStyles : StyleSheet
 * @param {*} {username}{userimage} receiving from the component
 * @returns View for the header to the chat component
 */
export default function Header({username, userimage}) {
  const navigation = useNavigation();
  return (
    <View style={ChatStyles.mainContainer}>
      <View style={ChatStyles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={LocalImages.back} style={{height: 20, width: 20}} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.push('Profile', {userimage})}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{uri: userimage.userimage}}
            style={{
              height: 35,
              width: 35,
              borderRadius: 100 / 2,
              marginHorizontal: 8,
            }}
          />
          <Text style={{color: 'white', fontWeight: '600', fontSize: 15}}>
            {username.username}
          </Text>
        </TouchableOpacity>
      </View>
      <HeaderImage />
    </View>
  );
}

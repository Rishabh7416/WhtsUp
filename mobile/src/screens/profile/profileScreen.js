import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ProfileScreen = ({
  imageOfUsers,
  searchIcon,
  videoIcon,
  audioIcon,
  profilePicStyle,
  mainContainer,
  usernameStyle,
  contentContainerStyle,
  username,
  handleNavigation,
  backIcon,
  backIconStyle,
}) => {
  const renderItem = ({item}) => {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image source={item} style={{height: 20, width: 20}} />
        <Text style={{marginVertical: 20}}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={mainContainer}>
      <TouchableOpacity>
        <Image source={{uri: imageOfUsers}} style={profilePicStyle} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNavigation}>
        <Image source={backIcon} style={backIconStyle} />
      </TouchableOpacity>
      <Text style={usernameStyle}>{username}</Text>
      <FlatList
        data={[audioIcon, videoIcon, searchIcon]}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={contentContainerStyle}
      />
    </View>
  );
};

export default ProfileScreen;

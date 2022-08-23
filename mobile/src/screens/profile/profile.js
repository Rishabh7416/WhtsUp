import React from 'react';
import ProfileScreen from './profileScreen';
import { profileStyles } from './profileStyles';
import {LocalImages} from '../../utils/localImages/localImages';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function Profile() {
  const route = useRoute();
  const navigation = useNavigation()

  const handleNavigation = () => {
    navigation.goBack()
  }
  return (
    <ProfileScreen
      imageOfUsers={route.params.userimage.userimage}
      searchIcon={LocalImages.search}
      videoIcon={LocalImages.video}
      audioIcon={LocalImages.phoneCall}
      contentContainerStyle={profileStyles.containerStyle}
      profilePicStyle={profileStyles.profilePicStyle}
      mainContainer={profileStyles.mainContainer}
      usernameStyle={profileStyles.usernameStyle}
      handleNavigation = {() => handleNavigation()}
      username = {route.params.userimage.username}
      backIcon = {LocalImages.back}
      backIconStyle = {profileStyles.backIconStyle}
    />
  );
}

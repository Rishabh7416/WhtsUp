import {_animal} from '../../Abc';
import React, {useState} from 'react';
import {fetchData} from '../../redux/reducer';
import {HomeScreenStyles} from './homeStyles';
import {_sendMessage} from '../../sockerManager';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, FlatList, Image, TouchableOpacity, Text} from 'react-native';

export default function HomeScreen() {
  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const updatedTime = useSelector(Store => Store.dataReducer.updatedTime);
  const msg = useSelector(Store => Store.dataReducer.msg);
  console.log('message initialState', msg)
  const [room, setRoom] = useState();
  console.log('room', room);

  React.useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleNavigation = item => {
    setRoom(item.uid);
    console.log('room', room);
    navigation.push('Chats', {
      username: item.name,
      userimage: item.image,
      roomid: room
    });
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <View style={HomeScreenStyles.chatBox}>
          <TouchableOpacity
            style={HomeScreenStyles.userContainerStyle}
            onPress={() => handleNavigation(item)}>
            <Image
              source={{uri: item.image}}
              style={HomeScreenStyles.imageStyle}
            />
            <View style={HomeScreenStyles.textContainer}>
              <Text style={{color: 'white', fontSize: 16}}>{item.name}</Text>
              <Text style={{color: 'grey', fontSize: 14}}>{msg}</Text>
            </View>
          </TouchableOpacity>
          <Text style={HomeScreenStyles.textStyles}>{updatedTime}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={HomeScreenStyles.container}>
      <FlatList data={_animal} renderItem={renderItem} />
    </View>
  );
}

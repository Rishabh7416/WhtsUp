import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {_animal} from '../../Abc';

export default function Status() {
  return (
    <View>
      <FlatList
        data={_animal}
        renderItem={({item}) => {
          return (
            <View>
              <Image
                source={item.image}
                style={{height: 40, width: 40, backgroundColor: 'red'}}
              />
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {LocalImage} from '../../utils/localImages/localImages';

export default function HeaderImage() {
  return (
    <View style={styles.container}>
      {LocalImage.map(img => {
        return <Image style={{height: 18, width: 18}} source={img} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});

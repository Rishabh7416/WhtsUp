import {StyleSheet} from 'react-native';

export const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 100 / 2,
    marginVertical: 18,
  },

  userContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContainer: {
    justifyContent: 'space-between',
    marginHorizontal: 20,
    height: 40,
  },

  textStyles: {
    color: 'grey',
    fontSize: 12,
  },

  chatBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

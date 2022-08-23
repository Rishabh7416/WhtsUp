import {StyleSheet} from 'react-native';

export const profileStyles = StyleSheet.create({
  profilePicStyle: {
    height: 130,
    width: 130,
    borderRadius: 100,
    alignSelf: 'center',
  },
  
  mainContainer: {
    backgroundColor: 'black',
    flex: 1,
  },

  usernameStyle: {
    alignSelf: 'center',
    color: 'white',
    marginVertical: 30,
    fontSize: 20,
    fontWeight: '600'
  },

  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    alignSelf: 'center',
    alignItems: 'center',
  },

  backIconStyle: {
    height: 30,
    width: 30,
    position: 'absolute',
    bottom: 95,
    marginLeft: 10,
  },
});

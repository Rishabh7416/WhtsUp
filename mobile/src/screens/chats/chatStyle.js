import {StyleSheet} from 'react-native';

export const ChatStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonContainer: {
    alignSelf: 'center',
    borderRadius: 100 / 2,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00a884',
  },

  textInputStyle: {
    borderRadius: 20,
    width: '85%',
    height: 50,
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    color: 'white'
    // marginBottom: 10
  },

  sendItemContainer: {
    flexDirection: 'row',
    // alignSelf: 'center',
    alignItems: 'center',

    marginBottom: 10,
    justifyContent: 'space-between',
  },

  textStyling: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 0.2,
  },

  viewBasedOnOwnId: {
    padding: 12,
    marginTop: 7,
    height: 40,
    width: '40%',
    alignSelf: 'flex-end',
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00a884',
    flexDirection: 'row',
  },

  viewBasedOnOtherId: {
    marginTop: 7,
    height: 40,
    width: '40%',
    alignSelf: 'flex-start',
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: '#00a884',
  },
  iconStyles: {
    height: 25,
    width: 25,
    position: 'absolute',
    right: 10,
  },

  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    backgroundColor: 'black',
    height: 50,
    paddingHorizontal: 10,
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    justifyContent: 'space-between',
  },
});

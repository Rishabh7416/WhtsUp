import {View} from 'react-native';
import { routeStyles } from './routeStyles';
import Chat from '../src/screens/chats/Chat';
import Calls from '../src/screens/calls/calls';
import Status from '../src/screens/status/status';
import HomeScreen from '../src/screens/home/homeScreen';
import {NavigationContainer} from '@react-navigation/native';
import { LocalImages } from '../src/utils/localImages/localImages';
import MainHeader from '../src/components/reusableComponent/mainHeader';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProfileScreen from '../src/screens/profile/profileScreen';
import Profile from '../src/screens/profile/profile';

const Stack = createNativeStackNavigator();
const TopTabs = createMaterialTopTabNavigator();

/**
 * 
 * @returns Stack Navigation
 */
export const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="bac"
          component={TopTabComponent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chats"
          component={Chat}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name = "Profile"
          component={Profile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

/**
 * MainHeader: Component
 * @returns Top Tab Naviagtion
 */
const TopTabComponent = () => {
  return (
    <View style={{flex: 1}}>
      <MainHeader
        mainstyles = {routeStyles.mainstyles}
        title = "WhatsApp"
        textStyles = {routeStyles.textStyles}
        searchImage = {LocalImages.search}
        searchImageStyle= {routeStyles.searchImageStyle}
      />
      <TopTabs.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarLabelStyle: {
            fontWeight: 'bold',
          },
          tabBarStyle: {
            backgroundColor: '#075E54'
          },
        }}>
        <TopTabs.Screen name="Chat" component={HomeScreen} />
        <TopTabs.Screen name="Status" component={Status} />
        <TopTabs.Screen name="Calls" component={Calls} />
      </TopTabs.Navigator>
    </View>
  );
};
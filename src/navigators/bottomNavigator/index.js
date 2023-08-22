import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Hello from '../../screens/Hello';
import Session from '../../screens/bottomScreens/Session';
import Chats from '../../screens/bottomScreens/Chats';
import ProgramStack from '../ProgramStack/ProgramStack';
import { useRoute } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



const Tab = createMaterialBottomTabNavigator();

// const HelloScreen = () => <View />;
// const SessionScreen = () => <View />;
// const ProgramScreen = () => <View />;
// const ChatsScreen = () => <View />;

const getTabBarImage = (routeName, isFocused) => {
  if (routeName === 'Hello') {
    return isFocused
      ? require('../../assets/Program/Group138.png')
      : require('../../assets/Program/Group125.png');
  } else if (routeName === 'Session') {
    return isFocused
      ? require('../../assets/Program/Group134.png')
      : require('../../assets/Program/Group127.png');
  } else if (routeName === 'Program') {
    return isFocused
      ? require('../../assets/Program/Group137.png')
      : require('../../assets/Program/Group131.png');
  } else if (routeName === 'Chat') {
    return isFocused
      ? require('../../assets/Program/Group136.png')
      : require('../../assets/Program/Chat1.png');
  }

  return require('../../assets/Program/Group138.png');
};



const TabStack = () => {
  const route = useRoute();
  return (

    <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused }) => {
      const iconName = getTabBarImage(route.name, focused);
      const iconSize = focused ? 90 : 25; // Adjust the icon size based on focus
      const iconPostion = focused ? 60 : 20;
      const iconHeight = focused ? 30 : 0;
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={iconName} style={{ width: iconSize, height: iconSize, marginLeft: iconPostion, bottom: iconHeight }} resizeMode='contain'/>
        </View>
      );
    },
  })}
>
      <Tab.Screen name="Hello" component={Hello} options={{ headerShown: false, tabBarLabel: false }} />
      <Tab.Screen name="Session" component={Session} options={{ tabBarLabel: false }} />
      <Tab.Screen name="Program" component={ProgramStack} options={{ headerShown: false, tabBarLabel: false }} />
      <Tab.Screen name="Chat" component={Chats} options={{ headerShown: false, tabBarLabel: false }} />
    </Tab.Navigator>
  )
}

export default TabStack

const styles = StyleSheet.create({})
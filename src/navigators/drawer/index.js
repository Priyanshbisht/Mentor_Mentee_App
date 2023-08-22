import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../../screens/JoiningScreens/Main';
import Profile from '../../screens/drawerScreen/profile';
import Home from '../../screens/drawerScreen/home';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="profile"
        component={Profile}
      />
      <Drawer.Screen
        name="home"
        component={Home}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStack;

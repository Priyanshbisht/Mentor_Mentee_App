import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerStack from '../drawer';
import BottomTabStack from '../bottomNavigator';
import Hello from '../../screens/Hello';
import Home from '../../screens/drawerScreen/home';

const Stack = createStackNavigator();

const HelloStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Hello' component={Hello} />
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name='DrawerStack' component={DrawerStack} />
      <Stack.Screen name='BottomTabStack' component={BottomTabStack} />
    </Stack.Navigator>
  );
}

export default HelloStack;

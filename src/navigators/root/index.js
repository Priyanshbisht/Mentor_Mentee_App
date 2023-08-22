import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from '../authStack';
import HelloStack from '../helloStack';
import DrawerStack from '../drawer';
import BottomTabStack from '../bottomNavigator';



const Stack = createStackNavigator();


const RootStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='authStack' component={AuthStack} options={{headerShown: false}}/>
        <Stack.Screen name='HelloStack' component={HelloStack} options={{headerShown: true}} />
        <Stack.Screen name='drawerStack' component={DrawerStack} options={{headerShown: true}}/>
        <Stack.Screen name='bottomStack' component={BottomTabStack} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default RootStack;

const styles = StyleSheet.create({})
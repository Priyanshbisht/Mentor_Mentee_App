import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import FingerLogin from '../screens/fingerLogin';
import Base from '../screens/base';

const Stack = createStackNavigator();


const AuthenStack = () => {
  return (
    <Stack.Navigator initialRouteName="fingerLogin" >
      <Stack.Screen name="fingerLogin" component={FingerLogin} options={{ headerShown: false }} />
      <Stack.Screen name="base" component={Base} options={{ headerShown: false }} />
      </Stack.Navigator>
  )
}

export default AuthenStack

const styles = StyleSheet.create({})
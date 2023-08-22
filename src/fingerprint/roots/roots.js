import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AuthenStack from '../authen/authenStack';
const Stack = createStackNavigator();


const Roots = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='authStack' component={AuthenStack} options={{headerShown: false}}/>
      </Stack.Navigator>
  )
}

export default Roots

const styles = StyleSheet.create({})
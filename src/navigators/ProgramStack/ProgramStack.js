import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Program from '../../screens/bottomScreens/Program';
import Second from '../../screens/Program/Second';
import Third from '../../screens/Program/Third';
import Fourth from '../../screens/Program/Fourth';
import Fifth from '../../screens/Program/Fifth';


const Stack = createStackNavigator();
const ProgramStack = () => {
  return (
   <Stack.Navigator initialRouteName='Program' >
    <Stack.Screen name='Program' component={Program}  options={{headerShown:false}}  /> 
    <Stack.Screen name='Second' component={Second} options={{headerShown:false}}  />
    <Stack.Screen name='Third' component={Third} options={{headerShown:false}}  />
    <Stack.Screen name='Fourth' component={Fourth} options={{headerShown:false}}  />
    <Stack.Screen name='Fifth' component={Fifth} options={{headerShown:false}}  />
   

   </Stack.Navigator> 

  )
}

export default ProgramStack

const styles = StyleSheet.create({})
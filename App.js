import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from './src/navigators/root';
import Roots from './src/fingerprint/roots/roots';




const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
    <RootStack/>
    {/* <Roots/> */}
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
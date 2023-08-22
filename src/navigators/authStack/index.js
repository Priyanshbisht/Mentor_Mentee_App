import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from '../../reduxToolkit/signUp/store';
import Intro from '../../screens/intro';
import Intro2 from '../../screens/intro2';
import Intro3 from '../../screens/intro3';
import SignupA from '../../screens/signpA';
import Login from '../../screens/login';
import Forgot from '../../screens/forgot';
import Otp from '../../screens/otp';
import Done from '../../screens/done';
import Connecting from '../../screens/JoiningScreens/Connecting';




const Stack = createStackNavigator();


const AuthStack = () => {
  return (
    <Provider store={store}>
    <Stack.Navigator initialRouteName="intro" >
      <Stack.Screen name="intro" component={Intro} options={{ headerShown: false }} />
      <Stack.Screen name="intro2" component={Intro2} options={{ headerShown: false }} />
      <Stack.Screen name="intro3" component={Intro3} options={{ headerShown: false }} />
      <Stack.Screen name="signpA" component={SignupA} options={{ headerShown: false }} />
      <Stack.Screen name="signpB" component={SignupA} />
      <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="forgot_pass" component={Forgot} options={{ headerShown: false }} />
      <Stack.Screen name="otp" component={Otp} />
      <Stack.Screen name="done" component={Done} options={{ headerShown: false }} />
      <Stack.Screen name="Connecting" component={Connecting} options={{ headerShown: false }} />
      {/* <Stack.Screen name="main" component={Main} options={{headerShown: false}} /> */}





    </Stack.Navigator>
    </Provider>
  )
}

export default AuthStack

const styles = StyleSheet.create({})
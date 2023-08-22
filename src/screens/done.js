import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'

const Done = ({ navigation, route}) => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <ScrollView>
      <Image source={require('../assets/done/ADN.png')} style={styles.image1} />
      <Text style={styles.text1}>It’s time for you to explore everything</Text>
      <View>
        <Image source={require('../assets/done/Group111.png')} style={styles.image2} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={() => navigation.navigate('login',{token:route.params.token,email:route.params.email,password:route.params.password,type:'register'})}>Start Exploring</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Done

const styles = StyleSheet.create({

  image1: {
    marginLeft: 30,
    marginTop: 60,
  },
  text1: {
    marginLeft: 30,
    marginTop: 20,
  },
  image2: {
    marginTop: 60,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 150,
  },
  button: {
    backgroundColor: '#FE4D4D',
    width: 350,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 90,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
})

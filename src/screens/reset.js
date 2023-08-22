import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect } from "react";
import SplashScreen from 'react-native-splash-screen';


const Reset = ({navigation}) => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

  return (
    <View>
     <View style={styles.container}>
                <Image source={require('../assets/reset/G107.png')} style={styles.imageA} />
                <Image source={require('../assets/reset/RP.png')} style={styles.imageB} />
                <Text style={styles.text1}>your new password must be different</Text>
                <Text>from previos used password</Text>
            </View>
            <View style ={styles.passcontainer}>
                <TextInput 
                style ={styles.user1}
                placeholder='New Password'
                />
                <Image source={require('../assets/reset/eye.png')} style={styles.icon} />
                <Text style ={styles.charac}>Must be atleast 8 characters</Text>
                </View>
                <View style ={styles.passcontainer}>
                <TextInput 
                style ={styles.user1}
                placeholder='Confirm Password'
                />
                <Image source={require('../assets/reset/l.png')} style={styles.icon} />
                <Text style ={styles.charac}>Both password must match</Text>
                </View>
                <TouchableOpacity style={styles.add}>
                    <Text style={styles.addition}>Save Password</Text>
                </TouchableOpacity>
              
    </View>
  )
}

export default Reset;

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginTop: 40,
    },
    imageB: {
       marginTop: 20,
    },
    text1: {
        marginTop: 20,
    },
    passcontainer: {
        marginLeft: 20,
        marginTop: 20,
    },
    user1: {
        borderWidth: 1,
        marginRight: 20,
        borderRadius: 10,
    },
    charac: {
        marginTop: 10,
        fontSize: 15,
    },
    icon:{
        position: 'absolute',
        right: 30,
        bottom: 45,
        },
        add: {
            marginTop: 40,
            backgroundColor: 'red',
            height: 45,
            marginHorizontal: 20, 
            borderRadius: 7,
        },
        addition: {
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            marginTop: 10,
        }
})
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from "react";
import SplashScreen from 'react-native-splash-screen';
import { FORGOT } from '../Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Forgot = ({ navigation, route }) => {
    const type = route.params?.type;
    const [email, setEmail] = useState(type=='inside' ? route.params.storedEmail:'');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        SplashScreen.hide();
        getEmailFromAsyncStorage();
    }, []);

    const getEmailFromAsyncStorage = async () => {
        try {
            const storedEmail = await AsyncStorage.getItem('storedEmail');
            if (storedEmail) {
                setEmail(storedEmail);
            }
        } catch (error) {
            console.error('Error fetching email from AsyncStorage:', error);
        }
    };
    const forgotPassword = () => {
        if (!email) {
            return Alert.alert('Enter email first');
        }
        setLoading(true);
        FORGOT(email)
            .then(response => {
                setLoading(false);
                console.log('response', response);
    
                if (response.status === 'Success') {
                    // Save the email to AsyncStorage before navigating
                    AsyncStorage.setItem('storedEmail', email);
                    navigation.navigate('otp', { type: type, token: response.data.token });
                    console.log('email', storedEmail);
                } else {
                    Alert.alert('Enter valid email');
                }
            })
            .catch(error => {
                setLoading(false);
                console.error('Error', error);
                Alert.alert('Error occurred during the process.');
            });
    };
    

    return (
        <ScrollView>

            <View style={styles.container1}>

                <Image source={require('../assets/forgot/Group104.png')} style={styles.image1}></Image>
                <Image source={require('../assets/forgot/Forgot_.png')} style={styles.image2}></Image>
                <Text style={styles.text1}>Don’t worry! It happens. Please enter </Text>
                <Text>the address associated with your account.</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputWithIcon}
                    placeholder="Email ID"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Image source={require('../assets/signupA/Vec.png')} style={styles.icon} />
            </View>
            <TouchableOpacity style={styles.button1}>
                <Text style={styles.buttonText1} onPress={() => forgotPassword()}>Send</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default Forgot;

const styles = StyleSheet.create({
    container1: {

        marginLeft: 20,
        marginTop: 30,
    },
    image1: {
        marginLeft: 20,
    },
    image2: {
        marginTop: 10,
    },
    text1: {
        marginTop: 20,
    },
    inputContainer: {
        marginHorizontal: 20,
        marginVertical: 20,
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputWithIcon: {
        color: 'black',
        paddingHorizontal: 10,
        paddingRight: 30,
    },
    icon: {
        position: 'absolute',
        right: 10,
    },
    button1: {
        marginHorizontal: 20,
        marginVertical: 20,
        backgroundColor: '#FE4D4D',
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText1: {
        marginTop: 10,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',

    },
})
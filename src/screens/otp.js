import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { OTP } from '../Api';
import OtpInputs from 'react-native-otp-inputs'


const Otp = ({ navigation, route }) => {
    const token = types === 'register' ?route.params?.token : route.params.token;
    const types = route.params?.type;
  

    const type = types === 'register' || types === 'inside' ? types : '';
  
    const [otp, setOtp] = useState(type === types ? route.params?.otp : '');


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        SplashScreen.hide();
    }, []);


    const verifyOtp = () => {
        if (!otp) {
            return Alert.alert('Enter OTP');
        }
        setLoading(true);
        const data = {
            "otp": otp,
            "type": types === 'register' ? 'register' : 'inside' ? 'forgot': '',
        };

        OTP(data, token)
            .then(response => {
                setLoading(false);
                console.log('otp', otp);
                console.log('response', response);

                if (types === 'register') {
                    if (response.status === 'Success') {
                        navigation.navigate('done', { token: token, email: route.params.email, password: route.params.password, type: 'register' });
                    } else {
                        Alert.alert('Enter a valid OTP.');
                    }
                } else if (types === 'inside') {
                    console.log('logintoken--->', route.params?.token)
                    if (response.status === 'Success') {
                        const storedEmail = route.params.storedEmail; 
                        navigation.navigate('hello', { token: token, storedEmail:storedEmail, type: 'inside' });
                    } else {
                        Alert.alert('Enter a valid OTP.');
                    }
                } else {
                    Alert.alert('Invalid type.');
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
            <Image source={require('../assets/otp/G105.png')} style={styles.image1} />
            <Image source={require('../assets/otp/EOTP.png')} style={styles.image2} />
            <Text style={styles.text1}>A 6 digit code has been sent to</Text>
            <Text style={styles.text2}>user123@gmail.com</Text>
            <View style={styles.textInputstyle}>
                <OtpInputs
                    handleChange={code => setOtp(code)}
                    numberOfInputs={6}
                    inputStyles={styles.otpInputStyles}
                    inputContainerStyles={styles.otpContainerStyles} />
            </View>
            <View style={styles.touch}>
                <Text style={styles.text3}>I didn't receive code.</Text>
                <TouchableOpacity>
                    <Text style={styles.text4}>Resend code.</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={verifyOtp}>
                    <Text style={styles.text5}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Otp;

const styles = StyleSheet.create({
    image1: {
        marginLeft: 40,
        marginTop: 40,
    },
    image2: {
        marginLeft: 30,
        marginTop: 30,
    },
    text1: {
        marginLeft: 30,
        marginTop: 20,
    },
    text2: {
        marginLeft: 30,
    },
    textInputstyle: {
        flexDirection: 'row',
        marginHorizontal: 50,
        marginTop: 45,
        
    },
    otpContainerStyles: {
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        padding: 5,
        marginRight: 10
    },
    otpInputStyles: {
        color: '#313131',
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center'
    },
    text3: {
        marginLeft: 22,
    },
    touch: {
        flexDirection: 'row',
        marginTop: 60,
    },
    text4: {
        fontWeight: 'bold',
    },
    text5: {
        textAlign: 'center',
        height: 50,
        margin: 20,
        borderRadius: 5,
        textAlignVertical: 'center',
        backgroundColor: '#FE4D4D',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

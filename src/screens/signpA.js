import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, setToken, setLoading } from "../reduxToolkit/signUp/authSlice"; // Update the import path
import { REGISTRATION } from "../Api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';

const SignupA = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);

    const [loading, setLoading] = useState(false); // Define the setLoading state

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    const handleFormSubmit = async () => {
        const { refCode, email, firstName, lastName, country_code, mobileNumber, password, role } = authState; // Destructure properties

        if (!refCode || !email || !firstName || !lastName || !country_code || !mobileNumber || !password || !role) {
            return Alert.alert('Please fill required details');
        }
        setLoading(true);

        let formdata = new FormData();

        formdata.append("referral_code", refCode);
        formdata.append("email", email);
        formdata.append("firstName", firstName);
        formdata.append("lastName", lastName);
        formdata.append("country_code", country_code);
        formdata.append("phone", mobileNumber);
        formdata.append("password", password);
        formdata.append("role", role);

        try {
            const response = await REGISTRATION(formdata);
            setLoading(false);

            if (response.status === 'Success') {
                dispatch(updateField(response));
                await AsyncStorage.setItem('userEmail', email);
                dispatch(setToken(response.data.token)); // Store the token in Redux
                navigation.navigate('otp', { token: response.data.token, email: email, type: 'register' });
            } else {
                Alert.alert('Registration failed. Please try again.');
            }
        } catch (error) {
            setLoading(false);
            console.error('Error:', error);
            Alert.alert('An error occurred. Please try again later.');
        }
    };


    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={require('../assets/signupA/signup.png')} style={styles.imageA} />
                <Image source={require('../assets/signupA/S.png')} style={styles.imageB} />
                <Text style={styles.text}>Hello, I guess you are new around here.</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.leftButton]}>
                    <Text style={styles.buttonText1}>Mentor</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.rightButton]}>
                    <Text style={styles.buttonText2} onPress={() => navigation.navigate("signpB")}>Mentee</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputWithIcon}
                    placeholder="Referral Code"
                    value={authState.refCode}
                    onChangeText={(text) => dispatch(updateField({ field: 'refCode', value: text }))}
                />
                <Image source={require('../assets/signupA/rect355.png')} style={styles.icon} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputWithIcon}
                    placeholder="Email ID"
                    value={authState.email}
                    onChangeText={(text) => dispatch(updateField({ field: 'email', value: text }))}
                />
                <Image source={require('../assets/signupA/Vec.png')} style={styles.icon} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputWithIcon}
                    placeholder="First Name"
                    value={authState.firstName}
                    onChangeText={(text) => dispatch(updateField({ field: 'firstName', value: text }))}
                />
                <Image source={require('../assets/signupA/Group.png')} style={styles.icon} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputWithIcon}
                    placeholder="Last Name"
                    value={authState.lastName}
                    onChangeText={(text) => dispatch(updateField({ field: 'lastName', value: text }))}
                />
                <Image source={require('../assets/signupA/Group.png')} style={styles.icon} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.smallInput}
                    placeholder="Country_code"
                    inputCount={3}
                    keyboardType="numeric"
                    value={authState.country_code}
                    onChangeText={(text) => dispatch(updateField({ field: 'country_code', value: text }))}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mobile Number"
                    keyboardType="numeric"
                    maxLength={10}
                    value={authState.mobileNumber}
                    onChangeText={(text) => dispatch(updateField({ field: 'mobileNumber', value: text }))}
                />
                <Image source={require('../assets/signupA/gps.png')} style={styles.icon} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputWithIcon}
                    placeholder="Password"
                    secureTextEntry
                    value={authState.password}
                    onChangeText={(text) => dispatch(updateField({ field: 'password', value: text }))}
                />
                <Image source={require('../assets/signupA/t.png')} style={styles.icon} />
            </View>
            <Text style={styles.termsText}>By signing up, you agree to our</Text>
            <View style={styles.privacyContainer}>
                <TouchableOpacity style={styles.touchablePrivacy}>
                    <Text style={styles.privacyText}>Terms & Conditions</Text>
                </TouchableOpacity>
                <Text>and</Text>
                <TouchableOpacity style={styles.touchablePrivacy}>
                    <Text style={styles.privacyText}>   Privacy Policy</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.continueContainer}>
                <TouchableOpacity
                    style={styles.continueButton}
                    onPress={handleFormSubmit}
                >
                    <Text style={styles.continueButtonText} onPress={() => handleFormSubmit()}>Continue</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={styles.lastb}>Joined us before? <Text style={styles.loginLink} onPress={() => navigation.navigate("login", { type: 'inside', email: authState.email, password: authState.password, token: authState.token })}>Log in</Text></Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

export default SignupA;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    imageA: {
        marginLeft: 25,
        marginTop: 45,
    },
    imageB: {
        marginTop: 20,
        marginRight: 220,
    },
    text: {
        marginRight: 100,
        marginTop: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    button: {
        flex: 1,
        height: 50,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
    leftButton: {
        borderRightWidth: 0,
        backgroundColor: 'black',
    },
    rightButton: {
        borderLeftWidth: 0,
    },
    buttonText1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    buttonText2: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    inputContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        paddingHorizontal: 10,
    },
    smallInput: {
        width: 50,
        height: 40,
        fontSize: 16,
        paddingHorizontal: 10,
    },
    inputWithIcon: {
        flex: 1,
        height: 40,
        fontSize: 16,
        paddingHorizontal: 10,
        paddingRight: 30,
    },
    icon: {
        position: 'absolute',
        right: 10,
    },
    termsContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    termsText: {
        fontSize: 16,
        marginBottom: 10,
        marginLeft: 18,
        marginTop: 10,
    },
    privacyContainer: {
        flexDirection: 'row',
        marginBottom: 15,
        marginLeft: 10

    },
    touchablePrivacy: {
        //padding: 5,
        marginRight: 10,
        borderWidth: 0,
    },
    privacyText: {
        fontSize: 16,
        color: 'red',

    },
    continueContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    continueButton: {
        backgroundColor: '#FE4D4D',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 5,
        alignSelf: 'center',
    },
    continueButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    lastb: {
        marginLeft: 110,
        color: 'black',
        marginBottom: 20,
    },
    loginLink: {
        color: '#333',
        fontWeight: 'bold',
    },
});

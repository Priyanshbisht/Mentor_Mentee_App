import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const SignupA = ({navigation}) => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={require('../assets/signupB/abc.png')} style={styles.imageA} />
                <Image source={require('../assets/signupA/S.png')} style={styles.imageB} />
                <Text style={styles.text}>Hello, I guess you are new around here.</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.leftButton]}>
                    <Text style={styles.buttonText1}onPress={() => navigation.navigate("signpA")}>Mentor</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.rightButton]}>
                    <Text style={styles.buttonText2}>Mentee</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputWithIcon}
                    placeholder="Referral Code"
                />
                <Image source={require('../assets/signupA/rect355.png')} style={styles.icon} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputWithIcon}
                    placeholder="Email ID"
                />
                <Image source={require('../assets/signupA/Vec.png')} style={styles.icon} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputWithIcon}
                    placeholder="First Name"
                />
                <Image source={require('../assets/signupA/Group.png')} style={styles.icon} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputWithIcon}
                    placeholder="Last Name"
                />
                <Image source={require('../assets/signupA/Group.png')} style={styles.icon} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.smallInput}
                    placeholder="+91"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mobile Number"
                />
                <Image source={require('../assets/signupA/gps.png')} style={styles.icon} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputWithIcon}
                    placeholder="Password"
                    secureTextEntry
                />
                <Image source={require('../assets/signupA/t.png')} style={styles.icon} />
            </View>
             <Text style={styles.termsText}>By signing up, you agree to our</Text>
                <View style={styles.privacyContainer}>
                    <TouchableOpacity style={styles.touchablePrivacy}>
                        <Text style={styles.privacyText}>Terms & Conditions</Text>
                    </TouchableOpacity>
                    <Text style={styles.bet}>and</Text>
                    <TouchableOpacity style={styles.touchablePrivacy}>
                        <Text style={styles.privacyText}>Privacy Policy</Text>
                    </TouchableOpacity>
                </View>
        
            <View style={styles.continueContainer}>
                <TouchableOpacity style={styles.continueButton}>
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={styles.lastb}>Joined us before? <Text style={styles.loginLink} onPress={() => navigation.navigate("login")}>Log in</Text></Text>
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
        backgroundColor: 'white',
    },
    rightButton: {
        borderLeftWidth: 0,
        backgroundColor: 'black',
    },
    buttonText1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    buttonText2: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
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
        marginLeft: 17,
    },
    privacyContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        marginLeft: 16,
        
    },
    touchablePrivacy: {
       // padding: 5,
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
    bet:{
        marginRight:10,
    },
});

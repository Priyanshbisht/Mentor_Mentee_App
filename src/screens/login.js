import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, setLoading, selectEmail, selectPassword, setLoggedIn  } from '../reduxToolkit/login/loginSlice';
import { LOGIN } from '../Api';

const Login = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.login);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Use the selectors to get the email and password from the Redux state
    const storedEmail = useSelector(selectEmail);
    const storedPassword = useSelector(selectPassword);

    useEffect(() => {
        SplashScreen.hide();

        // Set email and password from stored Redux state
        setEmail(storedEmail);
        setPassword(storedPassword);
    }, []);

    const handleLoginSubmit = async () => {
        if (!email || !password) {
            return Alert.alert('Please fill all the inputs.');
        }

        dispatch(setLoading(true));

        const data = {
            "email": email,
            "password": password,
            "role": 1,
        };

        try {
            const response = await LOGIN(data, authState.token);
            dispatch(setLoading(false));
            console.log('API Response:', response);
        

            if (response.messageID === 200) {
                dispatch(setLoggedIn(true));
                console.log('Response email:', response.data.email);

                await AsyncStorage.setItem('isLoggedin', 'true');

                // Update the email and password fields in the Redux state
                dispatch(updateField({ field: 'email', value: email }));
                dispatch(updateField({ field: 'password', value: password }));

                // Commented out navigation for now, as it might be causing the unexpected response issue
                // navigation.navigate("Connecting", { token: authState.token, storedEmail: email, password: password, type: 'inside' });

                await AsyncStorage.setItem('storedEmail', email);
            } else {
                Alert.alert("Enter the Valid email and Password.");
            }
        } catch (error) {
            dispatch(setLoading(false));
            console.error('Error', error);
        
            // Log the error response to understand the issue
            console.log('Error Response:', error.response);
        
            Alert.alert('Something went wrong!!');
        }
    };
    return (
        <ScrollView>
            <Image source={require('../assets/login/G93.png')} style={styles.image} />
            <Image source={require('../assets/login/Lli.png')} style={styles.image} />
            <Text style={styles.text}>Welcome Back, you've been missed!</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email Id"
                    value={email}
                    onChangeText={(text) => setEmail(text)} />
                <Image source={require('../assets/login/V.png')} style={styles.icon} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Image source={require('../assets/login/G.png')} style={styles.icon} />
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.rememberContainer}>
                    <Image source={require('../assets/login/Rect.png')} style={styles.picture} />
                    <Text style={styles.rememberText}>Keep me signed up</Text>
                </View>
                <TouchableOpacity style={styles.fpass}>
                    <Text style={styles.forgotText} onPress={() => navigation.navigate("forgot_pass", { token: route.params.token, storedEmail: storedEmail, type: 'inside' })}>Forgot password?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => handleLoginSubmit()}>Log in</Text>
            </TouchableOpacity>

            <View style={styles.rowContainer}>
                <Text style={styles.sign}>Don't have an account yet?</Text>
                <TouchableOpacity style={styles.add}>
                    <Text style={styles.addition} onPress={() => navigation.navigate("signpA")}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    image: {
        marginLeft: 40,
        marginTop: 50,
    },
    text: {
        marginLeft: 40,
        marginTop: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 40,
        marginVertical: 10,
        paddingHorizontal: 10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
    icon: {
        marginLeft: 5,
    },
    input: {
        flex: 1,
    },
    button: {
        backgroundColor: '#FE4D4D',
        borderRadius: 5,
        marginHorizontal: 30,
        marginVertical: 10,
        marginTop: 80,

    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        height: 40,
        borderRadius: 10,
        top: 8,

    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 40,
        marginTop: 10,
    },
    rememberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    picture: {
        marginRight: 5,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 40,
        marginTop: 10,
    },
    sign: {
        marginRight: 5,
    },
    add: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    addition: {
        color: 'black',
        fontWeight: 'bold',
    },
});

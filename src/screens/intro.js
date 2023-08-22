import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import SplashScreen from 'react-native-splash-screen';

const Intro = ({navigation}) => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.centerContainer}>
                <Image source={require('../assets/intro/Group89.png')} style={styles.image}></Image>
            </View>
            <View style={styles.tab}>
                <Image source={require('../assets/intro/Gm.png')}></Image>
                <Text style={styles.text}>Welcome to our mentorship platform</Text>
            </View>
            <View style={styles.photo}>
                <Image source={require('../assets/intro/Group90.png')}></Image>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.buttonText1} onPress={() => navigation.navigate("signpA")}>skip</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.buttonText2} onPress={() => navigation.navigate("intro2")}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    centerContainer: {
        flex: 1,
        marginTop: 60,
    },
    tab: {
        marginBottom: 30,
        marginRight: 100,
    },
    text: {
        marginTop: 15,
    },
    photo: {
        marginRight: 250,
        marginTop: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:25,
    },
    button1: {
        backgroundColor: "white",
        borderRadius: 5,
        marginRight: 200,
        marginTop: 15,
    },

    button2: {
        backgroundColor: "#FE4D4D",
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop:23,
        marginBottom: 20,
        width: 90,
    },
    buttonText1: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    buttonText2: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 9,
    },
});

export default Intro;

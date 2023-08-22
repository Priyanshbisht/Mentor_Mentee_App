
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Intro2 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.centerContainer}>
                <Image source={require('../assets/intro2/Group91.png')} style={styles.image}></Image>
            </View>
            <View style={styles.tab}>
                <Image source={require('../assets/intro2/Fbm.png')}></Image>
                <Text style={styles.text}>We provide you with access to professionals,</Text>
                <Text style>who would guide in your journey to success</Text>
            </View>
            <View style={styles.photo}>
                <Image source={require('../assets/intro2/Group69.png')}></Image>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.buttonText1} onPress={() => navigation.navigate("signpA")}>skip</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.buttonText2} onPress={() => navigation.navigate("intro3")}>Next</Text>
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
        marginRight: 50,
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
        marginBottom: 20,
    },

    button2: {
        backgroundColor: "#FE4D4D",
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop:23,
        marginBottom:20,
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

export default Intro2;

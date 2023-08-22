import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { selectEmail, selectPassword } from '../reduxToolkit/login/loginSlice'; // Update path as needed


const Hello = ({ navigation, route }) => {
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
    const storedEmail = useSelector(selectEmail);
  const [selectedIndex, setSelectedIndex] = useState(0);
//   const [storedEmail, setStoredEmail] = useState('');
  const [storedPassword, setStoredPassword] = useState('');

  const handleSingleIndexSelect = (index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    SplashScreen.hide();
    // Retrieve the stored email and password from AsyncStorage
    const retrieveData = async () => {
      try {
        const email = await AsyncStorage.getItem('userEmail');
        const password = await AsyncStorage.getItem('userPassword');
        setStoredEmail(storedEmail);
        setStoredPassword(password);
        console.log('stored email', email);
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
      }
    };

    retrieveData();
  }, []);
  
  


    return (
        <ScrollView style={styles.main}>
        {isLoggedIn && (
               <>
            <View style={styles.container}>
                <Image source={require('../assets/hello/E.png')} style={styles.image1} />
                <Text style={styles.title}>Hello, {storedEmail}!</Text>
                <Image source={require('../assets/hello/N.png')} style={styles.image2} />
            </View>
            <View style={styles.box}>
                <Image source={require('../assets/hello/Search.png')} style={styles.image3} />
                <TextInput
                    placeholder='Search'
                />
            </View>
            <View style={styles.boxContainer}>
                <Image source={require('../assets/hello/G2.png')} style={styles.image4} />
                <Image source={require('../assets/hello/Re30.png')} style={styles.image5} />
                <Image source={require('../assets/hello/G121.png')} style={styles.image6} />
                <Image source={require('../assets/hello/G122.png')} style={styles.image7} />
            </View>
            <View style={styles.secondContainer}>
                <Image source={require('../assets/hello/G113.png')} style={styles.image8} />
                <Image source={require('../assets/hello/G112.png')} style={styles.image9} />
                <Image source={require('../assets/hello/MG.png')} style={styles.image10} />
            </View>
            <View style={styles.textbox}>
                <Text style={styles.text1}>Number of Mentees who signed up</Text>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.container1}>
                    <Text style={styles.write}>21</Text>
                    <Text style={styles.next}>In Past Day</Text>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.write}>87</Text>
                    <Text style={styles.next}>In Past Week</Text>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.write}>21</Text>
                    <Text style={styles.next}>In Past Month</Text>
                </View>
            </View>
            {/* <View style={styles.loginButtonContainer}>
        <Button
          title="Go to Login Page"
          onPress={() => {
            navigation.navigate("Login", {
              email: route.params.email,
              password: storedPassword,
            });
           
          }}
        />
      </View> */}

            <Text style={styles.down}>Total Number of Sessions</Text>
            <View style={styles.maintab}>
                <SegmentedControlTab
                    values={['Current', 'Past', 'Upcoming']}
                    tabTextStyle={styles.textstyle}
                    selectedIndex={selectedIndex}
                    tabStyle={styles.tabStyle}
                    activeTabStyle={styles.activeTabStyle}
                    onTabPress={handleSingleIndexSelect}
                    
                />
            </View>

            <Text style={styles.tail}>10 Current Sessions</Text>
            <View>
                <Image source={require('../assets/hello/G9.png')} style={styles.image11} />
            </View>
            {/* <View style={styles.last}>
                <Image source={require('../assets/hello/dashboard.png')} style={styles.image12} />
                <Image source={require('../assets/hello/G127.png')} style={styles.image13} />
                <Image source={require('../assets/hello/G131.png')} style={styles.image14} />
                <Image source={require('../assets/hello/Chat.png')} style={styles.image15} />
            </View> */}
            </>
      )}
        </ScrollView>
    )
}

export default Hello;

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
    },
    container: {
        flexDirection: 'row',
    },
    image1: {
        marginLeft: 20,
        marginTop: 30,
    },
    title: {
        marginTop: 30,
        marginLeft: 15,
    },
    image2: {
        marginTop: 20,
        marginLeft: 150,
    },
    box: {
        backgroundColor: '#f0f8ff',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 10,

    },
    image3: {
        marginLeft: 20,
        marginTop: 15,
        right: 5,

    },
    image4: {
        marginLeft: 40,
        marginTop: 60,
        bottom: 30,
    },
    image5: {
        position: 'absolute',
        marginLeft: 25,
        bottom: 20,
    },

    boxContainer: {
        marginTop: 40,
        borderWidth: 1,
        marginHorizontal: 21,
        borderRadius: 10,
        flexDirection: 'row',
    },

    image6: {
        marginLeft: 30,
        marginTop: 13,
    },

    image7: {
        marginTop: 40,
        marginLeft: 20,
    },
    secondContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff0f5',
        marginHorizontal: 18,
        marginTop: 25,
        paddingBottom: 15,
    },
    image8: {
        marginTop: 20,
        marginLeft: 20,
    },
    image9: {
        marginTop: 10,
        marginLeft: 68,
    },
    image10: {
        position: 'absolute',
        left: 22,
        top: 10,
    },
    textbox: {
        marginLeft: 20,
        marginTop: 20,
    },
    text1: {
        fontSize: 22,
        color: 'black',
    },
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30,
    },
    container1: {
        backgroundColor: '#faebd7',
        padding: 10,
        borderRadius: 10,
    },
    container2: {
        backgroundColor: '#f0fff0',
        padding: 10,
        borderRadius: 10,
    },
    container3: {
        backgroundColor: `#b0c4de`,
        padding: 10,
        borderRadius: 10,
    },
    write: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'black',
    },
    next: {
        fontWeight: 'bold',
        fontSize: 12,
    },
    down: {
        marginTop: 20,
        marginLeft: 30,
        fontSize: 22,
        color: 'black',
    },
    maintab: {
        marginHorizontal: 20,
        marginTop: 30,
        backgroundColor: '#F5F5F5',
        padding: 20,
        borderRadius: 10,
    },
    textstyle: {
        fontSize: 16,
        color: 'black',
    },
    tabStyle: {
        backgroundColor: '#F5F5F5',
        borderColor: '#F5F5F5',
    },
    activeTabStyle: {
        backgroundColor: 'black',
        height: 50,
        borderRadius: 10,
    },

    tail: {
        marginTop: 30,
        marginLeft: 20,
        color: 'black',
        fontSize: 16,
    },
    image11: {
        marginTop: 20,
        marginLeft: 34,
    },
    image12: {
        marginVertical: 15,
        marginLeft: 30,
    },
    last: {
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    image13: {
        marginVertical: 15,

    },
    image14: {
        marginVertical: 15,
    },
    image15: {
        marginVertical: 15,
    },
    loginButtonContainer: {
        margin: 20,
      },
})
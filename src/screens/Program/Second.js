import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, FlatList, TouchableOpacity, Button } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Calendar } from 'react-native-calendars';


const Second = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const data = [
    {
      id: '1',
      title: 'Aliqua id fugiat nostr...',
      image: require('../../assets/Program/Rect102.png'), // Replace with your image source
      date: '20-21-2022',
      time: '3:50 PM',
      price: '$14.99',
      totalSessions: '12',
    },
    {
      id: '2',
      title: 'Career Seeker',
      image: require('../../assets/Program/Rect090.png'), // Replace with your image source
      date: '20-21-2022',
      time: '3:50 PM',
      price: '$14.99',
      totalSessions: '12',

    },
    {
      id: '3',
      title: 'Career Seeker',
      image: require('../../assets/Program/rect6888.png'), // Replace with your image source
      date: '20-21-2022',
      time: '3:50 PM',
      price: '$14.99',
      totalSessions: '12',
    },
   
  ];
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const renderProgram = ({ item }) => {
    return (
      <TouchableOpacity style={styles.programContainer} onPress={() => navigation.navigate('Fourth')}>
        <Image source={item.image} style={styles.programImage} />
        <View style={styles.programDetails}>
          <Text style={styles.programTitle}>{item.title}</Text>
          <View>
            <Text>{item.date}</Text>
            <TouchableOpacity style={styles.calendarIcon} onPress={toggleCalendar}>
              {/* <Image source={require('../../assets/Program/c.png')} style={styles.calendarIconImage} /> */}
            </TouchableOpacity>
          </View>
          <Text>{item.time}</Text>
          <Text>Price: {item.price}</Text>
          <Text>Total Sessions: {item.totalSessions}</Text>
          {showCalendar && selectedDate === item.date && (
            <Calendar
              style={styles.calendar}
              onDayPress={(day) => setSelectedDate(day.dateString)}
              markedDates={{
                [selectedDate]: { selected: true, selectedColor: 'blue' },
              }}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };
  const toggleCalendar = () => {
    setShowCalendar((prevShowCalendar) => !prevShowCalendar);
  };



  return (
    <ScrollView>
      {/* Header */}
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Image source={require('../../assets/Program/E.png')} style={{ marginLeft: 15 }} />
        <Text style={{ marginLeft: 20, fontSize: 16, fontWeight: 'bold', color: 'black' }}>Programs</Text>
        <Image source={require('../../assets/Program/N.png')} style={{ marginLeft: 190, bottom: 10 }} />
      </View>

      {/* Search Bar */}
      <View style={{ flexDirection: 'row', backgroundColor: 'grey', marginHorizontal: 20, borderRadius: 15 }}>
        <Image source={require('../../assets/Program/Search.png')} style={{ top: 16, marginLeft: 10 }} />
        <TextInput placeholder='Search' styles={{ color: 'black' }} />
      </View>

      {/* Career Consultation */}
      <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Career Consultation</Text>
        <Image source={require('../../assets/Program/Filter.png')} style={{ marginLeft: 160, top: 5 }} />
      </View>

      {/* FlatList of Programs */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderProgram}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Third')}>
        <Text style={styles.addButtonTitle}>Add New Program</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
};
export default Second;

const styles = StyleSheet.create({
  programContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  programImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  programDetails: {
    marginLeft: 10,
    flex: 1,
  },
  programTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  addButton: {
    backgroundColor: '#F64D51',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 20,
  },
  addButtonTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  calendar: {
    marginTop: 10,
  },

  calendarIcon: {
    width: 20,
    height: 20,
  },

  calendarIconImage: {
    width: 40,
    height: 40,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dateText: {
    marginRight: 10,
  },
});
//   openButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
//   openButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },

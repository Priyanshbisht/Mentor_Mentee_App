import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Calendar } from 'react-native-calendars';
import { TextInput } from 'react-native-paper'
import Second from './Second';

const Third = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedExpiryDate, setSelectedExpiryDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleAdd = () =>{
   navigation.navigate(Second);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text style={{ marginLeft: 30, top: 10 }}>Add New Program</Text>
        <Image source={require('../../assets/Program/N.png')} style={{ marginLeft: 180 }} />
      </View>
      <View>
        <Image source={require('../../assets/Program/Group35.png')} style={{ marginLeft: 30, position: 'relative', marginTop: 50, left: 80 }} />
        <Image source={require('../../assets/Program/Rectangle16.png')} style={{ marginLeft: 30, position: 'absolute', marginTop: 30 }} />
      </View>
      <View style={styles.main}>
        <View>
          <TextInput
           label={'Program Name'}
           style={styles.box}
           mode="outlined"      
          />
        </View>
        <View>
          <TextInput
            label={' Mentorship Mode'}
            style={styles.box}
            mode="outlined"      
          />
        </View>
        <View>
          <TextInput
         label={'Years of Experience'}
         style={styles.box}
         mode="outlined"      
          />
        </View>
        <View>
          <TextInput
           label={'Start Date'}
           style={styles.box}
           mode="outlined"      
            value={selectedStartDate ? selectedStartDate.dateString : ''}
            onFocus={() => setShowCalendar(false)}
          />
          <TouchableOpacity style={styles.calendarIcon} onPress={() => setShowCalendar(true)}>
            <Image source={require('../../assets/Program/calendar.png')} />
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            label={'Price'}
            style={styles.box}
            mode="outlined"      
          />
        </View>
        <View>
          <TextInput
          label={'Mentee Allowed'}
          style={styles.box}
          mode="outlined"      
          />
        </View>
        <View>
          <TextInput
         label={'Mentor Availability'}
         style={styles.box}
         mode="outlined"      
          />
        </View>
        <View>
          <TextInput
           label={'Program Expiry Date'}
           style={styles.box}
           mode="outlined"      
            value={selectedExpiryDate ? selectedExpiryDate.dateString : ''}
            onFocus={() => setShowCalendar(false)}
          />
          <TouchableOpacity style={styles.calendarIcon} onPress={() => setShowCalendar(true)}>
            <Image source={require('../../assets/Program/calendar.png')} />
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            label={'Upload Skill Certificate'}
            style={styles.box}
            mode="outlined"      
          />
        </View>
        <View>
          <TextInput
            label={'Program Description'}
            style={styles.bigbox}
            mode="outlined"      
          />
        </View>
      </View>
      {showCalendar && (
        <Calendar
          current={selectedStartDate ? selectedStartDate.dateString : undefined}
          onDayPress={(day) => {
            setShowCalendar(true);
            setSelectedStartDate(day);
            setSelectedExpiryDate(day);
            setShowCalendar(false);
          }}
          markedDates={{
            [selectedStartDate ? selectedStartDate.dateString : '']: { selected: true, marked: true, selectedColor: 'blue' },
          }}
        />
      )}
      <View>
        <TouchableOpacity style={styles.addButton} onPress={() => handleAdd()}>
          <Text style={styles.addButtonTitle}>Add Program</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 40,
    marginLeft: 30,
  },
  box: {
    borderColor: '#F3F3F3',
    borderWidth: 1,
    marginTop: 20,
    marginRight: 30,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  bigbox: {
    height: 150,
    marginTop: 20,
    borderRadius: 10,
    // paddingHorizontal: 10,
    // paddingTop: 10,
    marginBottom: 20,
    marginRight: 30,
  
  },
  addButton: {
    backgroundColor: '#F64D51',
    paddingVertical: 15,
    paddingHorizontal: 120,
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 20,
  },
  calendarIcon: {
    position: 'absolute',
    top: 35,
    right: 40,
  },
  addButtonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Third;

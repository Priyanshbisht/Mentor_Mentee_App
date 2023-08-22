import React, { useEffect, useState } from 'react';
import {
  StyleSheet, Text, View, ScrollView, Image, FlatList, TouchableOpacity} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import SegmentedControlTab from 'react-native-segmented-control-tab';

const sessionsData = [
  {
    id: '1',
    title: '1. Introduction',
    about: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt.',
    image: require('../../assets/Program/Rectangle20.png'),
    duration: 'Session duration',
    date: 'Date',
    time: 'Scheduled Time'
  },
  {
    id: '2',
    title: '2. Deserunt mollit',
    about: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt.',
    image: require('../../assets/Program/Rect007.png'),
    duration: 'Session duration',
    date: 'Date',
    time: 'Scheduled Time'
  },
  {
    id: '3',
    title: '3. Deserunt mollit',
    about: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt.',
    image: require('../../assets/Program/Rect777.png'),
    duration: 'Session duration',
    date: 'Date',
    time: 'Scheduled Time'
  },
];

const Fourth = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const [activeTab, setActiveTab] = useState(0);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.sessionItem}>
      <View style={{ flexDirection: 'row' }}>
        <Image source={item.image} style={styles.sessionImage} />
        <View>
          <Text style={styles.sessionTitle}>{item.title}</Text>
          <Text style={styles.sessionInfo}>{item.about}</Text>
        </View>
      </View>
      <View style={styles.info}>
        <Text>{item.duration}</Text>
        <Text>{item.date}</Text>
        <Text>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
        <Text style={{ marginLeft: 30, top: 10, fontWeight: 'bold', fontSize: 16 }}>Programs</Text>
        <Image source={require('../../assets/Program/Notification.png')} style={{ marginRight: 20 ,top:15 }} />
      </View>
      <View>
        <Image source={require('../../assets/Program/Rectangle3x.png')} style={{ marginLeft: 30, marginTop: 30 }} />
        <Text style={{ marginLeft: 30, marginTop: 20, fontWeight: 'bold' }}>Aliqua id fugiat nostrud irure</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../../assets/Program/calendar.png')} style={{ marginLeft: 25, marginTop: 20 }} />
          <Text style={{ marginLeft: 10, marginTop: 20 }}>02-21-2022 | 03:50 PM</Text>
          <Text style={{ marginRight: 120, marginTop: 20, flexDirection: 'row-reverse', fontWeight: 'bold', fontSize: 16 }}>$14.99</Text>
        </View>
      </View>
      <View style={styles.segmentedTabs}>
        <SegmentedControlTab
          values={['Sessions', 'More']}
          selectedIndex={activeTab}
          onTabPress={(index) => setActiveTab(index)}
          tabsContainerStyle={styles.tabsContainer}
          tabStyle={styles.tab}
          activeTabStyle={styles.activeTab}
          tabTextStyle={styles.tabText}
          activeTabTextStyle={styles.activeTabText}
        />
      </View>
      {activeTab === 0 && (
        <FlatList
          data={sessionsData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={styles.box}
        />
      )}
      {activeTab === 1 && (
        <ScrollView>
          <Text style={{ marginLeft: 20, marginTop: 20, fontWeight: 'bold' }}>Program Description</Text>
          <Text style={styles.para}>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt.</Text>
          <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
            <View>
              <Text>Mentorship Mode</Text>
              <Text>Online</Text>
            </View>
            <View style={{ marginLeft: 30 }}>
              <Text>Availability</Text>
              <Text>24*7</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 30 }}>
            <View>
              <Text>Mentee Allowed</Text>
              <Text>150</Text>
            </View>
            <View style={{ marginLeft: 30 }}>
              <Text>Mentee registered</Text>
              <Text>150</Text>
            </View>
          </View>
          <View style={styles.inputBox}>
            <TouchableOpacity>
              <Image source={require('../../assets/Program/xxx.png')} style={{ top: 16, left: 10, position: 'relative' }}></Image>
              <Image source={require('../../assets/Program/Stroke5.png')} style={{ position: 'relative', left: 333 }}></Image>
              <Text style={styles.inputs}>Add new sessions</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputBox}>
            <TouchableOpacity>
              <Image source={require('../../assets/Program/zzz.png')} style={{ top: 16, left: 10, position: 'relative' }} />
              <Image source={require('../../assets/Program/Stroke5.png')} style={{ position: 'relative', left: 333 }}></Image>
              <Text style={styles.inputs}>Registered Mentees</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputBox}>
            <TouchableOpacity>
            <Image source={require('../../assets/Program/ccc.png')} style={{ top: 16, left: 10, position: 'relative' }} />
            <Image source={require('../../assets/Program/Stroke5.png')} style={{ position: 'relative', left: 333 }}></Image>
            <Text style={styles.inputs}>Chat with Mentees</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputBox}>
            <TouchableOpacity>
            <Image source={require('../../assets/Program/zzzz.png')} style={{ top: 16, left: 10, position: 'relative' }} />
            <Image source={require('../../assets/Program/Stroke5.png')} style={{ position: 'relative', left: 333 }}></Image>
            <Text style={styles.inputs}>Completed Sessions</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputBox}>
            <TouchableOpacity>
            <Image source={require('../../assets/Program/qqq.png')} style={{ top: 16, left: 10, position: 'relative' }} />
            <Image source={require('../../assets/Program/Stroke5.png')} style={{ position: 'relative', left: 333}}></Image>
            <Text style={styles.inputs}>Raise a Dispute</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputBox}>
            <TouchableOpacity>
            <Image source={require('../../assets/Program/aaaa.png')} style={{ top: 16, left: 10, position: 'relative' }} />
            <Image source={require('../../assets/Program/Stroke5.png')} style={{ position: 'relative', left: 333 }}></Image>
            <Text  style={styles.inputs}>View Ratings</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonTitle}>Edit Program</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </ScrollView>
  );
};

export default Fourth;

const styles = StyleSheet.create({
  box: {
    margin: 20,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  sessionItem: {
    marginTop: 10,
    borderWidth: 1,
  },
  sessionTitle: {
    marginLeft: 10,
    marginTop: 20,
  },
  sessionImage: {
    margin: 20,
  },
  segmentedTabs: {
    marginRight: 160,
    marginLeft: 20,
    marginTop: 20,
  },
  tab: {
    borderBottomColor: 'black',
  },
  activeTab: {
    backgroundColor: 'white',
    borderBottomWidth: 2,
  },
  tabText: {
    color: 'black',
  },
  activeTabText: {
    color: 'black',
  },
  sessionInfo: {
    marginTop: 50,
    marginRight: 140,
    bottom: 40,
  },
  para: {
    margin: 20,
  },
  inputBox: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  inputs: {
    flex: 1,
    marginLeft: 60,
    color: 'black',
    bottom: 18,
  },
  addButton: {
    backgroundColor: '#F64D51',
    paddingVertical: 15,
    paddingHorizontal: 120,
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 20,
  },
  addButtonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

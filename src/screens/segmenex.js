import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';

const Segmenex = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleSingleIndexSelect = (index) => {
        setSelectedIndex(index);
    };
  return (
    <SafeAreaView style ={styles.container}>
         <View>
         <Text style={styles.headerText}>
          Simple Segmented Control with Single Selection
        </Text>
        <SegmentedControlTab
          values={['Segment One', 'Segment two','Segment three']}
          selectedIndex={selectedIndex}
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          onTabPress={handleSingleIndexSelect}
        />
         </View>
    </SafeAreaView>
  );
};

export default Segmenex;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
        padding: 10,
      },
    activeTabStyle: {
        backgroundColor: 'red',
      },
      headerText: {
        padding: 8,
        fontSize: 14,
        color: '#444444',
        textAlign: 'center',
      },
      tabStyle: {
        borderColor: '#D52C43',
      },
})
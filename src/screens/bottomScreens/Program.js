import React, { useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList , StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const Program = ({ navigation }) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const data = [
    { key: 'item1', image: require('../../assets/Program/G420.png') },
    { key: 'item2', image: require('../../assets/Program/Group48.png') },
    { key: 'item3', image: require('../../assets/Program/Group00.png') },
    { key: 'item4', image: require('../../assets/Program/Group100.png') },
    // ... add more items as needed
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Second')}>
      <Image source={item.image} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Image source={require('../../assets/Program/E.png')} style={{ marginLeft: 15 }} />
        <Text style={{ marginLeft: 20, fontSize: 16, fontWeight: 'bold', color: 'black' }}>Programs</Text>
        <Image source={require('../../assets/Program/N.png')} style={{ marginLeft: 190, bottom: 10 }} />
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: 'grey', marginHorizontal: 20, borderRadius: 15 }}>
        <Image source={require('../../assets/Program/Search.png')} style={{ top: 16, marginLeft: 10 }} />
        <TextInput placeholder='Search' style={{ color: 'black' }} />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{ margin: 30 }}
      />
    </View>
  );
};

export default Program;

const styles = StyleSheet.create({
  image: {
    marginTop: 20,
  },
});

import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-paper'
import React from 'react'

const Fifth = () => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
                <Text style={{ marginLeft: 40, fontSize: 16, fontWeight: 'bold' }}>Edit Programs</Text>
                <Image source={require('../../assets/Program/Notification.png')} style={{ marginRight: 20, top: 7, }} />
            </View>
            <View>
                <Image source={require('../../assets/Program/Rectangle3x.png')} style={{ marginLeft: 30, marginTop: 30 }} />
                <Image source={require('../../assets/Program/Play.png')} style={{ marginLeft: 30, marginTop: 30, position: 'relative', left: 270, bottom: 50 }} />
            </View>
            <View style={{ marginBottom: 20, }}>
                <View>
                     
                    <TextInput
                        label={'Program Name'}
                        style={styles.inputs}
                        mode="outlined"      
                    />
                </View>
                <View>
        
                    <TextInput
                        label={'Mentorship'}
                        style={styles.inputs}
                        mode="outlined"      
                    />
                </View>
                <View>
                <Image source={require('../../assets/Program/Vector4.png')} style={{position:'relative',left:350, bottom:27,}}/>
                    <TextInput
                        placeholder='Year of Experience'
                        style={styles.inputs}
                    />
                </View>
                <View>
                    <Image source={require('../../assets/Program/Vector4.png')} style={{position:'relative',left:350, bottom:27,}}/>
                    <TextInput
                        placeholder='Start Date'
                        style={styles.inputs}
                    />
                </View>
                <View>
                <Image source={require('../../assets/Program/Calen.png')} style={{position:'relative',left:340, bottom:40,}}/>
                    <TextInput
                        placeholder='Price'
                        style={styles.inputs}
                    />
                </View>
                <View>
                    <TextInput
                        placeholder='Mentee Allowed'
                        style={styles.inputs}
                    />
                </View>
                <View>
                    <TextInput
                        placeholder='Availability'
                        style={styles.inputs}
                    />
                </View>
                <View>
                    <TextInput
                        placeholder='Program Description'
                        style={styles.biginputs}
                    />
                </View>
            </View>
            <View>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonTitle}>Edit Program</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
    )
}

export default Fifth

const styles = StyleSheet.create({
    inputs: {
        backgroundColor: '#F0F0F0',
        marginHorizontal: 20,
        marginTop: 20,
    },
    biginputs: {
        backgroundColor: '#F0F0F0',
        height: 150,
        marginTop: 20,
        paddingHorizontal: 10,
        paddingTop: 10,
        marginBottom: 20,
        textAlignVertical: 'top',
        marginHorizontal: 20,

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
})
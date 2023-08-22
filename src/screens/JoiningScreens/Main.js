import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTabStack from '../../navigators/bottomNavigator'

const Main = () => {
    return (
        <View style={{flex:1}}>
        <BottomTabStack />
        </View>
    )
}

export default Main;

const styles = StyleSheet.create({})
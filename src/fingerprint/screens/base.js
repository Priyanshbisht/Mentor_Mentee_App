import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Base = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Welcome to Home</Text>
    <Text style={styles.subtitle}>You have successfully authenticated with biometrics!</Text>
  </View>
  )
}

export default Base

const styles = StyleSheet.create({})
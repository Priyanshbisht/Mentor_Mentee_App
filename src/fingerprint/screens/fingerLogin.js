import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Biometrics from 'react-native-biometrics';

const FingerLogin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleBiometricLogin = () => {
    Biometrics.simplePrompt('Authenticate to proceed')
      .then((result) => {
        if (result.success) {
          // Biometric authentication succeeded, navigate to the second page (Home)
          navigation.navigate('base');
        } else {
          // Biometric authentication failed or was canceled
          console.log('Biometric authentication failed:', result.error);
        }
      })
      .catch((error) => {
        console.log('Error during biometric authentication:', error);
      });
  };

  const handleLogin = () => {
    // Implement your login logic here
    // For simplicity, let's just navigate to the second page (Home) after login
    navigation.navigate('base');
    handleBiometricLogin();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../fingerprint/assets/fingerLogin/one.jpeg')} // Replace with your login image path
        style={styles.image}
      />
      <Text style={styles.heading}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FingerLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

import React from 'react';
import { Text, View, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { welcomestyle } from '../style/WelcomeScreenStyle';

// HANDLE FUNCTIONS

// login function
const handleLogin = () => {
  Alert.alert('login');
};

// register function
const handleRegister = () => {
  Alert.alert('register');
};

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground 
      source={require('../assets/landingbg.jpg')} // Update the path to your image
      style={welcomestyle.container}
      resizeMode="cover" // You can change this to 'contain' or other options as needed
    >
      {/* Title Section */}
      <View style={welcomestyle.titleContainer}>
        <Text style={welcomestyle.titleText2}>VLSQZ</Text>
        <Text style={welcomestyle.subtext}>Catering Services</Text>
      </View>

      {/* login button */}
      <TouchableOpacity
        style={welcomestyle.buttonLogin}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={welcomestyle.buttonTextLogin}>Login</Text>
      </TouchableOpacity>

      {/* Register button */}
      <View style={welcomestyle.buttonContainer}>
        <TouchableOpacity
          style={welcomestyle.button}
          onPress={() => navigation.navigate('RegisterScreen')}
        >
          <Text style={welcomestyle.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
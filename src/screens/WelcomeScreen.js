import React from 'react';
import { Text, View, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { welcomestyle } from '../style/WelcomeScreenStyle';


const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground 
      source={require('../assets/landingbg.jpg')} 
      style={welcomestyle.container}
      resizeMode="cover"
    >
      {/* Title Section */}
      <View style={welcomestyle.titleContainer}>
        <Text style={welcomestyle.titleText2}>VLSQZ</Text>
        <Text style={welcomestyle.subtext}>Catering Services</Text>
      </View>

      {/* login button */}
      {/* <TouchableOpacity
        style={welcomestyle.buttonLogin}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={welcomestyle.buttonTextLogin}>Login</Text>
      </TouchableOpacity> */}

      {/* Get Started */}
      <View style={welcomestyle.buttonContainer}>
        <TouchableOpacity
          style={welcomestyle.button}
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <Text style={welcomestyle.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
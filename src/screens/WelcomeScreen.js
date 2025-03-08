import React from 'react';

import {Text, View, TouchableOpacity, Alert, Image} from 'react-native';
import {welcomestyle} from '../style/WelcomeScreenStyle';

//HANDLE FUNCTIONS

//login functionm
const handleLogin = () => {
  Alert.alert('login');
};

// register function
const handleRegister = () => {
  Alert.alert('register');
};

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={welcomestyle.container}>

      {/* Title Section */}
      <View style={welcomestyle.titleContainer}>
        <Text style={welcomestyle.titleText}>Welcome To</Text>
        <Text style={welcomestyle.titleText2}>Litran Connect</Text>
        <Text style={welcomestyle.subtext}>Lorem ipsum dolor</Text>
      </View>

      {/* Image Container with Background */}
      <View style={welcomestyle.imageContainer}>
        <Image
          source={require('../assets/landingpagebg.png')}
          style={welcomestyle.image}
          resizeMode="contain"
        />
      </View>

      {/* login button */}
      <TouchableOpacity
        style={welcomestyle.buttonLogin}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={welcomestyle.buttonTextLogin}>Login</Text>
      </TouchableOpacity>

      {/* Register button */}
      <View style={welcomestyle.buttonContainer}>
        <TouchableOpacity
          style={welcomestyle.button}
          onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={welcomestyle.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {loginstyle} from '../style/MainStyles';
import axios from 'axios';

const LoginScreen = ({navigation}) => {
  // variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //DEFAULT CREDENTIALS
  // "username": "jimmie_k",
  // "password": "klein*#%*"

  // login logic
  const login = async () => {
    try {
      // api call
      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        // send  input
        username: username,
        password: password,
      });

      console.log('Response:', response.data); // Log response data

      // display alert
      Alert.alert('Login Successful!', `Token: ${response.data.token}`);
    } catch (error) {

      // error trapping
      console.error('Login error:', error.response?.data || error.message);

      // failed login
      Alert.alert('Login Failed', 'Invalid credentials or server error');
    }
  };

  return (
    // <ImageBackground
    //   source={require('../../src/assets/overlay.jpg')}
    //   style={loginstyle.background}
    //   resizeMode="cover">

      <View style={loginstyle.container}>
        {/* Title and Description */}
        <View style={loginstyle.titleContainer}>
          <Text style={loginstyle.registerTitle}>Login to your Account</Text>
          <Text style={loginstyle.description}>
            Please Enter Your Credentials
          </Text>
        </View>

        {/* login Card */}
        <View style={loginstyle.card}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Username Input */}
            <View style={loginstyle.inputGroup}>
              <Text style={loginstyle.label}>Username</Text>
              <TextInput
                placeholder=""
                value={username}
                style={loginstyle.textInput}
                onChangeText={text => setUsername(text)}
              />
            </View>

            {/* Password Input */}
            <View style={loginstyle.inputGroup}>
              <Text style={loginstyle.label}>Password</Text>
              <TextInput
                placeholder=""
                value={password}
                style={loginstyle.textInput}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
              />
            </View>

            <TouchableOpacity style={loginstyle.button} onPress={() => login()}>
              <Text style={loginstyle.buttonText}>Login</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    // </ImageBackground>
  );
};

export default LoginScreen;

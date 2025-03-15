import React, { useState } from 'react';
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { mainStyle } from '../../style/MainStyles';
import api from '../../../api';

const LoginScreen = ({ navigation }) => {
  // fakestore api creds
  const [username, setUsername] = useState('jimmie_k');
  const [password, setPassword] = useState('klein*#%*');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorField, setErrorField] = useState('');

  const handleInputChange = (text, field) => {
    if (field === 'username') {
      setUsername(text);
      if (text.length < 3) {
        setUsernameError('Username must be at least 3 characters');
        setErrorField('username');
      } else {
        setUsernameError('');
        setErrorField('');
      }
    } else if (field === 'password') {
      setPassword(text);
      if (text.length < 6) {
        setPasswordError('Password must be at least 6 characters');
        setErrorField('password');
      } else {
        setPasswordError('');
        setErrorField('');
      }
    }
  };

  const login = async () => {
    let hasError = false;

    if (username.length < 3) {
      setUsernameError('Username must be at least 3 characters');
      setErrorField('username');
      hasError = true;
    }
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      setErrorField('password');
      hasError = true;
    }

    if (hasError) return;

    try {
      const response = await api.post('/auth/login', { username, password });
      console.log('Response', response.data);
      navigation.navigate('UserLandingPage');
    } catch (error) {
      console.error('Login Error', error.response?.data || error.message);
      setUsernameError('Invalid username or password');
      setPasswordError('');
      setErrorField('username');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/formbg.jpg')}
      style={mainStyle.container}
      resizeMode="cover"
    >
      <View style={mainStyle.container}>
        <View style={mainStyle.titleContainer}>
          <Text style={mainStyle.registerTitle}>Login to your Account</Text>
          <Text style={mainStyle.description}>Please Enter Your Credentials</Text>
        </View>

        <View style={mainStyle.card}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Username Input */}
            <View style={mainStyle.inputGroup}>
              <Text style={mainStyle.label}>Username</Text>
              <TextInput
                placeholder="Enter your username"
                value={username}
                style={[
                  mainStyle.textInput,
                  errorField === 'username' ? mainStyle.errorBorder : mainStyle.normalBorder,
                ]}
                onChangeText={(text) => handleInputChange(text, 'username')}
              />
              {errorField === 'username' && <Text style={mainStyle.errorText}>{usernameError}</Text>}
            </View>

            {/* Password Input */}
            <View style={mainStyle.inputGroup}>
              <Text style={mainStyle.label}>Password</Text>
              <TextInput
                placeholder="Enter your password"
                value={password}
                style={[
                  mainStyle.textInput,
                  errorField === 'password' ? mainStyle.errorBorder : mainStyle.normalBorder,
                ]}
                secureTextEntry={true}
                onChangeText={(text) => handleInputChange(text, 'password')}
              />
              {errorField === 'password' && <Text style={mainStyle.errorText}>{passwordError}</Text>}
            </View>

            <TouchableOpacity style={mainStyle.button} onPress={login}>
              <Text style={mainStyle.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={mainStyle.signInText}>
                Already have an account? <Text style={mainStyle.signInText}>Sign Up Here</Text>
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

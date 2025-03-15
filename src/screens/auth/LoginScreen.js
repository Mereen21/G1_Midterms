import React, { useState } from 'react';
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Snackbar } from 'react-native-paper';
import { mainStyle } from '../../style/MainStyles';
import api from '../../../api';

const LoginScreen = ({ navigation }) => {
  // fakestore api creds
  const [username, setUsername] = useState('jimmie_k');
  const [password, setPassword] = useState('klein*#%*');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorField, setErrorField] = useState('');  
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

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
    try {
      if (!username.trim() || !password.trim()) {
        setSnackbarMessage('Username and password are required.');
        setSnackbarVisible(true);
        return;
      }

      //DEMO CREDENTIALS
      if (username === 'johnd' && password === 'm38rmF$') {
        setSnackbarMessage('Admin Login Successful');
        setSnackbarVisible(true);
        setTimeout(() => navigation.navigate('AdminPageScreen'), 1000);
        return;
      }
      if (username === 'mor_2314' && password === '83r5^_') {
        setSnackbarMessage('Seller Login Successful');
        setSnackbarVisible(true);
        setTimeout(() => navigation.navigate('SellerDashboard'), 1000);
        return;
      }

      const response = await api.post('/auth/login', { username, password });
      console.log('Response', response.data);
      navigation.navigate('UserLandingPage');
    } catch (error) {
      console.error('Login Error', error.response?.data || error.message);
      setUsernameError('Invalid username or password');
      setPasswordError('');
      setErrorField('username');
      setSnackbarMessage('Invalid login credentials');
      setSnackbarVisible(true);
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
             
               {/* DEMO CREDENTIALS */}
            <View style={mainStyle.demoContainer}>
              <Text style={mainStyle.demoTitle}>Demo Accounts:</Text>
              <Text style={mainStyle.demoText}>👤 Admin: johnd | 🔑 m38rmF$</Text>
              <Text style={mainStyle.demoText}>👤 Seller: mor_2314 | 🔑 83r5^_</Text>
            </View>

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

           
            <TouchableOpacity disabled={true}>
            <Text style={mainStyle.signInText}>Don't have an account? </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={[mainStyle.signInText, { textDecorationLine: 'underline' }]}>Sign Up Here</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>



            {/* Snackbar Notification */}
            <Snackbar
              visible={snackbarVisible}
              onDismiss={() => setSnackbarVisible(false)}
              duration={3000}
            >
              {snackbarMessage}
            </Snackbar>
     
 
    </ImageBackground>
  );
};

export default LoginScreen;

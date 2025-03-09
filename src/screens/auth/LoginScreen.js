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
import {loginstyle} from '../../style/MainStyles';
import axios from 'axios';

const LoginScreen = ({navigation}) => {
  // variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //DEFAULT CREDENTIALS
  // "username": "jimmie_k",
  // "password": "klein*#%*"

  // login logic

  // using our fakestore api di naman kasama to sa capstone niyo'

  const login = async () => {
    try {
      //much better if chineck niyo dito mga minimum requirements if na meet mag eerror api call niyo pag missing parameters
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

  // const handleInputChange = () => {
  //   //much better if ganto ang onchangetext inyo sa mga textinput para ma check ang minimum requirements for login
  // }

  return (
    <ImageBackground 
      source={require('../../assets/formbg.jpg')}
      style={loginstyle.container}
      resizeMode="cover">

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
            {/* mas okay if sign up here lang napipindot */}
            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={loginstyle.signInText}>
              Already have an account? <Text style={loginstyle.signInText}>Sign Up Here</Text>
            </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
     </ImageBackground>
  );
};

export default LoginScreen;

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
import { registerStyle } from '../../style/RegisterStyle';
import axios from 'axios';

const RegisterScreen = ({navigation}) => {
  // variables
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  return (
    <ImageBackground 
      source={require('../../assets/registerbg.jpg')}
      style={registerStyle.container}
      resizeMode="cover">

      <View style={registerStyle.container}>
        {/* Title and Description */}
        <View style={registerStyle.titleContainer}>
          <Text style={registerStyle.registerTitle}>Create An Account</Text>
          <Text style={registerStyle.description}>
            Enter your Credentials
          </Text>
        </View>

        {/* login Card */}
        <View style={registerStyle.card}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Username Input */}
            <View style={registerStyle.inputGroup}>
              <Text style={registerStyle.label}>Username</Text>
              <TextInput
                placeholder=""
                value={username}
                style={registerStyle.textInput}
                onChangeText={text => setUsername(text)}
              />
            </View>

             {/* Email Input */}
             <View style={registerStyle.inputGroup}>
              <Text style={registerStyle.label}>Email</Text>
              <TextInput
                placeholder=""
                keyboardType="email-address"
                value={email}
                style={registerStyle.textInput}
                onChangeText={text => setEmail(text)}
              />
            </View>

            {/* Password Input */}
            <View style={registerStyle.inputGroup}>
              <Text style={registerStyle.label}>Password</Text>
              <TextInput
                placeholder=""
                value={password}
                style={registerStyle.textInput}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
              />
            </View>

            {/* Password Input */}
            <View style={registerStyle.inputGroup}>
              <Text style={registerStyle.label}>Confirm Password</Text>
              <TextInput
                placeholder=""
                value={confirmPassword}
                style={registerStyle.textInput}
                secureTextEntry={true}
                onChangeText={text =>  setConfirmPassword(text)}
              />
            </View>


            <TouchableOpacity style={registerStyle.button} onPress={() => login()}>
              <Text style={registerStyle.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={registerStyle.signInText}>
              Already have an account? <Text style={registerStyle.signInText}>Sign in Here</Text>
            </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
     </ImageBackground>
  );
};

export default RegisterScreen;
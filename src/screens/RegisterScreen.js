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
import { loginstyle } from '../style/MainStyles';

const RegisterScreen = () => {

  // variables
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!firstName || !lastName || !username || !email || !password) {
      Alert.alert('Error', 'Please fill-up all fields');
      return;
    }
  
    Alert.alert('Success!','Account Registered Successfully!');
  };
  

  return (
    <ImageBackground
      source={require('../../src/assets/overlay.jpg')} 
      style={loginstyle.background}
      resizeMode="cover">
      <View style={loginstyle.container}>
        {/* Title and Description */}
        <View style={loginstyle.titleContainer}>
          <Text style={loginstyle.registerTitle}>Create Your Account</Text>
          <Text style={loginstyle.description}>
            Be part of the community!
          </Text>
        </View>

        {/* Register Card */}
        <View style={loginstyle.card}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* First Name Input */}
            <View style={loginstyle.inputGroup}>
              <Text style={loginstyle.label}>First Name</Text>
              <TextInput
                placeholder=""
                value={firstName}
                style={loginstyle.textInput}
                onChangeText={text => setFirstName(text)}
              />
            </View>

            {/* Last Name Input */}
            <View style={loginstyle.inputGroup}>
              <Text style={loginstyle.label}>Last Name</Text>
              <TextInput
                placeholder=""
                value={lastName}
                style={loginstyle.textInput}
                onChangeText={text => setLastName(text)}
              />
            </View>

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

            {/* Email Input */}
            <View style={loginstyle.inputGroup}>
              <Text style={loginstyle.label}>Email</Text>
              <TextInput
                placeholder=""
                value={email}
                style={loginstyle.textInput}
                keyboardType="email-address"
                onChangeText={text => setEmail(text)}
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

            <TouchableOpacity style={loginstyle.button} onPress={() => handleRegister()}>
              <Text style={loginstyle.buttonText}>Join Now</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RegisterScreen;

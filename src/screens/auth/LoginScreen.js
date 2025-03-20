import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Snackbar} from 'react-native-paper';
import {mainStyle} from '../../style/MainStyles';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorField, setErrorField] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (text, field) => {
    if (field === 'username') {
      setUsername(text);
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

  const login = () => {
    if (!username.trim() || !password.trim()) {
      setSnackbarMessage('Username and password are required.');
      setSnackbarVisible(true);
      return;
    }

    setLoading(true); 

    setTimeout(() => {
      const validUsers = {
        admin: 'admin123',
        seller: 'seller123',
        user: 'user123',
      };

      if (validUsers[username]) {
        if (validUsers[username] === password) {
          setSnackbarMessage('Login Successful');
          setSnackbarVisible(true);
          setTimeout(() => {
            setLoading(false);
            if (username === 'admin') navigation.navigate('AdminNav');
            if (username === 'seller') navigation.navigate('SellerNav');
            if (username === 'user') navigation.navigate('UserNavBar');
          }, 500);
          return;
        } else {
          setPasswordError('Invalid password');
          setErrorField('password');
          setSnackbarMessage('Invalid password');
          setSnackbarVisible(true);
        }
      } else {
        setUsernameError('Invalid username');
        setErrorField('username');
        setSnackbarMessage('Invalid username');
        setSnackbarVisible(true);
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <ImageBackground
      source={require('../../assets/formbg.jpg')}
      style={mainStyle.container}
      resizeMode="cover">
      <View style={mainStyle.container}>
        <View style={mainStyle.titleContainer}>
          <Text style={mainStyle.registerTitle}>Login to your Account</Text>
          <Text style={mainStyle.description}>
            Please Enter Your Credentials
          </Text>
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
                  errorField === 'username'
                    ? mainStyle.errorBorder
                    : mainStyle.normalBorder,
                ]}
                onChangeText={text => handleInputChange(text, 'username')}
              />
              {errorField === 'username' && (
                <Text style={mainStyle.errorText}>{usernameError}</Text>
              )}
            </View>

            {/* Password Input */}
            <View style={mainStyle.inputGroup}>
              <Text style={mainStyle.label}>Password</Text>
              <TextInput
                placeholder="Enter your password"
                value={password}
                style={[
                  mainStyle.textInput,
                  errorField === 'password'
                    ? mainStyle.errorBorder
                    : mainStyle.normalBorder,
                ]}
                secureTextEntry={true}
                onChangeText={text => handleInputChange(text, 'password')}
              />
              {errorField === 'password' && (
                <Text style={mainStyle.errorText}>{passwordError}</Text>
              )}
            </View>

            {/* Login Button */}
            <TouchableOpacity
              style={mainStyle.button}
              onPress={login}
              disabled={loading}>
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={mainStyle.buttonText}>Login</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity disabled={true}>
              <Text style={mainStyle.signInText}>Don't have an account? </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterScreen')}>
              <Text
                style={[
                  mainStyle.signInText,
                  {textDecorationLine: 'underline'},
                ]}>
                Sign Up Here
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>

      {/* Snackbar Notification */}
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}>
        {snackbarMessage}
      </Snackbar>
    </ImageBackground>
  );
};

export default LoginScreen;

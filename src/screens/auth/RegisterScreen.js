import React, { useState } from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
} from 'react-native';
import { mainStyle } from '../../style/MainStyles';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
  // variables
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // errorhandling
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');


  // const handleInputChange = () => {
  //   //much better if ganto ang onchangetext inyo sa mga textinput para ma check ang minimum requirements for register
  // }

  const validateName = (text) => {
    setUsername(text);
    if (text === "") {
      setUsernameError("");
    } else if (text.length < 3) {
      setUsernameError("Username must be at least 3 characters.");
    } else {
      setUsernameError("");
    }
  };

  const validateEmail = (text) => {
    setEmail(text);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (text === "") {
      setEmailError("");
    } else if (!emailRegex.test(text)) {
      setEmailError("Enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (text) => {
    setPassword(text);
    if (text === "") {
      setPasswordError("");
    } else if (text.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = (text) => {
    setConfirmPassword(text);
    if (text === "") {
      setConfirmPasswordError("");
    } else {
      setConfirmPasswordError("");
    }

  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContinue = () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    let isValid = true;

    let newUsernameError = "";
    let newEmailError = "";
    let newPasswordError = "";
    let newConfirmPasswordError = "";

    if (username === "") {
      newUsernameError = "This field is required.";
      isValid = false;
    } else if (username.length < 3) {
      newUsernameError = "Username must be at least 3 characters.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      newEmailError = "This field is required.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newEmailError = "Enter a valid email address.";
      isValid = false;
    }

    if (password === "") {
      newPasswordError = "This field is required.";
      isValid = false;
    } else if (password.length < 6) {
      newPasswordError = "Password must be at least 6 characters.";
      isValid = false;
    }

    if (confirmPassword === "") {
      newConfirmPasswordError = "This field is required.";
      isValid = false;
    } else if (password.length < 6) {
      newConfirmPasswordError = "Password must be at least 6 characters."; // Added this line
      isValid = false;
    } else if (confirmPassword !== password) {
      newConfirmPasswordError = "Passwords do not match.";
      isValid = false;
    }

    // Update errors
    setUsernameError(newUsernameError);
    setEmailError(newEmailError);
    setPasswordError(newPasswordError);
    setConfirmPasswordError(newConfirmPasswordError);

    if (isValid) {
      setTimeout(() => {
        navigation.navigate("LoginScreen");
        setIsSubmitting(false);
      }, 1000);
    } else {
      setIsSubmitting(false);
    }
  };


  return (
    <ImageBackground
      source={require('../../assets/registerbg.jpg')}
      style={mainStyle.container}
      resizeMode="cover">

      <View style={mainStyle.container}>
        {/* Title and Description */}
        <View style={mainStyle.titleContainer}>
          <Text style={mainStyle.registerTitle}>Create An Account</Text>
          <Text style={mainStyle.description}>
            Enter your Credentials
          </Text>
        </View>

        {/* Register Card */}
        <View style={mainStyle.card}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Username Input */}
            <View style={mainStyle.inputGroup}>
              <Text style={mainStyle.label}>Username</Text>
              <TextInput
                style={[mainStyle.textInput, usernameError ? mainStyle.inputError : null]}
                placeholder="Enter Username"
                value={username}
                onChangeText={validateName}
              />
              {usernameError ? <Text style={mainStyle.errorText}>{usernameError}</Text> : null}
            </View>

            {/* Email Input */}
            <View style={mainStyle.inputGroup}>
              <Text style={mainStyle.label}>Email</Text>
              <TextInput
                style={[mainStyle.textInput, emailError ? mainStyle.inputError : null]}
                placeholder="Enter Email"
                value={email}
                onChangeText={validateEmail}
                keyboardType="email-address"
              />
              {emailError ? <Text style={mainStyle.errorText}>{emailError}</Text> : null}
            </View>

            {/* Password Input */}
            <View style={mainStyle.inputGroup}>
              <Text style={mainStyle.label}>Password</Text>
              <TextInput
                style={[mainStyle.textInput, passwordError ? mainStyle.inputError : null]}
                placeholder="Enter Password"
                value={password}
                secureTextEntry={true}
                onChangeText={validatePassword}
              />
              {passwordError ? <Text style={mainStyle.errorText}>{passwordError}</Text> : null}
            </View>

            {/* ConfirmPassword Input */}
            <View style={mainStyle.inputGroup}>
              <Text style={mainStyle.label}>Confirm Password</Text>
              <TextInput
                placeholder="Re-Enter Password"
                value={confirmPassword}
                style={[mainStyle.textInput, confirmPasswordError ? mainStyle.inputError : null]}
                onChangeText={validateConfirmPassword}
                secureTextEntry={true}
              />
              {confirmPasswordError ? <Text style={mainStyle.errorText}>{confirmPasswordError}</Text> : null}
            </View>


            <TouchableOpacity
              style={[mainStyle.button, isSubmitting ? { opacity: 0.5 } : {}]}
              onPress={handleContinue}
              disabled={isSubmitting}
            >
              <Text style={mainStyle.buttonText}>
                {isSubmitting ? "Registering..." : "Register"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity disabled={true}>
              <Text style={mainStyle.signInText}>Already have an account? </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={[mainStyle.signInText, { textDecorationLine: 'underline' }]}>Sign in Here</Text>
            </TouchableOpacity>

          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RegisterScreen;
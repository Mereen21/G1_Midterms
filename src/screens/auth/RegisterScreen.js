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
import { registerStyle } from '../../style/RegisterStyle';
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
    } else if (text.length < 4) {
      setUsernameError("Name must be at least 4 characters.");
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
      setPasswordError("Must be at least 6 characters.");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = (text) => {
    setConfirmPassword(text);
    if (text === "") {
      setConfirmPasswordError("");
    } else if (text !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContinue = () => {
    if (isSubmitting) return; // Prevent multiple clicks

    setIsSubmitting(true); // Disable button
    let isValid = true;

    let newUsernameError = "";
    let newEmailError = "";
    let newPasswordError = "";
    let newConfirmPasswordError = "";

    if (username === "") {
      newUsernameError = "This field is required.";
      isValid = false;
    } else if (username.length < 4) {
      newUsernameError = "Name must be at least 4 characters.";
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
      newPasswordError = "Must be at least 6 characters.";
      isValid = false;
    }

    if (confirmPassword === "") {
      newConfirmPasswordError = "This field is required.";
      isValid = false;
    } else if (confirmPassword !== password) {
      newConfirmPasswordError = "Passwords do not match.";
      isValid = false;
    }

    // Update all errors at once
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
                style={[registerStyle.textInput, usernameError ? registerStyle.inputError : null]}
                placeholder="Enter Username"
                value={username}
                onChangeText={validateName}
              />
              {usernameError ? <Text style={registerStyle.errorText}>{usernameError}</Text> : null}
            </View>

            {/* Email Input */}
            <View style={registerStyle.inputGroup}>
              <Text style={registerStyle.label}>Email</Text>
              <TextInput
                style={[registerStyle.textInput, emailError ? registerStyle.inputError : null]}
                placeholder="Enter Email"
                value={email}
                onChangeText={validateEmail}
                keyboardType="email-address"
              />
              {emailError ? <Text style={registerStyle.errorText}>{emailError}</Text> : null}
            </View>

            {/* Password Input */}
            <View style={registerStyle.inputGroup}>
              <Text style={registerStyle.label}>Password</Text>
              <TextInput
                style={[registerStyle.textInput, passwordError ? registerStyle.inputError : null]}
                placeholder="Enter your Password"
                value={password}
                secureTextEntry={true}
                onChangeText={validatePassword}
              />
              {passwordError ? <Text style={registerStyle.errorText}>{passwordError}</Text> : null}
            </View>

            {/* ConfirmPassword Input */}
            <View style={registerStyle.inputGroup}>
              <Text style={registerStyle.label}>Confirm Password</Text>
              <TextInput
                placeholder="Re-Enter Password"
                value={confirmPassword}
                style={[registerStyle.textInput, confirmPasswordError ? registerStyle.inputError : null]}
                onChangeText={validateConfirmPassword}
                secureTextEntry={true} // Hide password input
              />
              {confirmPasswordError ? <Text style={registerStyle.errorText}>{confirmPasswordError}</Text> : null}
            </View>


            <TouchableOpacity
              style={[registerStyle.button, isSubmitting ? { opacity: 0.5 } : {}]}
              onPress={handleContinue}
              disabled={isSubmitting}
            >
              <Text style={registerStyle.buttonText}>
                {isSubmitting ? "Registering..." : "Register"}
              </Text>
            </TouchableOpacity>
            {/* mas okay if sign in here lang napipindot */}

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
import React, { useState } from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Snackbar } from 'react-native-paper';
import { editStyle } from '../../style/EditProfileStyle';

const EditProfileScreen = ({ route }) => {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const avatar = route.params?.avatar || require('../../assets/admin-items/staff.jpg');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  // Username Validation
  const validateUsername = (text) => {
    setUsername(text);
    if (!text.trim()) {
      setUsernameError('Username is required.');
    } else if (text.length < 4 || text.length > 20) {
      setUsernameError('Username must be between 4-20 characters.');
    } else {
      setUsernameError('');
    }
  };

  // Email Validation
  const validateEmail = (text) => {
    setEmail(text);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!text.trim()) {
      setEmailError('Email is required.');
    } else if (!emailRegex.test(text)) {
      setEmailError('Invalid email format.');
    } else {
      setEmailError('');
    }
  };

  // Password Validation
  const validatePassword = (text) => {
    setPassword(text);

    if (text && text.length < 8) {
      setPasswordError('Password must be at least 8 characters.');
    } else {
      setPasswordError('');
    }

    //If password is empty reset confirm pass
    if (!text) {
      setConfirmPassword('');
      setConfirmPasswordError('');
    }
  };

  // Confirm Password Validation
  const validateConfirmPassword = (text) => {
    setConfirmPassword(text);

    if (password && text !== password) {
      setConfirmPasswordError('Passwords do not match.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = () => {
    validateUsername(username);
    validateEmail(email);
    validatePassword(password);
    validateConfirmPassword(confirmPassword);
  
    if (
      !username.trim() ||
      username.length < 4 ||
      username.length > 20 ||
      !email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      (password && password.length < 8) ||
      (password && confirmPassword !== password)
    ) {
      setSnackbarMessage('Error: Please check the form for issues.');
      setSnackbarVisible(true);
    } else {
      setSnackbarMessage('Profile Updated Successfully');
      setSnackbarVisible(true);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/user-items/featuredbg.jpg')}
      style={editStyle.container}
      resizeMode="cover"
    >
      <View style={editStyle.container}>
        {/* Title and Description */}
        <View style={editStyle.titleContainer}>
          <Text style={editStyle.Title}>Edit Profile</Text>
        </View>

        <View style={editStyle.avatarContainer}>
          <Image source={avatar} style={editStyle.avatar} />
        </View>

        {/* Profile Form */}
        <View style={editStyle.card}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={editStyle.form}>

              {/* Username Input */}
              <View style={editStyle.inputGroup}>
                <Text style={editStyle.label}>Username</Text>
                <TextInput
                  placeholder=""
                  value={username}
                  style={editStyle.textInput}
                  onChangeText={validateUsername}
                />
                {usernameError ? <Text style={{ color: 'red' }}>{usernameError}</Text> : null}
              </View>

              {/* Email Input */}
              <View style={editStyle.inputGroup}>
                <Text style={editStyle.label}>Email</Text>
                <TextInput
                  placeholder=""
                  keyboardType="email-address"
                  value={email}
                  style={editStyle.textInput}
                  onChangeText={validateEmail}
                />
                {emailError ? <Text style={{ color: 'red' }}>{emailError}</Text> : null}
              </View>

              {/* Password Input */}
              <View style={editStyle.inputGroup}>
                <Text style={editStyle.label}>Password</Text>
                <TextInput
                  placeholder="Enter new password (optional)"
                  value={password}
                  style={editStyle.textInput}
                  secureTextEntry={true}
                  onChangeText={validatePassword}
                />
                {passwordError ? <Text style={{ color: 'red' }}>{passwordError}</Text> : null}
              </View>

              {/* Confirm Password Input */}
              <View style={editStyle.inputGroup}>
                <Text style={editStyle.label}>Confirm Password</Text>
                <TextInput
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  style={editStyle.textInput}
                  secureTextEntry={true}
                  onChangeText={validateConfirmPassword}
                  editable={!!password} // Disable if password is empty
                />
                {confirmPasswordError ? <Text style={{ color: 'red' }}>{confirmPasswordError}</Text> : null}
              </View>

              {/* Save Button */}
              <TouchableOpacity style={editStyle.button} onPress={handleSubmit}>
                <Text style={editStyle.buttonText}>Save Changes</Text>
              </TouchableOpacity>

            </View>
          </ScrollView>
        </View>
      </View>
        {/* Snackbar Notification */}
            <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000} // 3 seconds
      >
        {snackbarMessage}
      </Snackbar>

    </ImageBackground>
  );
};

export default EditProfileScreen;

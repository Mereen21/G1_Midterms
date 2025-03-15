import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Snackbar } from 'react-native-paper'; 
import styles from '../../style/UserStyles/UserProfileScreenStyle';

const UserEditProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('John Winch');
  const [email, setEmail] = useState('johnwinch@gmail.com');
  const [phone, setPhone] = useState('081234567890');
  const [dob, setDob] = useState('');
  const [country, setCountry] = useState('New York, Cubao');

  // For Error
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [dobError, setDobError] = useState('');


  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  // Validation 
  const validateName = (text) => {
    setName(text);
    if (!text.trim()) {
      setNameError('Name is required.');
    } else if (text.length < 3) {
      setNameError('Name must be at least 3 characters.');
    } else {
      setNameError('');
    }
  };

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

  const validatePhone = (text) => {
    setPhone(text);
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!text.trim()) {
      setPhoneError('Phone number is required.');
    } else if (!phoneRegex.test(text)) {
      setPhoneError('Invalid phone number format.');
    } else {
      setPhoneError('');
    }
  };

  const validateDob = (text) => {
    setDob(text);
    const dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!text.trim()) {
      setDobError('Date of Birth is required.');
    } else if (!dobRegex.test(text)) {
      setDobError('Invalid date format (dd/mm/yyyy).');
    } else {
      setDobError('');
    }
  };


  const handleSave = () => {
    const nameErr = name.trim() ? (name.length < 3 ? 'Name must be at least 3 characters.' : '') : 'Name is required.';
    const emailErr = email.trim() ? (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Invalid email format.') : 'Email is required.';
    const phoneErr = phone.trim() ? (/^[0-9]{10,15}$/.test(phone) ? '' : 'Invalid phone number format.') : 'Phone number is required.';
    const dobErr = dob.trim() ? (/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(dob) ? '' : 'Invalid date format (dd/mm/yyyy).') : 'Date of Birth is required.';
  
    setNameError(nameErr);
    setEmailError(emailErr);
    setPhoneError(phoneErr);
    setDobError(dobErr);
  
  
    if (!nameErr && !emailErr && !phoneErr && !dobErr) {
      setSnackbarMessage('Profile Updated Successfully');
    } else {
      setSnackbarMessage('Error: Please check the form for issues.');
    }
    
    setSnackbarVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Avatar */}
      <TouchableOpacity onPress={() => console.log('Change Avatar')}>
        <Image
          source={require('../../assets/user-items/avatar.jpg')}
          style={styles.avatar}
        />
      </TouchableOpacity>

      {/* Name Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={validateName} />
        {nameError ? <Text style={{ color: 'red' }}>{nameError}</Text> : null}
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={validateEmail}
          keyboardType="email-address"
        />
        {emailError ? <Text style={{ color: 'red' }}>{emailError}</Text> : null}
      </View>

      {/* Phone Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={validatePhone}
          keyboardType="phone-pad"
        />
        {phoneError ? <Text style={{ color: 'red' }}>{phoneError}</Text> : null}
      </View>

      {/* DOB Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date of Birth</Text>
        <TextInput
          style={styles.input}
          value={dob}
          onChangeText={validateDob}
          placeholder="dd/mm/yyyy"
        />
        {dobError ? <Text style={{ color: 'red' }}>{dobError}</Text> : null}
      </View>

      {/* Country Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Country</Text>
        <TextInput style={styles.input} value={country} onChangeText={setCountry} />
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>Save Changes</Text>
      </TouchableOpacity>

      {/* Snackbar Notification */}
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
      >
        {snackbarMessage}
      </Snackbar>
    </View>
  );
};

export default UserEditProfileScreen;

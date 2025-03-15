import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import styles from '../../style/UserStyles/UserProfileScreenStyle';

const UserEditProfileScreen = ({navigation}) => {
  const [name, setName] = useState('John Winch');
  const [email, setEmail] = useState('johnwinch@gmail.com');
  const [phone, setPhone] = useState('081234567890');
  const [dob, setDob] = useState('');
  const [country, setCountry] = useState('New York, Cubao');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('Change Avatar')}>
        <Image
          source={require('../../assets/user-items/avatar.jpg')}
          style={styles.avatar}
        />
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date of Birth</Text>
        <TextInput
          style={styles.input}
          value={dob}
          onChangeText={setDob}
          placeholder="dd/mm/yyyy"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Country</Text>
        <TextInput
          style={styles.input}
          value={country}
          onChangeText={setCountry}
        />
      </View>

      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.saveText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserEditProfileScreen;

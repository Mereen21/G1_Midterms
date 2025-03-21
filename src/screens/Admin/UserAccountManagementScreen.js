import * as React from 'react';
import { useState } from 'react';
import { View, ScrollView, TextInput, Alert, TouchableOpacity, Modal } from 'react-native';
import { Card, Button, Menu, Text, Snackbar } from 'react-native-paper';
import { usermanageStyles } from '../../style/AdministratorStyles/UserManageStyles';
import { mainStyle } from '../../style/MainStyles';

const userData = {
  customers: [
    { key: 1, name: 'John Doe', email: 'john.doe@example.com', status: 'Active' },
    { key: 2, name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Inactive' },
    { key: 3, name: 'Michael Johnson', email: 'michael.johnson@example.com', status: 'Active' },
  ],
  employees: [
    { key: 4, name: 'Alice Brown', email: 'alice.brown@example.com', role: 'Manager', status: 'Active' },
    { key: 5, name: 'Robert Wilson', email: 'robert.wilson@example.com', role: 'Chef', status: 'Active' },
    { key: 6, name: 'Emily Davis', email: 'emily.davis@example.com', role: 'Cashier', status: 'Inactive' },
  ],
};

const UserAccountManagementScreen = () => {
  const [visible, setVisible] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

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
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openEditModal = (user) => {
    setSelectedUser(user);
    setEditModalVisible(true);
  };

  const closeEditModal = () => {
    setSelectedUser(null);
    setEditModalVisible(false);
  };

  const handleEditSave = () => {
    console.log("Updated User:", selectedUser);
    closeEditModal();
  };

  const getUsers = () => {
    if (selectedCategory === 'all') {
      return [...userData.customers, ...userData.employees];
    }
    return userData[selectedCategory] || [];
  };

  const filteredUsers = getUsers().filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  const handleModalContinue = () => {
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
        console.log("User Added:", { username, email });
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setIsSubmitting(false);
        setSnackbarMessage("Add successful");
        setSnackbarVisible(true);
        closeModal();
      }, 1000);
    } else {
      setIsSubmitting(false);
    }
  };

  const handleDelete = (user) => {
    Alert.alert(
      "Confirm Deletion",
      `Are you sure you want to delete ${user.name}?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", onPress: () => console.log("Deleted", user), style: "destructive" }
      ]
    );
  };

  return (
    <View style={usermanageStyles.maincontainer}>
      <Text style={usermanageStyles.categoryTitle}>
        USER MANAGEMENT
      </Text>

      {/* Search Bar and Suggested Box in a Row */}
      <View style={usermanageStyles.searchRow}>
        <View style={usermanageStyles.searchContainer}>
          <TextInput
            style={usermanageStyles.searchInput}
            placeholder="Search users..."
            placeholderTextColor="#FFFFFF"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <TouchableOpacity style={usermanageStyles.newuserBox} onPress={openModal}>
          <Text style={usermanageStyles.newusertext}>+ Add</Text>
        </TouchableOpacity>
      </View>

      {/* Category Selector */}
      <View style={usermanageStyles.categoryContainer}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button mode="outlined" onPress={openMenu} style={usermanageStyles.categoryButton}>
              <Text style={{ color: 'white' }}>
                {selectedCategory === 'all' ? "Select Category" : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
              </Text>
            </Button>
          }
        >
          <Menu.Item onPress={() => { setSelectedCategory('all'); closeMenu(); }} title="All Users" />
          <Menu.Item onPress={() => { setSelectedCategory('customers'); closeMenu(); }} title="Customers" />
          <Menu.Item onPress={() => { setSelectedCategory('employees'); closeMenu(); }} title="Employees" />
        </Menu>
      </View>

      {/* User List */}
      <ScrollView>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <Card key={user.key} style={usermanageStyles.card}>
              <Card.Content>
                <Text style={usermanageStyles.cardTitle}>{user.name}</Text>
                <Text style={usermanageStyles.cardContent}>{user.email}</Text>
                {user.role && <Text style={usermanageStyles.cardContent}>Role: {user.role}</Text>}
                <Text
                  style={[
                    usermanageStyles.cardStatus,
                    { color: user.status === 'Active' ? 'green' : 'red' } // Dynamic color
                  ]}
                >
                  {user.status}
                </Text>
              </Card.Content>
              <Card.Actions>
                <Button mode="contained" style={usermanageStyles.editButton} onPress={() => openEditModal(user)}>
                  <Text style={{ color: 'white' }}>Edit</Text>
                </Button>
                <Button mode="contained" style={usermanageStyles.deleteButton} onPress={() => handleDelete(user)}>
                  <Text style={{ color: 'white' }}>Delete</Text>
                </Button>
              </Card.Actions>
            </Card>
          ))
        ) : (
          <Text style={usermanageStyles.noUsersText}>No users found.</Text>
        )}
      </ScrollView>

      {/* Modal for Adding User */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={usermanageStyles.modalContainer}>
          <View style={usermanageStyles.modalContent}>
            <Text style={usermanageStyles.modalTitle}>Add New User</Text>
            {/* Username Input */}
            <View style={mainStyle.inputGroup}>
              <Text style={usermanageStyles.label}>Username</Text>
              <TextInput
                style={[usermanageStyles.textInput, usernameError ? mainStyle.inputError : null]}
                placeholder="Enter Username"
                placeholderTextColor="#5C5C5C"
                value={username}
                onChangeText={validateName}
              />
              {usernameError ? <Text style={mainStyle.errorText}>{usernameError}</Text> : null}
            </View>

            {/* Email Input */}
            <View style={mainStyle.inputGroup}>
              <Text style={usermanageStyles.label}>Email</Text>
              <TextInput
                style={[usermanageStyles.textInput, emailError ? mainStyle.inputError : null]}
                placeholder="Enter Email"
                placeholderTextColor="#5C5C5C"
                value={email}
                onChangeText={validateEmail}
                keyboardType="email-address"
              />
              {emailError ? <Text style={mainStyle.errorText}>{emailError}</Text> : null}
            </View>

            {/* Password Input */}
            <View style={mainStyle.inputGroup}>
              <Text style={usermanageStyles.label}>Password</Text>
              <TextInput
                style={[usermanageStyles.textInput, passwordError ? mainStyle.inputError : null]}
                placeholder="Enter Password"
                placeholderTextColor="#5C5C5C"
                value={password}
                secureTextEntry={true}
                onChangeText={validatePassword}
              />
              {passwordError ? <Text style={mainStyle.errorText}>{passwordError}</Text> : null}
            </View>

            {/* ConfirmPassword Input */}
            <View style={mainStyle.inputGroup}>
              <Text style={usermanageStyles.label}>Confirm Password</Text>
              <TextInput
                placeholder="Re-Enter Password"
                placeholderTextColor="#5C5C5C"
                value={confirmPassword}
                style={[usermanageStyles.textInput, confirmPasswordError ? mainStyle.inputError : null]}
                onChangeText={validateConfirmPassword}
                secureTextEntry={true}
              />
              {confirmPasswordError ? <Text style={mainStyle.errorText}>{confirmPasswordError}</Text> : null}
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity
                style={[usermanageStyles.addbutton, { flex: 1, marginRight: 5 }, isSubmitting ? { opacity: 0.5 } : {}]}
                onPress={handleModalContinue}
                disabled={isSubmitting}
              >
                <Text style={mainStyle.buttonText}>Add</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[usermanageStyles.closeButton, { flex: 1, marginLeft: 5 }, isSubmitting ? { opacity: 0.5 } : {}]}
                onPress={closeModal}
                disabled={isSubmitting}
              >
                <Text style={mainStyle.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>

      {/* Edit User Modal */}
      <Modal visible={editModalVisible} animationType="slide" transparent={true} onRequestClose={closeEditModal}>
        <View style={usermanageStyles.modalContainer}>
          <View style={usermanageStyles.modalContent}>
            <Text style={usermanageStyles.modalTitle}>Edit User</Text>
            {selectedUser && (
              <>
                <View style={mainStyle.inputGroup}>
                  <Text style={usermanageStyles.label}>Username</Text>
                  <TextInput
                    style={usermanageStyles.textInput}
                    value={selectedUser.name}
                    onChangeText={(text) => setSelectedUser({ ...selectedUser, name: text })}
                  />
                </View>

                <View style={mainStyle.inputGroup}>
                  <Text style={usermanageStyles.label}>Email</Text>
                  <TextInput
                    style={usermanageStyles.textInput}
                    value={selectedUser.email}
                    onChangeText={(text) => setSelectedUser({ ...selectedUser, email: text })}
                  />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity
                    style={[mainStyle.button, { flex: 1, marginRight: 5 }, isSubmitting ? { opacity: 0.5 } : {}]}
                    onPress={handleEditSave}
                    disabled={isSubmitting}
                  >
                    <Text style={mainStyle.buttonText}>Save</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[usermanageStyles.closeButton, { flex: 1, marginLeft: 5 }, isSubmitting ? { opacity: 0.5 } : {}]}
                    onPress={closeEditModal}
                    disabled={isSubmitting}
                  >
                    <Text style={mainStyle.buttonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
      >
        {snackbarMessage}
      </Snackbar>;


    </View>
  );
};

export default UserAccountManagementScreen;

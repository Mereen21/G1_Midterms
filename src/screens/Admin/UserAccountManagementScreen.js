import * as React from 'react';
import { View, ScrollView, TextInput, Alert, TouchableOpacity } from 'react-native';
import { Card, Button, Menu, Text } from 'react-native-paper';
import { usermanageStyles } from '../../style/AdministratorStyles/UserManageStyles';

//dagdag ng edit feature
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

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const getUsers = () => {
    if (selectedCategory === 'all') {
      return [...userData.customers, ...userData.employees];
    }
    return userData[selectedCategory] || [];
  };

  const filteredUsers = getUsers().filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <TouchableOpacity style={usermanageStyles.newuserBox} onPress={() => console.log("Suggestion Clicked")}>
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
              <Text>
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
                <Button mode="contained" style={usermanageStyles.deleteButton} onPress={() => handleDelete(user)}>Delete</Button>
              </Card.Actions>
            </Card>
          ))
        ) : (
          <Text style={usermanageStyles.noUsersText}>No users found.</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default UserAccountManagementScreen;

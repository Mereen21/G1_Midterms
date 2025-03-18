import * as React from 'react';
import { View, StyleSheet, ScrollView, TextInput, Modal, Alert } from 'react-native';
import { Card, Button, Menu, FAB, Text } from 'react-native-paper';

const inventoryData = {
  orders: [
    { key: 1, name: 'Food Tray', quantity: 50 },
    { key: 2, name: 'Packaging Box', quantity: 100 },
  ],
  frozen: [
    { key: 3, name: 'Frozen Chicken', quantity: 20 },
    { key: 4, name: 'Frozen Beef', quantity: 15 },
  ],
  catering: [
    { key: 5, name: 'Serving Tray', quantity: 30, event: 'Wedding' },
    { key: 6, name: 'Plates', quantity: 200, event: 'Corporate Event' },
  ],
};

const InventoryScreen = () => {
  const [visible, setVisible] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState('orders');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [editItem, setEditItem] = React.useState(null);
  const [newItem, setNewItem] = React.useState({ name: '', quantity: '', event: '' });
  const [error, setError] = React.useState('');

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const items = inventoryData[selectedCategory].filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (item) => {
    setEditItem(item);
    setNewItem({ name: item.name, quantity: String(item.quantity), event: item.event || '' });
    setModalVisible(true);
  };

  const handleDelete = (item) => {
    Alert.alert(
      "Confirm Deletion",
      `Are you sure you want to delete ${item.name}?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", onPress: () => console.log("Deleted", item), style: "destructive" }
      ]
    );
  };

  const handleSave = () => {
    if (!newItem.name || !newItem.quantity || (selectedCategory === 'catering' && !newItem.event)) {
      setError('All fields are required.');
      return;
    }
    setError('');
    console.log(editItem ? 'Updating item' : 'Adding item', newItem);
    setModalVisible(false);
    setEditItem(null);
    setNewItem({ name: '', quantity: '', event: '' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>{selectedCategory.toUpperCase()} INVENTORY</Text>
      
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Button onPress={openMenu}>Select Category</Button>}
      >
        <Menu.Item onPress={() => { setSelectedCategory('orders'); closeMenu(); }} title="Orders Inventory" />
        <Menu.Item onPress={() => { setSelectedCategory('frozen'); closeMenu(); }} title="Frozen Products Inventory" />
        <Menu.Item onPress={() => { setSelectedCategory('catering'); closeMenu(); }} title="Catering Inventory" />
      </Menu>

      <TextInput
        style={styles.searchInput}
        placeholder="Search items..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <ScrollView>
        {items.map((item) => (
          <Card key={item.key} style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium" style={styles.cardTitle}>{item.name}</Text>
              <Text>Quantity: {item.quantity}</Text>
              {selectedCategory === 'catering' && <Text>Event: {item.event}</Text>}
            </Card.Content>
            <Card.Actions>
              <Button mode="contained" style={styles.editButton} onPress={() => handleEdit(item)}>Edit</Button>
              <Button mode="contained" style={styles.deleteButton} onPress={() => handleDelete(item)}>Delete</Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => {
          setEditItem(null);
          setNewItem({ name: '', quantity: '', event: '' });
          setModalVisible(true);
        }}
      />

      {/* Edit/Add Modal */}
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>{editItem ? 'Edit Item' : 'Add Item'}</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <TextInput placeholder="Item Name" value={newItem.name} onChangeText={(text) => setNewItem({ ...newItem, name: text })} />
            <TextInput placeholder="Quantity" keyboardType="numeric" value={newItem.quantity} onChangeText={(text) => setNewItem({ ...newItem, quantity: text })} />
            {selectedCategory === 'catering' && <TextInput placeholder="Event" value={newItem.event} onChangeText={(text) => setNewItem({ ...newItem, event: text })} />}
            <Button onPress={handleSave}>Save</Button>
            <Button onPress={() => setModalVisible(false)} color="red">Cancel</Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  searchInput: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  card: {
    marginVertical: 8,
    padding: 10,
    backgroundColor: '#e8f5e9',
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  editButton: {
    backgroundColor: '#ff9800',
  },
  deleteButton: {
    backgroundColor: '#d32f2f',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#2e7d32',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
});

export default InventoryScreen;
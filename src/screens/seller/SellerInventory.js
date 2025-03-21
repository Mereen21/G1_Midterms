import * as React from 'react';
import { View, ScrollView, TextInput, Modal} from 'react-native';
import { Card, Button, Menu, FAB, Text,Snackbar, Chip } from 'react-native-paper';
import { sellerInv } from '../../style/SellerStyles.js/SellerInventoryStyles';
const inventoryData = {
  orders: [
    { key: 1, name: 'Food Tray', quantity: 50,status: 'In-Stock' },
    { key: 2, name: 'Packaging Box', quantity: 100,status: 'In-Stock' },
  ],
  frozen: [
    { key: 3, name: 'Frozen Chicken', quantity: 20, status:'Low Stock' },
    { key: 4, name: 'Frozen Longganisa', quantity: 10, status:'Restock' },
    { key: 5, name: 'Frozen Dumplings', quantity: 20, status:'Low Stock' },
    { key: 6, name: 'Frozen Beef', quantity: 100, status: 'In-Stock' },
  ],
  catering: [
    { key: 7, name: 'Serving Tray', quantity: 30, egress: 20, event: 'Wedding' },
    { key: 8, name: 'Plates', quantity: 100, egress: 80, event: 'Wedding' },
    { key: 9, name: 'Forks', quantity: 100, egress: 70, event: 'Wedding' },
    { key: 10, name: 'Spoons', quantity: 100, egress: 70, event: 'Wedding' },
    { key: 11, name: 'Glass', quantity: 100, egress: 70, event: 'Wedding' },
    { key: 12, name: 'Pitchers', quantity: 20, egress: 20, event: 'Wedding' },
  ],
};

const getStatusStyle = (status) => {
  switch (status) {
    case 'In-Stock':
      return { backgroundColor: 'green', color: 'white' };
    case 'Low Stock':
      return { backgroundColor: 'yellow', color: 'black' };
    case 'Restock':
      return { backgroundColor: 'red', color: 'white' };
    default:
      return { backgroundColor: 'gray', color: 'white' };
  }
};

const InventoryScreen = () => {
  const [visible, setVisible] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState('orders');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [editItem, setEditItem] = React.useState(null);
  const [newItem, setNewItem] = React.useState({ name: '', quantity: '', event: '' });
  const [error, setError] = React.useState('');
  const [deleteModalVisible, setDeleteModalVisible] = React.useState(false);
  const [snackbarVisible, setSnackbarVisible] = React.useState(false);
  const [deleteItem, setDeleteItem] = React.useState(null);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const items = inventoryData[selectedCategory].filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const handleEdit = (item) => {
    setEditItem(item);
    setNewItem({
      name: item.name,
      quantity: String(item.quantity),
      egress: item.egress ? String(item.egress) : '',
      event: item.event || ''
    });
    setModalVisible(true);
  };

  const confirmDelete = (item) => {
    setDeleteItem(item);
    setDeleteModalVisible(true);
  };

  const handleDelete = () => {
    console.log("Deleted:", deleteItem);
    setDeleteModalVisible(false);
    setDeleteItem(null);
  };

  const handleSave = () => {
    let errors = [];
  
    // Require Fields
    if (!newItem.name.trim()) errors.push("Item name is required.");
    if (!newItem.quantity.trim()) errors.push("Quantity is required.");
    
    //Number Fields
    const quantity = parseInt(newItem.quantity, 10);
    const egress = parseInt(newItem.egress, 10) || 0;
  
    if (isNaN(quantity) || quantity < 0) errors.push("Quantity must be a positive number.");
    if (selectedCategory === "catering") {
      if (isNaN(egress) || egress < 0) errors.push("Egress must be a positive number.");
      if (!newItem.event.trim()) errors.push("Event name is required.");
    }
  
    if (errors.length > 0) {
      setError(errors.join("\n"));
      return;
    }
  
    setError("");
    setSnackbarVisible(true);
    console.log(editItem ? 'Updating item' : 'Adding item', newItem);
    
    setModalVisible(false);
    setEditItem(null);
    setNewItem({ name: '', quantity: '', egress: '', event: '' });
  };

  return (
    <View style={sellerInv.container}>
      <Text style={sellerInv.categoryTitle}>{selectedCategory.toUpperCase()} INVENTORY</Text>
      
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
        style={sellerInv.searchInput}
        placeholder="Search items..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <ScrollView>
        {items.map((item) => (
          <Card key={item.key} style={sellerInv.card}>
            <Card.Content>
              <Text style={sellerInv.cardTitle}>{item.name}</Text>
              <Text>Quantity: {item.quantity}</Text>
              {selectedCategory === 'catering' && (
                <>
                  <Text>Egress: {item.egress}</Text>
                  <Text>Total: {item.quantity - item.egress}</Text>
                  <Text>Event: {item.event}</Text>
                </>
              )}
               {(selectedCategory === 'orders' || selectedCategory === 'frozen') && (
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                    <Text>Status: </Text>
                    <Chip style={{ backgroundColor: getStatusStyle(item.status).backgroundColor }}>
                      <Text style={{ color: getStatusStyle(item.status).color }}>{item.status}</Text>
                    </Chip>
                  </View>
                )}
            </Card.Content>
            <Card.Actions>
              <Button mode="contained" style={sellerInv.editButton} onPress={() => handleEdit(item)}>Edit</Button>
              <Button mode="contained" style={sellerInv.deleteButton} onPress={() => confirmDelete(item)}>Delete</Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>

      <FAB
        style={sellerInv.fab}
        icon="plus"
        onPress={() => {
          setEditItem(null);
          setNewItem({ name: '', quantity: '', egress: '', event: '' });
          setModalVisible(true);
        }}
      />


      {/* Edit/Add Modal */}
      <Modal visible={modalVisible} transparent={true}>
        <View style={sellerInv.modalContainer}>
          <View style={sellerInv.modalContent}>
            <Text>{editItem ? 'Edit Item' : 'Add Item'}</Text>

            {/* Display Errors*/}
            {error ? <Text style={sellerInv.errorText}>{error}</Text> : null}

            <TextInput
              placeholder="Item Name"
              value={newItem.name}
              onChangeText={(text) => setNewItem({ ...newItem, name: text })}
            />
            
            <TextInput
              placeholder="Quantity"
              keyboardType="numeric"
              value={newItem.quantity}
              onChangeText={(text) => setNewItem({ ...newItem, quantity: text })}
            />

            {selectedCategory === 'catering' && (
              <>
                <TextInput
                  placeholder="Egress (Used Items)"
                  keyboardType="numeric"
                  value={newItem.egress}
                  onChangeText={(text) => setNewItem({ ...newItem, egress: text })}
                />

                <TextInput
                  placeholder="Event"
                  value={newItem.event}
                  onChangeText={(text) => setNewItem({ ...newItem, event: text })}
                />
              </>
            )}

            <Button onPress={handleSave} style={sellerInv.saveButton} labelStyle={{ color: 'white' }} >Save</Button>
            <Button onPress={() => setModalVisible(false)}>Cancel</Button>
          </View>
        </View>
      </Modal>

         {/* Delete Confirmation Modal */}
         <Modal visible={deleteModalVisible} transparent={true}>
        <View style={sellerInv.modalContainer}>
          <View style={sellerInv.modalContent}>
            <Text>Are you sure you want to delete {deleteItem?.name}?</Text>
            <Button onPress={handleDelete} style={sellerInv.deleteButton} labelStyle={{ color: 'white' }} >Delete</Button>
            <Button onPress={() => setDeleteModalVisible(false)}>Cancel</Button>
          </View>
        </View>
      </Modal>

      {/* Snackbar */}
      <Snackbar visible={snackbarVisible} onDismiss={() => setSnackbarVisible(false)} duration={2000}>
        Changes saved successfully!
      </Snackbar>

    </View>
  );
};


export default InventoryScreen;
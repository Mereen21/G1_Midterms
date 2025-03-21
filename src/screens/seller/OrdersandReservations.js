import React, { useState } from 'react';
import { View, ScrollView, TextInput, Modal } from 'react-native';
import { Card, Button, Menu, FAB, Text, Snackbar, Chip } from 'react-native-paper';
import { sellerInv } from '../../style/SellerStyles.js/SellerInventoryStyles';

const data = {
  orders: [
    { id: 1, customer: 'Juan de la Cruz', date: '2025-03-12', total: '₱550', status: 'For Delivery' },
    { id: 2, customer: 'Maria Clara', date: '2025-03-13', total: '₱500', status: 'In Kitchen' },
  ],
  events: [
    { id: 3, customer:'Crisostomo Ibarra' ,name: 'Wedding Reception', date: '2025-03-12', venue: 'El Patio', status: 'Ongoing' },
    { id: 4,  customer:'Maria Clara', name: 'Corporate Meeting', date: '2025-03-13', venue: 'San Agustin', status: 'TBD' },
  ]
};


const getStatusStyle = (status) => {
  switch (status) {
    case 'Pending': 
      return { backgroundColor: 'yellow', color: 'white' };
    case 'In Kitchen':
      return { backgroundColor: 'orange', color: 'white' };
  case 'Ongoing':
      return { backgroundColor: 'blue', color: 'white' };
    case 'For Delivery':
      return { backgroundColor: 'green', color: 'white' };
    case 'Rescheduled':
      return { backgroundColor: 'red', color: 'white' };
    case 'TBD':
      return { backgroundColor: 'gray', color: 'white' };
  }
};


const OrdersAndEventsScreen = () => {
  const [filter, setFilter] = useState('orders');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [newItem, setNewItem] = useState({ customer: '', date: '', total: '', status: '', name: '', venue: '' });
  const [deleteModalVisible, setDeleteModalVisible] = React.useState(false);
  const [snackbarVisible, setSnackbarVisible] = React.useState(false);
  const [deleteItem, setDeleteItem] = React.useState(null);
  const [dateError, setDateError] = useState('');
  const items = data[filter].filter(item =>
    (item.customer && item.customer.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );
 

 
const isValidDate = (dateString) => {

  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    return false;
  }
  
  const date = new Date(dateString);
  const [year, month, day] = dateString.split('-').map(Number);
  
  return date.getFullYear() === year && 
         date.getMonth() + 1 === month && 
         date.getDate() === day;
};


  const handleEdit = (item) => {
    setEditItem(item);
    setNewItem({ ...item });
    setModalVisible(true);
  };

  const handleSave = () => {
    if (!isValidDate(newItem.date)) {
      setDateError('Invalid date. Use YYYY-MM-DD and ensure it is a real date.');
      return;
    }
  
    setDateError('');
    setSnackbarVisible(true);
    setModalVisible(false);
    setEditItem(null);
    setNewItem({ customer: '', date: '', total: '', status: '', name: '', venue: '' });
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

  const closeModal = () => {
    setModalVisible(false);
    setDateError(''); 
  };
  


  return (
    <View style={sellerInv.container}>
      <Text style={sellerInv.categoryTitle}>{filter.toUpperCase()}</Text>
      
      <Menu visible={false} onDismiss={() => {}} anchor={<Button onPress={() => setFilter(filter === 'orders' ? 'events' : 'orders')}>Switch to {filter === 'orders' ? 'Events' : 'Orders'}</Button>}>
      </Menu>

      <TextInput
        style={sellerInv.searchInput}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <ScrollView>
        {items.map((item) => (
          <Card key={item.id} style={sellerInv.card}>
            <Card.Content>
            <Text style={sellerInv.cardTitle}>{item.customer}</Text>
              {filter === 'orders' ? (
                <>
                  <Text>Order Date: {item.date}</Text>
                  <Text>Total: {item.total}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                    <Text>Status: </Text>
                    <Chip style={{ backgroundColor: getStatusStyle(item.status).backgroundColor }}>
                      <Text style={{ color: getStatusStyle(item.status).color }}>{item.status}</Text>
                    </Chip>
                  </View>
                </>
              ) : (
                <>
                  <Text>Event: {item.name}</Text>
                  <Text>Date: {item.date}</Text>
                  <Text>Venue: {item.venue}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                    <Text>Status: </Text>
                    <Chip style={{ backgroundColor: getStatusStyle(item.status).backgroundColor }}>
                      <Text style={{ color: getStatusStyle(item.status).color }}>{item.status}</Text>
                    </Chip>
                  </View>
                </>
              )}
            </Card.Content>
            <Card.Actions>
              <Button mode="contained" onPress={() => handleEdit(item)}>Edit</Button>
             <Button mode="contained" style={sellerInv.deleteButton} onPress={() => confirmDelete(item)}>Delete</Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>

    {/* <FAB
           style={sellerInv.fab}
           icon="plus"
           onPress={() => {
             setEditItem(null);
             setNewItem({ customer:'' ,name: '', date: '', venue: '', status: ''});
             setModalVisible(true);
           }}
         /> */}

<Modal visible={modalVisible} transparent={true}>
        <View style={sellerInv.modalContainer}>
          <View style={sellerInv.modalContent}>
            <Text>{filter === 'orders' ? 'Order' : 'Event'}</Text>

            {filter === 'orders' ? (
              <>
                <TextInput placeholder="Customer Name" value={newItem.customer} onChangeText={(text) => setNewItem({ ...newItem, customer: text })} />
                <TextInput 
                      placeholder="Date (YYYY-MM-DD)" 
                      value={newItem.date} 
                      onChangeText={(text) => {
                        setNewItem({ ...newItem, date: text });
                        setDateError(''); 
                      }} 
                    />
                    {dateError ? <Text style={{ color: 'red' }}>{dateError}
                </Text> : null}

                <TextInput placeholder="Total" value={newItem.total} onChangeText={(text) => setNewItem({ ...newItem, total: text })} />

              </>
            ) : (
              <>
                <TextInput placeholder="Event Name" value={newItem.name} onChangeText={(text) => setNewItem({ ...newItem, name: text })} />
                <TextInput 
                      placeholder="Date (YYYY-MM-DD)" 
                      value={newItem.date} 
                      onChangeText={(text) => {
                        setNewItem({ ...newItem, date: text });
                        setDateError(''); 
                      }} 
                    />
                    {dateError ? <Text style={{ color: 'red' }}>{dateError}
                </Text> : null}
                <TextInput placeholder="Venue" value={newItem.venue} onChangeText={(text) => setNewItem({ ...newItem, venue: text })} />
              </>
            )}

            <Button onPress={handleSave} style={sellerInv.saveButton} labelStyle={{ color: 'white' }}>Save</Button>
            <Button  onPress={closeModal}>Cancel</Button>
          </View>
        </View>
      </Modal>

      {/* Delete Confirmation Modal */}
               <Modal visible={deleteModalVisible} transparent={true}>
              <View style={sellerInv.modalContainer}>
                <View style={sellerInv.modalContent}>
                  <Text>Are you sure you want to delete {deleteItem?.name}?</Text>
                  <Button onPress={handleDelete} style={sellerInv.deleteButton} labelStyle={{ color: 'white' }} >Delete</Button>
                  <Button  onPress={closeModal}>Cancel</Button>
                </View>
              </View>
            </Modal>

      <Snackbar visible={snackbarVisible} onDismiss={() => setSnackbarVisible(false)} duration={2000} style={sellerInv.saveButton} >
        Changes saved successfully!
      </Snackbar>
    </View>
  );
};

export default OrdersAndEventsScreen;

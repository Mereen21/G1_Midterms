import * as React from 'react';
import { View } from 'react-native';
import { BottomNavigation, Snackbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SellerDashboard from './SellerDashboard';
import SellerInventory from './SellerInventory';
import EditProfileScreen from './EditProfile';

const SellerNav = () => {
  const [index, setIndex] = React.useState(0);
  const [snackbarVisible, setSnackbarVisible] = React.useState(false);


  //Routes and icons for navbar
  const [routes] = React.useState([
    { key: 'dashboard', title: 'Home', icon: 'home' },
    { key: 'orders', title: 'Orders', icon: 'clipboard-text', disabled: true }, 
    { key: 'bookings', title: 'Bookings', icon: 'calendar', disabled: true },
    { key: 'inventory', title: 'Inventory', icon: 'archive' },
    { key: 'customerdatabase', title: 'Customers', icon: 'account-search', disabled: true },
    { key: 'profile', title: 'Profile', icon: 'account' },
  ]);

  //Declare Screens Here
  const renderScene = BottomNavigation.SceneMap({
    dashboard: SellerDashboard,
    inventory: SellerInventory,
    profile: EditProfileScreen,
  });

  const handleIndexChange = (newIndex) => {
    const selectedRoute = routes[newIndex];

    if (selectedRoute.disabled) {
      setSnackbarVisible(true); 
    } else {
      setIndex(newIndex); 
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={handleIndexChange}
        renderScene={renderScene}
        renderIcon={({ route, focused }) => (
          <Icon
            name={route.icon}
            size={24}
            color={focused ? '#2D9C5A' : '#B0B0B0'}
          />
        )}
      />

  {/* Snackbar to Alert Features for show */}
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        action={{
          label: 'Got it!',
          onPress: () => setSnackbarVisible(false),
        }}
        duration={3000}
      >
        🚧 Oops! This button is just for show. Come check back soon! 
      </Snackbar>
    </View>
  );
};

export default SellerNav;

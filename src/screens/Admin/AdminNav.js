import * as React from 'react';
import { View } from 'react-native';
import { BottomNavigation, Snackbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AdminPageScreen from './AdminPageScreen';
import UserAccountManagementScreen from './UserAccountManagementScreen';


const AdminNav = () => {
  const [index, setIndex] = React.useState(0);
  const [snackbarVisible, setSnackbarVisible] = React.useState(false);


  //Routes and icons for navbar
  const [routes] = React.useState([
    { key: 'dashboard', title: 'Home', icon: 'home' },
    { key: 'orders', title: 'Menu', icon: 'clipboard-text', disabled: true },
    { key: 'pos', title: 'POS', icon: 'cash-register', disabled: true },
    { key: 'bookings', title: 'Content', icon: 'calendar', disabled: true },
    { key: 'inventory', title: 'Analytics', icon: 'archive', disabled: true },
    { key: 'usermanage', title: 'User', icon: 'account' },
  ]);

  //Declare Screens Here
  const renderScene = BottomNavigation.SceneMap({
    dashboard: AdminPageScreen,
    usermanage: UserAccountManagementScreen,

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
            color={focused ? '#FFA500' : '#B0B0B0'}
          />
        )}
        barStyle={{ backgroundColor: '#222' }} //lipat nalang sa separate css mamaya
        activeColor="#FFA500"
        inactiveColor="#B0B0B0"
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

export default AdminNav;

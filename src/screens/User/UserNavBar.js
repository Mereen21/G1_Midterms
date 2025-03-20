import * as React from 'react';
import {View} from 'react-native';
import {BottomNavigation, Snackbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserLandingPage from './UserLandingPage';

const UserNavBar = () => {
  const [index, setIndex] = React.useState(0);
  const [snackbarVisible, setSnackbarVisible] = React.useState(false);

  const [routes] = React.useState([
    {key: 'dashboard', title: 'Home', icon: 'home'},
    {key: 'orders', title: 'Orders', icon: 'clipboard-text', disabled: true},
    {key: 'bookings', title: 'Bookings', icon: 'calendar', disabled: true},
    {key: 'inventory', title: 'Inventory', icon: 'archive'},
    {
      key: 'customerdatabase',
      title: 'Customers',
      icon: 'account-search',
      disabled: true,
    },
    {key: 'profile', title: 'Profile', icon: 'account'},
  ]);

  // Corrected Scene Mapping
  const renderScene = ({route}) => {
    switch (route.key) {
      case 'dashboard':
        return <UserLandingPage />;
      default:
        return <View />;
    }
  };

  const handleIndexChange = newIndex => {
    const selectedRoute = routes[newIndex];

    if (selectedRoute.disabled) {
      setSnackbarVisible(true);
    } else {
      setIndex(newIndex);
    }
  };

  return (
    <View style={{flex: 1}}>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={handleIndexChange}
        renderScene={renderScene}
      />

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        action={{
          label: 'Got it!',
          onPress: () => setSnackbarVisible(false),
        }}
        duration={3000}>
        🚧 Oops! This button is just for show. Come check back soon!
      </Snackbar>
    </View>
  );
};

export default UserNavBar;

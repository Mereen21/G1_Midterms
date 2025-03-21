import * as React from 'react';
import {View} from 'react-native';
import {BottomNavigation, Snackbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Correct icon set
import UserLandingPage from './UserLandingPage';
import UserEditProfileScreen from './UserEditProfileScreen';

const UserNavBar = () => {
  const [index, setIndex] = React.useState(0);
  const [snackbarVisible, setSnackbarVisible] = React.useState(false);

  const [routes] = React.useState([
    {key: 'dashboard', title: 'Home', icon: 'home'},
    {
      key: 'orders',
      title: 'Order History',
      icon: 'clipboard-text',
      disabled: true,
    },
    {key: 'bookings', title: 'Bookings', icon: 'calendar', disabled: true},
    {key: 'account', title: 'Account', icon: 'archive'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    dashboard: UserLandingPage,
    orders: () => <View />,
    bookings: () => <View />,
    account:UserEditProfileScreen,
  });

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
        renderIcon={({route, focused}) => (
          <Icon
            name={route.icon}
            size={24}
            color={focused ? '#2D9C5A' : '#B0B0B0'}
          />
        )}
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

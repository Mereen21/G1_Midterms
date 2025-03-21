import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PaperProvider} from 'react-native-paper';
// Screen Imports
import WelcomeScreen from './src/screens/WelcomeScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import UserLandingPage from './src/screens/User/UserLandingPage';
import SellerDashboard from './src/screens/seller/SellerDashboard';
import AdminPageScreen from './src/screens/Admin/AdminPageScreen';
import EditProfileScreen from './src/screens/seller/EditProfile';
import UserEditProfileScreen from './src/screens/User/UserEditProfileScreen';
import UserAccountManagementScreen from './src/screens/Admin/UserAccountManagementScreen';
import AdminNav from './src/screens/Admin/AdminNav';
import SellerNav from './src/screens/seller/SellerNav';
import SellerInventory from './src/screens/seller/SellerInventory';
import UserNavBar from './src/screens/User/UserNavBar';
import OrdersandEventScreen from './src/screens/seller/OrdersandReservations';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaProvider style={{flex: 1}}>
        <GestureHandlerRootView style={{flex: 1}}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="WelcomeScreen"
              screenOptions={{headerShown: false}}>
              <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen
                name="UserLandingPage"
                component={UserLandingPage}
              />
              <Stack.Screen
                name="SellerDashboard"
                component={SellerDashboard}
              />
              <Stack.Screen
                name="AdminPageScreen"
                component={AdminPageScreen}
              />
              <Stack.Screen
                name="EditProfileScreen"
                component={EditProfileScreen}
              />
              <Stack.Screen
                name="UserEditProfileScreen"
                component={UserEditProfileScreen}
              />
              <Stack.Screen
                name="UserAccountManagementScreen"
                component={UserAccountManagementScreen}
              />
              <Stack.Screen name="AdminNav" component={AdminNav} />
              <Stack.Screen name="SellerNav" component={SellerNav} />
              <Stack.Screen
                name="SellerInventoryPage"
                component={SellerInventory}
              />
                <Stack.Screen
                name="OrdersandEventsPage"
                component={OrdersandEventScreen}
              />
              <Stack.Screen name="UserNavBar" component={UserNavBar} />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;

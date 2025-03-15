import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
// Screen Imports
import WelcomeScreen from './src/screens/WelcomeScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import UserLandingPage from './src/screens/User/UserLandingPage';
import SellerDashboard from './src/screens/seller/SellerDashboard';

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
              <Stack.Screen name="UserLandingPage" component={UserLandingPage} />
              <Stack.Screen name="SellerDashboard" component={SellerDashboard} />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;

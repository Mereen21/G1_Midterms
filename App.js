import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Screen Imports
import WelcomeScreen from "./src/screens/WelcomeScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import LoginScreen from "./src/screens/LoginScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}> 
      <GestureHandlerRootView style={{ flex: 1 }}> 
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="WelcomeScreen"
            screenOptions={{ headerShown: false }}
          >
            {/* screen stacks */}
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;

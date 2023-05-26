//important Dependencies
import React from "react";
import { View } from "react-native";

//Navigation Dependencies
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//External Pages
import Landingpage from "./ExternalScreens/Landingpage";
import Loginpage from "./ExternalScreens/Loginpage";
import { Signuppage } from "./ExternalScreens/Signuppage";

//Internal Pages
import HomeScreen from "./InternalScreens/HomeScreen";
import ProfileScreen from "./InternalScreens/ProfileScreen";
import HistoryScreen from "./InternalScreens/HistoryScreen";
import DocumentScreen from "./InternalScreens/DocumentScreen";
import SearchScreen from "./InternalScreens/SearchScreen";

// Import the Status Bar
import { StatusBar } from "expo-status-bar";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
        {/* App Stack */}
        <Stack.Screen name="OnBoarding" component={Landingpage} />
        <Stack.Screen name="LogIn" component={Loginpage} />
        <Stack.Screen name="SignUp" component={Signuppage} />
        {/* This will be the protected route */}
        <Stack.Screen
          name="InternalStack"
          component={Tabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

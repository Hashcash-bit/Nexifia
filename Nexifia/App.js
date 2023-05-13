//important Dependencies
import React from "react";
import { View } from "react-native";

//Navigation Dependencies
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//External Pages
import Landingpage from "./ExternalScreens/Landingpage";

//Internal Pages
import HomeScreen from "./InternalScreens/HomeScreen";
import ProfileScreen from "./InternalScreens/ProfileScreen";
import HistoryScreen from "./InternalScreens/HistoryScreen";
import DocumentScreen from "./InternalScreens/DocumentScreen";
import SearchScreen from "./InternalScreens/SearchScreen";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* App Stack */}
        <Stack.Screen name="OnBoarding" component={Landingpage} />
        <Stack.Screen name="LogIn" component={Landingpage} />
        <Stack.Screen name="DashBoard" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React, { forwardRef, useState } from "react";
// Import React Dependencies
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ViewBase,
  ToastAndroid,
} from "react-native";

// Confirm Screen
import LogoutConfirmationScreen from "./ConfirmLogout/LogoutConfirmationScreen";

// firebase Imports
import { signOut } from "firebase/auth";
import { firebase_auth } from "../firebase";

const HomeScreen = ({ navigation }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  // This is to diable the buttons when the popup happens
  const [disableButtons, setDisableButtons] = useState(false);
  const [blurryScreen, setBlurryScreen] = useState(false);

  // The Updated Confirm Screen will go here
  const handleLogout1 = () => {
    setShowConfirmation(true);
    setDisableButtons(true);
    setBlurryScreen(true);
  };

  const handleLogoutConfirmed = async () => {
    //try and catch logout
    try {
      // signout function goes here
      await signOut(firebase_auth);
      // Where the user should go after loging out
      console.log("Logout Successful");
      Toast.success("You have been logged out");
      navigation.navigate("OnBoarding");
    } catch (error) {
      console.log("Error logging out", error);
    }
  };

  const handleLogoutCancelled = () => {
    setShowConfirmation(false);
    setDisableButtons(false);
    setBlurryScreen(false);
  };

  //LogOut function goes here
  const handleLogout = async () => {
    //try and catch logout
    try {
      // signout function goes here
      await signOut(firebase_auth);
      // Where the user should go after loging out
      console.log("Logout Successful");
      Toast.success("You have been logged out");
      navigation.navigate("OnBoarding");
    } catch (error) {
      console.log("Error logging out", error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#131417",
        fontColor: "white",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("OnBoarding")}
        disabled={disableButtons}
      >
        <Text>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout1} disabled={disableButtons}>
        <Text>Logout</Text>
      </TouchableOpacity>

      {showConfirmation && (
        <LogoutConfirmationScreen
          onLogout={handleLogoutConfirmed}
          onCancel={handleLogoutCancelled}
        />
      )}
      {disableButtons && (
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
          pointerEvents="auto"
        />
      )}
    </View>
  );
};

export default HomeScreen;

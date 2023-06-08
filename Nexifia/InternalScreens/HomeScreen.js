// Important React Dependencies
import React, { forwardRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ViewBase,
  ToastAndroid,
} from "react-native";

// firebase Imports
import { firebase_auth } from "../firebase";
import { TextInput } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    // I am testing the firestore to the see how it works
    // Make a quick input text field and see if it works
    <View
      style={{
        flex: 1,
        backgroundColor: "#131417",
        fontColor: "white",
      }}
    >
      <TextInput  />
      <TouchableOpacity onPress>
        <Text>Test</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

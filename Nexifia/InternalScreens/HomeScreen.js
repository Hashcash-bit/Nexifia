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

const HomeScreen = ({ navigation }) => {

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#131417",
        fontColor: "white",
      }}
    ></View>
  );
};

export default HomeScreen;

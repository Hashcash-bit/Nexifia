import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

const LogoutConfirmationScreen = ({ onLogout, onCancel }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#131417",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99,
        backfaceVisibility: "hidden",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1A1D21",
          width: 300,
          height: 200,
          borderRadius: 25,
          alignSelf: "center",
          display: "flex",
          flexDirection: "column",
          marginTop: '-200%',
        }}
      >
        <Text style={{ color: "white" }}>
          Are you sure you want to{" "}
          <Text style={{ fontWeight: "bold" }}>logout?</Text>
        </Text>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
          <TouchableOpacity
            onPress={onLogout}
            style={{
              borderRadius: 12,

              backgroundColor: "#582FFF",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              width: 80,
              height: 40,
              marginRight: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onCancel}
            style={{
              borderRadius: 12,
              backfaceVisibility: "hidden",
              backgroundColor: "#818385",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              width: 80,
              height: 40,
            }}
          >
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LogoutConfirmationScreen;

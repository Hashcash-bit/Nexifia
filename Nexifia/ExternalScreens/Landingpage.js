// Important React dependencies
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const Landingpage = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#131417",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../assets/NEXIFIA.png")}
          style={{
            width: 217,
            height: 40,
            marginTop: 50,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 0,
        }}
      >
        <Image
          source={require("../assets/phone2.png")}
          style={{
            width: 259,
            height: 530,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        />
      </View>
      <Image
        source={require("../assets/tng.png")}
        style={{
          marginTop: 0,
          width: 120,
          height: 18,
          marginBottom: 43,
        }}
      />
      <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: "#582FFF",
            justifyContent: "center",
            alignItems: "center",
            bottom: 30,
          }}
        >
          <Image source={require("../assets/arrow.png")} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#131417",
    alignContent: "center",
    alignItems: "center",
  },
  title: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    paddingTop: 0,
    marginTop: 0,
    width: 100,
    height: 100,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#582FFF",
    justifyContent: "center",
    alignItems: "center",
    bottom: 30,
  },
  linearGradient: {
    flex: 1,
  },
});
export default Landingpage;

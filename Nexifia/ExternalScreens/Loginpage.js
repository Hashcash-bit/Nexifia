//Important React dependencies
import React from "react";
import { Text, Image, View } from "react-native";

//Firebase Dependencies

const Loginpage = ({ navigation }) => {
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
          // backgroundColor: 'yellow',
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
          source={require("../assets/phonelogin.png")}
          style={{
            width: 259,
            height: 530,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        />
      </View>
    </View>
  );
};

export default Loginpage;

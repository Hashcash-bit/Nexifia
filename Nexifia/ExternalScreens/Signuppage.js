//Important React dependencies
import React from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";

//Database Dependencies

export const Signuppage = ({ navigation }) => {
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
      <ImageBackground
        source={require("../assets/phonesignup.png")}
        style={{
          width: 258, //it was 259
          height: 530, //it was 530
          marginTop: 17,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* I want this to be the two login form input fields */}
        <View
          style={{
            width: 326,
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "column",
            marginTop: -10,
          }}
        >
          <TextInput
            placeholder="Type Your Email Address"
            placeholderTextColor={"#7D7E80"}
            style={{
              marginBottom: 13,
              backgroundColor: "#131417",
              padding: 10,
              borderWidth: 0.5,
              borderColor: "white",
              color: "white",
              fontWeight: "bold",
              borderRadius: 15,
            }}
          />
          <TextInput
            placeholder="Confirm Your Email Address"
            placeholderTextColor={"#7D7E80"}
            style={{
              marginBottom: 13,
              backgroundColor: "#131417",
              padding: 10,
              borderWidth: 0.5,
              borderColor: "white",
              color: "white",
              fontWeight: "bold",
              borderRadius: 15,
            }}
          />
          <TextInput
            placeholder="Create A Password"
            placeholderTextColor={"#7D7E80"}
            style={{
              marginBottom: 13,
              backgroundColor: "#131417",
              padding: 10,
              borderWidth: 0.5,
              borderColor: "white",
              color: "white",
              fontWeight: "bold",
              borderRadius: 15,
            }}
          />
          <TextInput
            placeholder="Confirm Your Password"
            placeholderTextColor={"#7D7E80"}
            style={{
              backgroundColor: "#131417",
              padding: 10,
              borderWidth: 0.5,
              borderColor: "white",
              color: "white",
              fontWeight: "bold",
              borderRadius: 15,
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("OnBoarding")}
          style={{
            // padding: 20,
            paddingBottom: 12,
            paddingTop: 12,
            backgroundColor: "#6C63FF",
            borderRadius: 15,
            width: 150,
            alignContent: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              alignContent: "center",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            ENTER
          </Text>
        </TouchableOpacity>
      </ImageBackground>
      <View>
        <Image
          source={require("../assets/haa.png")}
          style={{
            width: 180,
            height: 43,
            marginTop: 10,
          }}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: "#582FFF",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Image source={require("../assets/arrow.png")} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

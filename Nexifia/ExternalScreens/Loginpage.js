//Important React dependencies
import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";

//Database Dependencies

const Loginpage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
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
        source={require("../assets/phonelogin.png")}
        style={{
          width: 258, //it was 259
          height: 530, //it was 530
          marginTop: 0,
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
            marginTop: 100,
          }}
        >
          <TextInput
            placeholder="Email Address"
            placeholderTextColor={"#7D7E80"}
            value={email} // Initialize this in the code above (the value of email will go to this text input) (UNCOMMENT LATER)
            onChangeText={(text) => setEmail(text)} // This code handles the text change | whenever the input is changed this line of code will pick it up and replace the "text" variable with the value
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
            placeholder="Password"
            placeholderTextColor={"#7D7E80"}
            value={password} // Initialize this in the code above (the value of password will go to this text input) (UNCOMMENT LATER)
            onChangeText={(text) => setPassword(text)} // This code handles the text change | whenever the input is changed this line of code will pick it up and replace the "text" variable with the value
            secureTextEntry
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
          onPress={() => navigation.navigate("InternalStack")} // This is before the logic was inmplemented
          // onPress={() => {}} // This is when firebase auth is implemented
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
          source={require("../assets/hna.png")}
          style={{
            width: 180,
            height: 43,
            marginTop: 10,
          }}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
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
    </KeyboardAvoidingView>
  );
};

export default Loginpage;

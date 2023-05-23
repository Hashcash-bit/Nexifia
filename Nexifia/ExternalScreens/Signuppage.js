//Important React dependencies
import React, { useEffect, useState, useRef } from "react";
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

export const Signuppage = ({ navigation }) => {
  // Initializing the email, password and the confirmPassword using useState
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState(""); // Confirm State
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirm State

  //Time to do some error handling
  const [showErrors, setShowErrors] = useState(false);
  const [errors, setErrors] = useState({});

  const getErrors = (email, confirmEmail, password, confirmPassword) => {
    const errors = {};
    // This is the error handling for the email
    if (!email) {
      // If there is no email value in the text input display the message below
      errors.email = "Please Enter Your Email";
    } else if (!email.includes("@") || !email.includes(".com")) {
      // If there is no @ sign and .com in the email display the message below
      errors.email = "Please Enter a Proper Email (johndoe@whatever.com)";
    }

    //This will be the error handling for the confirmEmail
    //This will be the error handling for the Password
    //This will be the error handling for the confirmPassword
    return errors;
  };

  // To visualize the onPress action of the button
  const handleRegister = () => {
    const errors = getErrors(email, password, confirmPassword);
    if (Object.keys(errors).length > 0) {
      setShowErrors(true);
      setErrors(showErrors && errors);
      console.log(errors);
    }
    console.log("Registered");
  };

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
            keyboardType="email-address"
            value={email}
            onChangeText={(e) => setEmail(e)}
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
            keyboardType="email-address"
            value={confirmEmail}
            onChangeText={(e) => setConfirmEmail(e)}
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
            keyboardType="visible-password"
            value={password}
            onChangeText={(e) => setPassword(e)}
            secureTextEntry
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
            keyboardType="visible-password"
            value={confirmPassword}
            onChangeText={(e) => setConfirmPassword(e)}
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
          // onPress={() => navigation.navigate("OnBoarding")} // for the sake of testing the button functionality
          onPress={() => handleRegister()}
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
    </KeyboardAvoidingView>
  );
};

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
  ToastAndroid,
  ActivityIndicator,
} from "react-native";

//Icons
import { Ionicons } from "@expo/vector-icons";

//Auth Dependencies
import { firebase_auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Loginpage = ({ navigation }) => {
  // Initializing the email, password and the confirmPassword using useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Making sure that the user can see toggle their password
  const [hidePassword, setHidePassword] = useState(true);

  // Some regex error catching const method (pretty cool)--
  const lowercaseRegex = /[a-z]/; //                      |
  const uppercaseRegex = /[A-Z]/; //                      |
  const numberRegex = /[0-9]/; //                         |
  // ------------------------------------------------------

  //Time to do some error handling
  const [showErrors, setShowErrors] = useState(false);
  const [errors, setErrors] = useState({});

  const getErrors = (email, password) => {
    const errors = {};
    // This is the error handling for the email
    if (!email) {
      // If there is no email value in the text input display the message below
      errors.email = "Please enter your email";
    } else if (!email.includes("@") || !email.includes(".com")) {
      // If there is no @ sign and .com in the email display the message below
      errors.email = "Please enter a proper email (johndoe@whatever.com)";
    }

    //This will be the error handling for the Password
    if (!password) {
      // If there is no password in the text field display the message below
      errors.password = "Please enter your password";
    }
    return errors;
  };

  //To visualize the onPress action of the button, hence the console logs at each step
  const handleLogin = async () => {
    //gotta create a try and catch and sign in with email and password
    const errors = getErrors(email, password);
    if (Object.keys(errors).length > 0) {
      setShowErrors(true);
      setErrors(showErrors && errors);
      console.log(errors, email, password);
      Object.values(errors).forEach((errorMsg) => {
        ToastAndroid.show(errorMsg, ToastAndroid.SHORT);
      });
    } else {
      //Try will start Here:
      try {
        // Sign in with email and password
        const response = await signInWithEmailAndPassword(
          firebase_auth,
          email,
          password
        );
        // Handle successful Log in
        ToastAndroid.show("Logged in successfully!", ToastAndroid.SHORT);
        // Redirect or perform any necessary actions
        navigation.navigate("InternalComponents");
        console.log("Login");
        setErrors({});
      } catch (error) {
        //Handle the sign-in errors
        ToastAndroid.show(error.message, ToastAndroid.SHORT);
        alert("Please check you credentials, you may not have and account");
        // To observe the error in the console and debugg
        console.log("Login has failed");
      }
      // No need for a finally block
    }
  };

  //firebase initialization
  const auth = firebase_auth;

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
            autoCapitalize="none"
            placeholder="Email Address"
            placeholderTextColor={"#7D7E80"}
            value={email} // Initialize this in the code above (the value of email will go to this text input) (UNCOMMENT LATER)
            onChangeText={(e) => setEmail(e)} // This code handles the text change | whenever the input is changed this line of code will pick it up and replace the "text" variable with the value
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
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <TextInput
              autoCapitalize="none"
              placeholder="Password"
              placeholderTextColor={"#7D7E80"}
              value={password} // Initialize this in the code above (the value of password will go to this text input) (UNCOMMENT LATER)
              onChangeText={(e) => setPassword(e)} // This code handles the text change | whenever the input is changed this line of code will pick it up and replace the "text" variable with the value
              secureTextEntry={hidePassword ? true : false}
              style={{
                backgroundColor: "#131417",
                padding: 10,
                borderWidth: 0.5,
                borderColor: "white",
                color: "white",
                fontWeight: "bold",
                borderRadius: 15,
                display: "flex",
                width: 326,
                alignSelf: "center",
              }}
            />
            {password.length > 0 && (
              <TouchableOpacity
                onPress={() => setHidePassword(!hidePassword)}
                style={{
                  zIndex: 10,
                  alignSelf: "center",
                }}
              >
                <Ionicons
                  name={hidePassword ? "eye-sharp" : "eye-off-sharp"}
                  style={{
                    fontSize: 15,
                    color: "white",
                    marginLeft: -60,
                    padding: 15,
                    alignSelf: "center",
                  }}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <TouchableOpacity
          // onPress={() => navigation.navigate("InternalStack")} // This is before the logic was implemented
          onPress={() => handleLogin()} // This is when firebase auth is implemented
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

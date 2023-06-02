// Import React Dependencies
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ViewBase,
  ScrollView,
  TextInput,
} from "react-native";

// The picker/date picker
import { Picker } from "@react-native-picker/picker";
import DatePicker from "react-native-datepicker";

// Import firbase
import { firebase_auth } from "../firebase";

const ProfileScreen = () => {
  // The Gender Selector
  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderChange = (itemValue) => {
    setSelectedGender(itemValue);
  };

  // The user
  const [email, setEmail] = useState("");
  useEffect(() => {
    // Retrieve the user's email from Firebase
    const user = firebase_auth.currentUser;
    if (user) {
      const emailParts = user.email.split("@");
      setEmail(emailParts[0]);
    }
  }, []);

  // The Date of Birth
  const [dateOfBirth, setDateOfBirth] = useState("");
  const handleDateOfBirthChange = (text) => {
    // Remove any non-digit characters from the input
    const cleanedText = text.replace(/\D/g, "");

    // Extract year, month, and day values from the cleaned text
    const year = cleanedText.slice(0, 4);
    const month = cleanedText.slice(4, 6);
    const day = cleanedText.slice(6, 8);

    // Validate the month and day values
    const isValidMonth = parseInt(month, 10) >= 1 && parseInt(month, 10) <= 12;
    const isValidDay =
      parseInt(day, 10) >= 1 &&
      parseInt(day, 10) <= new Date(year, parseInt(month, 10), 0).getDate();

    // Check if the cleaned text has a length greater than 4 (indicating the year part is complete)
    // If true, add slashes in the appropriate positions
    let formattedText = cleanedText;
    if (cleanedText.length > 4) {
      if (isValidMonth && isValidDay) {
        formattedText = `${year}/${month}/${day}`;
      } else if (isValidMonth) {
        formattedText = `${year}/${month}/`;
      } else {
        formattedText = `${year}/`;
      }
    }

    setDateOfBirth(formattedText);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#131417",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* This will be the Basic Details View */}
      <View
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            marginTop: 50,
            marginLeft: 30,
            color: "#7d7e7f",
            fontSize: 20,
            fontWeight: "400",
          }}
        >
          Basic Details
        </Text>
        {/* The Full Name View */}
        <View
          style={{
            marginTop: 11,
          }}
        >
          <Text
            style={{
              marginLeft: 30,
              color: "#515254",
              fontSize: 15,
              fontWeight: "400",
            }}
          >
            Full Name
          </Text>
          <TextInput
            placeholder={email}
            placeholderTextColor="#2f3033"
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: "#7d7e7f",
              color: "white",
              borderRadius: 10,
              display: "flex",
              fontWeight: "300",
              width: 300,
              alignSelf: "center",
              marginTop: 4,
            }}
          />
        </View>
        {/* The Date of Birth View */}
        <View
          style={{
            marginTop: 11,
          }}
        >
          <Text
            style={{
              marginLeft: 30,
              color: "#515254",
              fontSize: 15,
              fontWeight: "400",
            }}
          >
            Date of Birth
          </Text>
          <TextInput
            placeholder="yyyy/mm/dd"
            placeholderTextColor="#2f3033"
            value={dateOfBirth}
            onChangeText={handleDateOfBirthChange}
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: "#7d7e7f",
              color: "white",
              borderRadius: 10,
              display: "flex",
              fontWeight: "300",
              width: 300,
              alignSelf: "center",
              marginTop: 4,
            }}
          />
        </View>
        {/* Gender/Sex View */}
        <View
          style={{
            marginTop: 11,
          }}
        >
          <Text
            style={{
              marginLeft: 30,
              color: "#515254",
              fontSize: 15,
              fontWeight: "400",
            }}
          >
            Gender/Sex
          </Text>
          <View>
            <TouchableOpacity>
              <Text>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Female</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* This will be the contact details View */}
        <View>
          <Text>Contact Detail</Text>
          <TextInput placeholder="Phone Number" />
        </View>
        {/* Address View */}
        <View>
          <Text>Address</Text>
          <TextInput placeholder="Street Address" />
          <TextInput placeholder="City" />
          <View>
            <TextInput placeholder="Apt" />
            <TextInput placeholder="Country" />
          </View>
        </View>
      </View>
      {/* This will be the Personal Details View */}
      <View>
        <Text>Personal Details</Text>
        {/* This is the SIN Number View */}
        <View>
          <Text>Social Insurance Number (SIN)</Text>
          <TextInput placeholder="Type in your SIN" />
        </View>
        {/* Ontario Health card View */}
        <View>
          <Text>Ontario Health Insurance Plan (OHIP)</Text>
          <View>
            <TextInput placeholder="OHIP Number" />
            <TextInput placeholder="VI" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

// F
// f

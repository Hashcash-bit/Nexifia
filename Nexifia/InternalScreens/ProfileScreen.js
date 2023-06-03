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
import { KeyboardAvoidingView } from "react-native";

// The picker/date picker
import { Picker } from "@react-native-picker/picker";
import DatePicker from "react-native-datepicker";

// Import firbase
import { firebase_auth } from "../firebase";

const ProfileScreen = () => {
  // The Gender Selector
  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
    console.log("Your gender is: " + gender);
  };

  // The user
  // const [email, setEmail] = useState("");
  // useEffect(() => {
  //   // Retrieve the user's email from Firebase
  //   const user = firebase_auth.currentUser;
  //   if (user) {
  //     const emailParts = user.email.split("@");
  //     setEmail(emailParts[0]);
  //   }
  // }, []);

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
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          height: 50,
          backgroundColor: "#131417",
        }}
      />
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text
          style={{
            // marginLeft: 30,
            color: "#7d7e7f",
            fontSize: 20,
            fontWeight: "400",
            paddingBottom: 10,
          }}
        >
          Basic Details
        </Text>
        {/* This will be the Basic Details View */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: 300,
            // marginLeft: 30,
          }}
        >
          {/* The Full Name View */}
          <View style={styles.subView}>
            <Text style={styles.subHeader}>Full Name</Text>
            <TextInput
              // placeholder={email}
              placeholder="test holder"
              placeholderTextColor="#2f3033"
              style={styles.singleInput}
            />
          </View>
          {/* The Date of Birth View */}
          <View
            style={{
              marginTop: 11,
            }}
          >
            <Text style={styles.subHeader}>Date of Birth</Text>
            <TextInput
              placeholder="yyyy/mm/dd"
              placeholderTextColor="#2f3033"
              value={dateOfBirth}
              onChangeText={handleDateOfBirthChange}
              style={styles.singleInput}
            />
          </View>
          {/* Gender/Sex View */}
          <View
            style={{
              marginTop: 11,
            }}
          >
            <Text style={styles.subHeader}>Gender/Sex</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 4,
                width: "100%",
              }}
            >
              <TouchableOpacity style={styles.genderButton} disabled={true}>
                <TouchableOpacity
                  style={[
                    styles.unselectedButton,
                    selectedGender === "Male" && styles.selectedButton,
                  ]}
                  onPress={() => handleGenderChange("Male")}
                />
                <Text
                  style={{
                    fontWeight: "300",
                    color: "white",
                  }}
                >
                  Male
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.genderButton} disabled={true}>
                <TouchableOpacity
                  style={[
                    styles.unselectedButton,
                    selectedGender === "Female" && styles.selectedButton,
                  ]}
                  onPress={() => handleGenderChange("Female")}
                />
                <Text
                  style={{
                    fontWeight: "300",
                    color: "white",
                  }}
                >
                  Female
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* This will be the contact details View */}
          <View
            style={{
              marginTop: 11,
            }}
          >
            <Text style={styles.subHeader}>Contact Detail</Text>
            <TextInput
              placeholder="Phone Number"
              style={styles.singleInput}
              placeholderTextColor="#2f3033"
            />
          </View>
          {/* Address View */}
          <View style={{ marginTop: 11 }}>
            <Text style={styles.subHeader}>Address</Text>
            <TextInput
              placeholder="Street Address + Unit #"
              style={styles.singleInput}
              placeholderTextColor="#2f3033"
            />
            <TextInput
              placeholder="City"
              style={styles.singleInputAddress}
              placeholderTextColor="#2f3033"
            />
            <View
              style={{
                marginTop: 8,
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                placeholder="Postal Code"
                placeholderTextColor="#2f3033"
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: "#7d7e7f",
                  color: "white",
                  borderRadius: 10,
                  display: "flex",
                  fontWeight: "300",
                  width: 102,
                  alignSelf: "center",
                  textAlign: "center",
                }}
              />
              <TextInput
                placeholder="Country"
                placeholderTextColor="#2f3033"
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: "#7d7e7f",
                  color: "white",
                  borderRadius: 10,
                  display: "flex",
                  fontWeight: "300",
                  width: 178,
                  alignSelf: "center",
                }}
              />
            </View>
          </View>
        </View>
        {/* This will be the Personal Details View */}
        <Text
          style={{
            color: "#7d7e7f",
            fontSize: 20,
            fontWeight: "400",
            marginTop: 11,
          }}
        >
          Personal Details
        </Text>
        <View
          style={{
            marginTop: 10,
            width: 300,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          {/* This is the SIN Number View */}
          <View style={styles.subView}>
            <Text style={styles.subHeader}>
              Social Insurance Number{" "}
              <Text style={{ fontWeight: "bold" }}>(SIN)</Text>
            </Text>
            <TextInput
              placeholder="Type in your SIN"
              style={styles.singleInput}
              placeholderTextColor="#2f3033"
            />
          </View>
          {/* Ontario Health card View */}
          <View style={styles.subView}>
            <Text
              style={{
                color: "#515254",
                fontSize: 15,
                fontWeight: "400",
                marginTop: 11,
                alignSelf: "flex-start",
              }}
            >
              Ontario Health Insurance Plan{" "}
              <Text style={{ fontWeight: "bold" }}>(OHIP)</Text>
            </Text>
            <View
              style={{
                marginTop: 8,
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <TextInput
                placeholder="OHIP Number"
                placeholderTextColor="#2f3033"
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: "#7d7e7f",
                  color: "white",
                  borderRadius: 10,
                  display: "flex",
                  fontWeight: "300",
                  width: 230,
                }}
              />
              <TextInput
                placeholder="VI"
                placeholderTextColor="#2f3033"
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: "#7d7e7f",
                  color: "white",
                  borderRadius: 10,
                  display: "flex",
                  fontWeight: "300",
                  width: 50,
                  textAlign: "center",
                  marginLeft: 20,
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            // marginLeft: 30,
            marginTop: 21,
            width: 300,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              paddingBottom: 12,
              paddingTop: 12,
              backgroundColor: "#0708c1",
              borderRadius: 15,
              width: 140,
              alignContent: "center",
              justifyContent: "center",
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
              Submit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 12,
              borderRadius: 15,
              width: 140,
              alignContent: "center",
              justifyContent: "center",
              borderColor: "#818385",
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                color: "#818385",
                fontWeight: "bold",
                alignContent: "center",
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              Reset
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderTopColor: "white",
            borderTopWidth: StyleSheet.hairlineWidth,
            width: 300,
            marginTop: 11,
            // marginLeft: 30,
            justifyContent: "center",
            textAlign: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "#666768",
              marginTop: 5,
            }}
          >
            Press to <Text style={{ fontWeight: "bold" }}>logout</Text>
          </Text>
        </View>
        <View
          style={{
            width: 300,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            marginTop: 11,
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#6C63FF",
              paddingBottom: 12,
              paddingTop: 12,
              borderRadius: 15,
              width: 140,
              alignContent: "center",
              justifyContent: "center",
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
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#131417",
    flexDirection: "column",
    paddingBottom: 20,
  },
  genderButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#7d7e7f",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    width: 140,
    verticalAlign: "middle",
  },
  unselectedButton: {
    borderWidth: 1,
    width: 20,
    height: 20,
    borderColor: "white",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    alignSelf: "center",
  },
  selectedButton: {
    backgroundColor: "#0708c1",
    borderWidth: 2,
  },
  //Lets make the styling easier
  //The styling for the View encasing the headers and text fields
  subView: {
    marginTop: 1,
  },
  //Subheader styles (Full Name, DOB, Gender/Sex.....)
  subHeader: {
    color: "#515254",
    fontSize: 15,
    fontWeight: "400",
  },
  // Single text input fields styles
  singleInput: {
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
    // marginLeft: 30,
  },
  singleInputAddress: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#7d7e7f",
    color: "white",
    borderRadius: 10,
    display: "flex",
    fontWeight: "300",
    width: 300,
    alignSelf: "center",
    marginTop: 8,
  },
});

export default ProfileScreen;

// F
// f

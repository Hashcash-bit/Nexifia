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
            style={{
              marginBottom: 13,
              backgroundColor: "#131417",
              padding: 10,
              borderWidth: 1,
              borderColor: "white",
              color: "white",
              fontWeight: "bold",
              borderRadius: 15,
            }}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={"#7D7E80"}
            style={{
              backgroundColor: "#131417",
              padding: 10,
              borderWidth: 1,
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
            padding: 20,
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
            marginTop: 20,
          }}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("OnBoarding")}>
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

export default Loginpage;
// //Important React dependencies
// import React from "react";
// import { Text, Image, View, TouchableOpacity, TextInput, ImageBackground } from "react-native";

// //Database Dependencies

// const Loginpage = ({ navigation }) => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         display: "flex",
//         flexDirection: "column",
//         backgroundColor: "#131417",
//         alignContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <View
//         style={{
//           height: 100,
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Image
//           source={require("../assets/NEXIFIA.png")}
//           style={{
//             width: 217,
//             height: 40,
//             marginTop: 50,
//           }}
//         />
//       </View>
//       <View
//         style={{
//           flex: 1,
//           justifyContent: "center",
//           alignItems: "center",
//           zIndex: -10,
//         }}
//       >
//         <ImageBackground
//           source={require("../assets/phonelogin.png")}
//           style={{
//             width: 258, //it was 259
//             height: 530, // it was 530
//             justifyContent: "flex-end",
//             alignItems: "center",
//             zIndex: -10,
//             marginBottom: 23,
//           }}
//         />
//       </View>
//       <View>
//         <Image
//           source={require("../assets/hna.png")}
//           style={{
//             width: 180,
//             height: 43,
//             bottom: 43,
//           }}
//         />
//       </View>
//       <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
//         <View
//           style={{
//             width: 60,
//             height: 60,
//             borderRadius: 30,
//             backgroundColor: "#582FFF",
//             justifyContent: "center",
//             alignItems: "center",
//             bottom: 0,
//             top: -35,
//             left: -30,
//             position: "absolute",
//           }}
//         >
//           <Image source={require("../assets/arrow.png")} />
//         </View>
//       </TouchableOpacity>
//       {/* I want this to be the two login form input fields */}
//       <View
//         style={{
//           zIndex: 9,
//           backgroundColor: "yellow",
//           width: 326,
//           bottom: 400,
//           justifyContent: "space-between",
//         }}
//       >
//         <TextInput placeholder="Email Address"></TextInput>
//         <TextInput placeholder="Password"></TextInput>
//       </View>
//     </View>
//   );
// };

// export default Loginpage;

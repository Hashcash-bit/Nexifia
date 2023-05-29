// Import React Dependencies
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ViewBase,
} from "react-native";

//Import the navigation bar

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#131417",
        fontColor: "white",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("OnBoarding")}>
        <Text>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("OnBoarding")}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

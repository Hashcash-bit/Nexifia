// Necessary Dependencies
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// Screens
import HomeScreen from "../InternalScreens/HomeScreen";
import SearchScreen from "../InternalScreens/SearchScreen";
import DocumentScreen from "../InternalScreens/DocumentScreen";
import HistoryScreen from "../InternalScreens/HistoryScreen";
import ProfileScreen from "../InternalScreens/ProfileScreen";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -25,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 40,
        backgroundColor: "#1D1F24",
        paddingLeft: 5,
        paddingTop: 5,
        ...styles.shadow,
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 35,
          backgroundColor: "#582FFF",
        }}
      >
        {children}
      </View>
    </View>
  </TouchableOpacity>
);

const Tabs = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          // position: "absolute",
          backgroundColor: "#1D1F24",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          borderRadius: 0,
          height: 70,
          borderTopColor: "#1D1F24",
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 0,
                borderTopColor: focused ? "white" : "1D1F24",
                borderTopWidth: focused ? 2 : 0,
                height: 72,
                width: 50,
              }}
            >
              <Image
                source={require("../assets/house.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "white" : "#676D75",
                }}
              />
              <Text
                style={{
                  color: focused ? "white" : "#676D75",
                  fontSize: 12,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 0,
                borderTopColor: focused ? "white" : "1D1F24",
                borderTopWidth: focused ? 2 : 0,
                height: 72,
                width: 50,
              }}
            >
              <Image
                source={require("../assets/search.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "white" : "#676D75",
                }}
              />
              <Text
                style={{
                  color: focused ? "white" : "#676D75",
                  fontSize: 12,
                }}
              >
                Search
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Document"
        component={DocumentScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/doc.png")}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                position: "absolute",
                left: 17,
                tintColor: focused ? "white" : "#676D75",
              }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 0,
                borderTopColor: focused ? "white" : "1D1F24",
                borderTopWidth: focused ? 2 : 0,
                height: 72,
                width: 50,
              }}
            >
              <Image
                source={require("../assets/clock.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "white" : "#676D75",
                }}
              />
              <Text
                style={{
                  color: focused ? "white" : "#676D75",
                  fontSize: 12,
                }}
              >
                History
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 0,
                borderTopColor: focused ? "white" : "1D1F24",
                borderTopWidth: focused ? 2 : 0,
                height: 72,
                width: 50,
              }}
            >
              <Image
                source={require("../assets/user.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "white" : "#676D75",
                }}
              />
              <Text
                style={{
                  color: focused ? "white" : "#676D75",
                  fontSize: 12,
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 8,
  },
});

export default Tabs;

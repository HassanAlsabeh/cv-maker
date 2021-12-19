import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import Chat from "../pages/Chat/Chat";
import UserInfo from "../pages/User_Info/UserInfo";
import Register from "../pages/Register/Register";
import Enrollments from "../pages/Enrollments/Enrollments";
import Skills from "../pages/Skills/Skills";
import Experience from "../pages/Experience/Experience";
import Language from "../pages/Languages/Languages";
import Interests from "../pages/Interests/Interests";
import Cv1 from "../pages/CvTemplates/Cv1";
import Cv2 from "../pages/CvTemplates/Cv2";
import ChatList from "../pages/Chat/Chatlist";
import Viewuser from "../pages/CompanyPage/Viewuser";
import Update from "../pages/Update/Update";
import Cvpicker from "../pages/CvTemplates/Cvpicker";
import Chatcompany from "../pages/CompanyPage/Chatcompany";
// import UpdateUser from "../pages/Update/UpdateUserInfo";
import UpdateInterests from "../pages/Update/UpdateInterests";
import UpdateSkills from "../pages/Update/UpdateSkills";
import CompanyPage from "../pages/CompanyPage/CompanyPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Icon } from "react-native-elements";
import { TouchableOpacity, Alert } from "react-native";
import UpdateUserInfo from "../pages/Update/UpdateUserInfo";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const logoutask = () =>
  Alert.alert("Alert ", "Are you sure you want to exit", [
    {
      text: "No",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    {
      text: "Exit",

      onPress: () => {
        dispatch(logoutUser(navigation));
      },
    },
  ]);

const TabPages = ({ navigation }) => (
  <Tab.Navigator
    initialRouteName="ProfilePage"
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        height: 50,
        paddingHorizontal: 5,
        paddingTop: 0,
        backgroundColor: "#3a6ee8",
        position: "absolute",
        borderTopWidth: 0,
      },
      tabBarLabel: () => {
        return null;
      },
      pressColor: "yellow",
    }}
  >
    <Tab.Screen
      name="ProfilePage"
      component={ProfilePage}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="home-outline"
            color={"black"}
            size={30}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Messages"
      component={Messages}
      screenOptions={{
        headerShown: false,
      }}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="chat" color={"black"} size={30} />
        ),
      }}
    />
  </Tab.Navigator>
);

const Messages = () => (
  <Stack.Navigator
    initialRouteName="ChatList"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name="ChatList"
      component={ChatList}
      screenOptions={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="Chat" component={Chat} />
  </Stack.Navigator>
);

const ProfilePage = () => (
  <Stack.Navigator initialRouteName="Cv1">
    <Stack.Screen name="Cv1" component={Cv1} />
    <Stack.Screen name="Cv2" component={Cv2} />

    {/* <Stack.Screen name="UpdateUser" component={UpdateUser} /> */}
    <Stack.Screen name="UpdateInterests" component={UpdateInterests} />
    <Stack.Screen name="UpdateSkills" component={UpdateSkills} />
    <Stack.Screen name="Update" component={Update} />
  </Stack.Navigator>
);

const HomeStack = ({ children }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ title: "Home" }, { headerShown: false })}
        />
        {/* <Stack.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={({ title: "ProfilePage" }, { headerShown: false })}
        /> */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="UserInfo" component={UserInfo} />
        <Stack.Screen name="Enrollments" component={Enrollments} />
        <Stack.Screen name="Skills" component={Skills} />
        <Stack.Screen name="Cvpicker" component={Cvpicker} />
        <Stack.Screen name="Experience" component={Experience} />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="Interests" component={Interests} />
        <Stack.Screen name="CompanyPage" component={CompanyPage} />
        <Stack.Screen name="Viewuser" component={Viewuser} />
        <Stack.Screen name="Chatcompany" component={Chatcompany} />

        <Stack.Screen
          name="TabPages"
          component={TabPages}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

      {children}
    </NavigationContainer>
  );
};

export default HomeStack;

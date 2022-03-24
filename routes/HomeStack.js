import React from "react";
import { useNavigation } from "@react-navigation/core";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import List from "../components/List/List";
import HomeScreen from "../components/HomeScreen/HomeScreen";
import Header from "../components/Header/Header";
import StudentDetail from "../components/StudentDetail/StudentDetail";
import LogoTitle from "../components/LogoTitle/LogoTitle";
import Login from "../components/Login/Login";
import Profile from "../components/Profile/Profile";
import ApplyBussPass from "../components/ApplyBussPass/ApplyBussPass";
import BussPass from "../components/BussPass/BussPass";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // title: 'Home', //Set Header Title
          headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor: "#FFB423",
          },
          headerShadowVisible: false, //to hide shadow of header
          headerRight: () => <Header />,
        }}
      />
      <Stack.Screen
        name="List"
        component={List}
        options={{
          title: "StudentList", //Set Header Title
          headerRight: () => <Header />,
        }}
      />

      <Stack.Screen
        name="studentDetail"
        component={StudentDetail}
        options={{
          title: "StudentDetail", //Set Header Title
          headerRight: () => <Header />,
        }}
      />
      <Stack.Screen
        name="AllStudent"
        component={List}
        options={{
          title: "StudentDetail", //Set Header Title
          headerRight: () => <Header />,
        }}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{
          title: "Profile", //Set Header Title
          headerRight: () => <Header />,
        }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="apply-buss-pass"
        component={ApplyBussPass}
        options={{
          title: "Apply", //Set Header Title
          headerRight: () => <Header />,
        }}
      />
      <Stack.Screen
        name="buss-pass"
        component={BussPass}
        options={{
          title: "Buss Pass", //Set Header Title
          headerRight: () => <Header />,
        }}
      />
    </Stack.Navigator>
  );
}

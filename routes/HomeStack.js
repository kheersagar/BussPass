import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import List from "../components/List/List";
import HomeScreen from "../components/HomeScreen/HomeScreen";
import Header from "../components/Header/Header";
import StudentDetail from "../components/StudentDetail/StudentDetail";
import LogoTitle from "../components/LogoTitle/LogoTitle";

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
          headerShadowVisible:false,  //to hide shadow of header
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
    </Stack.Navigator>
  );
}

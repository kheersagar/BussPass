import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import style from "./Studentstyle";

export default function StudentDetail({ route }) {
  return (
    <View style={style.StudentDetail_main_container}>
      <LinearGradient
        colors={["#FFB423", "#FDDB3A"]}
        start={{ x: 0, y: 0.38 }}
        style={{ width: "100%", height: "100%", borderRadius: 10 }}
      >
        <View style={style.first_section}>
          <View style={{ flex: 3,flexDirection:'row', justifyContent: "center" }}>
            <Image
              source={require("../../Image/profile.jpg")}
              style={style.profile_image}
              resizeMode="cover"
            />
          </View>
          <View
            style={style.first_section_name}
            style={{ flex: 1, justifyContent: "flex-start" }}
          >
            <Text style={style.text}>{route.params.name}</Text>
          </View>
          <View style={style.borderLine}></View>
        </View>
        <View style={style.second_section}>
          <Text style={style.text}>Branch </Text>
          <Text style={style.text}>Semester </Text>
          <Text style={style.text}>Enrollement No.</Text>
          <Text style={style.text}>Contact No.</Text>
          <Text style={style.text}>Pickup Point</Text>
        </View>
        <View style={style.third_section}>
          <Text>a</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

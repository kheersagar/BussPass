import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  Alert,
  ScrollView,
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { MyContext } from "../../App";
import style from "./Studentstyle";

import axios from "axios";

function onClickHandler(message) {
  Alert.alert("Are you sure ?", message, [
    { text: "Yes", onPress: () => console.log("Yes Pressed") },
    { text: "No", onPress: () => console.log("No Pressed") },
  ]);
}
function Detail({ value, title }) {
  return (
    <View style={style.Detail_row}>
      <View style={{ flex: 1 }}>
        <View>
          <Text style={style.Detail_row_title}>{title} </Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View>
          <Text style={style.Detail_row_value}>{value} </Text>
        </View>
      </View>
    </View>
  );
}
export default function StudentDetail({ route }) {
  var data = [
    {
      id: 1,
      title: "Branch",
      value: "B.Tech(Cse)",
    },
    {
      id: 2,
      title: "Semester",
      value: "5th",
    },
    {
      id: 3,
      title: "Enrollment No.",
      value: "01ug19020068",
    },
    {
      id: 4,
      title: "Bus No.",
      value: "7",
    },
    {
      id: 5,
      title: "Pickup Point",
      value: "Raigarh",
    },
  ];
  const { currentStudentData } = useContext(MyContext);
  const { name, image } = currentStudentData;
  
  // useEffect(async ()=>{
  //   const newUser = {username: 'kheer',
  //   salt: '10',
  //   password: '12345',
  //   role: 'student',
  //   email: 'sad@sasd.com',
  //   branch:'CSE',
  //   semester: 6,
  //   phone_no: 2311312,
  //   address: 'asdasd',
  //   bus_bo: 7}
  //   try{
  //     const res = await axios.post("http://192.168.129.20:8080/sign-in",newUser);
  //     console.log(res);
  //   }catch(e){
  //     console.log(e);
  //   }
  // },[])
  
  return (
    <View style={style.StudentDetail_main_container}>
      <ScrollView>
        <LinearGradient
          colors={["#FFB423", "#FDDB3A"]}
          start={{ x: 0, y: 0.38 }}
          style={{
            flex:1,
            borderRadius: 10,
          }}
        >
          <View style={style.first_section}>
            <Image
              source={{
                uri: image,
              }}
              style={style.profile_image}
              resizeMode="cover"
            />
            {/* name */}
            <Text style={style.text}>{name}</Text>
          </View>
          <View style={style.second_section}>
            <FlatList
              data={data}
              keyExtractor={data.id}
              renderItem={({ item }) => (
                <Detail title={item.title} value={item.value} />
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
          <View style={style.receipt_image_section}>
            <Image
              source={{
                uri: "https://templates.invoicehome.com/cash-receipt-template-us-classic-white-receipt-750px.png",
              }}
              style={style.receipt_image}
              resizeMode="contain"
            />
          </View>
          <View style={style.third_section}>
            <TouchableOpacity
              style={style.decline}
              onPress={() => onClickHandler("Decline")}
            >
              <Text style={style.profile_button}>Decline</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.approve}
              onPress={() => onClickHandler("Approve")}
            >
              <Text style={style.profile_button}>Approve</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
}

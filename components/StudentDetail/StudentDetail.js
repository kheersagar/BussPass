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
import ModalReceipt from "../ModalReceipt/ModalReceipt";

function onClickHandler(message,dispatch,_id) {
  if(message === 'Approve'){    
    Alert.alert("Are you sure ?", message, [
      { text: "Yes", onPress: () => dispatch({type:'BUSS_PASS_APPROVED',payload:2,_id:_id})},
      { text: "No", onPress: () => console.log() },
    ]);
  }else{
    Alert.alert("Are you sure ?", message, [
      { text: "Yes", onPress: () => dispatch({type:'BUSS_PASS_APPROVED',payload:3,_id:_id})},
      { text: "No", onPress: () => console.log() },
    ]);
  }
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


  const { currentStudentData,dispatch } = useContext(MyContext);

  const { _id,username,first_name,last_name,address,branch,bus_no,email,phone_no,pickup_point,semester,receipt_img,profile_img } = currentStudentData;
  
  var data = [
    {
      id: 1,
      title: "Branch",
      value: branch,
    },
    {
      id: 2,
      title: "Semester",
      value: `${semester}th`,
    },
    {
      id: 3,
      title: "Enrollment No.",
      value: username,
    },
    {
      id: 4,
      title: "Bus No.",
      value: bus_no,
    },
    {
      id: 5,
      title: "Pickup Point",
      value: pickup_point,
    },
  ];
  useEffect(()=>{
    dispatch({type:'ModalImage',payload:`http://192.168.129.20:8080/${receipt_img}`});
  },[])

console.log(profile_img)  

  return (
    <View style={style.StudentDetail_main_container}>
      <ModalReceipt />
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
            {profile_img  ? 
            <Image
              source={{uri:`http://192.168.129.20:8080/${profile_img}`}}
              style={style.profile_image}
              resizeMode="cover"
            />
            :
            <Image
              source={require("../../Image/male_profile.png")}
              style={style.profile_image}
              resizeMode="cover"
            />
            }
            {/* name */}
            <Text style={style.text}>{first_name}</Text>
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
          <TouchableOpacity onPress={()=>{
              dispatch({type:'ModalReceiptVisible'})
            }}>  
            {receipt_img ?
            <Image
              source={{
                uri: `http://192.168.129.20:8080/${receipt_img}`,
              }}
              style={style.receipt_image}
              resizeMode="contain"
            />
            : <Text>No receipt Found</Text>}
            </TouchableOpacity>
          </View>
          <View style={style.third_section}>
            <TouchableOpacity
              style={style.decline}
              onPress={() => onClickHandler("Decline",dispatch,_id)}
            >
              <Text style={style.profile_button}>Decline</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.approve}
              onPress={() => onClickHandler("Approve",dispatch,_id)}
            >
              <Text style={style.profile_button}>Approve</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
}

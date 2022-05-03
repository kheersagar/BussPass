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
import { HOST_URL } from "../../variables";
import ModalDecline from "../ModalDecline/ModalDecline";
import ModalSuccess from "../ModalDecline/ModalSuccess";

function onClickHandler(message,dispatch,_id) {
  if(message === 'Approve'){    
    Alert.alert("Are you sure ?", message, [
      { text: "Yes", onPress: () => dispatch({type:'BUSS_PASS_APPROVED',payload:2,_id:_id,reason:''})},
      { text: "No", onPress: () => console.log() },
    ]);
  }else{
    dispatch({type:'ModalDeclineVisible'})
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

  const { _id,username,first_name,last_name,address,branch,bus_no,email,phone_no,pickup_point,semester,receipt_img,profile_img,status,decline_reason } = currentStudentData;
  
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
    dispatch({type:'ModalImage',payload:`${HOST_URL}/${receipt_img}`});
  },[])

console.log(profile_img)  

  return (
    <View style={style.StudentDetail_main_container}>
      <ModalReceipt />
      <ModalDecline />
      <ModalSuccess/>
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
              source={{uri:profile_img}}
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
              scrollEnabled={false}
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
                uri: receipt_img,
              }}
              style={style.receipt_image}
              resizeMode="contain"
            />
            : <View style={{justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:22,fontWeight:'bold'}}>No receipt Found</Text>
            </View>}
            </TouchableOpacity>
          </View>
          <View style={[style.reason,{display: decline_reason ? null : 'none'}]} >
              <Text style={style.reason_title}>Reason:</Text>
              <Text style={style.reason_text}>{decline_reason}</Text>
          </View>
          <View style={style.third_section}>
            <TouchableOpacity
              style={[style.decline,{display: status === 2  ? 'none' : null }]}
              disabled={status === 3}
              onPress={() => onClickHandler("Decline",dispatch,_id)}
            >
              <Text style={style.profile_button}>{status  === 3 ? 'Declined' : 'Decline'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[style.approve,{display: status === 3 ? 'none' : null }]}
              disabled={status === 2}
              onPress={() => onClickHandler("Approve",dispatch,_id)}
            >
              <Text style={style.profile_button}>{status === 2 ? 'Approved' :'Approve' }</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
}

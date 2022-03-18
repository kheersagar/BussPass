import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import * as ImagePicker from "expo-image-picker";

import { ScaledSheet } from "react-native-size-matters";
import { LinearGradient } from "expo-linear-gradient";
import { MyContext } from "../../App";
import ModalReceipt from "../ModalReceipt/ModalReceipt";

export default function ApplyBussPass() {

  const {dispatch,image} = useContext(MyContext);

  
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

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      dispatch({type:'ModalImage',payload:result.uri});
    }
  };

  return (
    <View style={style.StudentDetail_main_container}>
      <ScrollView>
      <ModalReceipt />
        <LinearGradient
          colors={["#FFB423", "#FDDB3A"]}
          start={{ x: 0, y: 0.38 }}
          style={{
            flex: 1,
            borderRadius: 10,
          }}
        >
          <View style={style.first_section}>
            <Image
              source={{
                uri: "https://media-exp1.licdn.com/dms/image/C5603AQEkuyp3J4Tirg/profile-displayphoto-shrink_800_800/0/1608468923158?e=1652313600&v=beta&t=uKU4zthYP5GoM4HDeYHXweIxAn45OlmTWtqth-GEAfQ",
              }}
              style={style.profile_image}
              resizeMode="cover"
            />
            {/* name */}
            <Text style={style.text}>asds</Text>
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
            <TouchableOpacity style={style.pickImage_btn} onPress={pickImage}>
              <Image
                source={require("../../Image/Icons/edit_img.png")}
                style={{ width: 40, height: 40 }}
              />
              <Text style={style.pickImage_btn_text}>
                Upload bus receipt
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
              dispatch({type:'ModalReceiptVisible'})
            }}>              
            {image && (
              <Image
                source={{ uri: image }}
                style={style.uploaded_receipt}
              />
            )}
            </TouchableOpacity>
          </View>
          <View style={style.third_section}>
            <TouchableOpacity
              style={style.apply_btn}
              onPress={()=>{
                dispatch({type:'APPLY_BUSS_PASS'})
              }}
            >
              <Text style={style.apply_btn_text}>Apply</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
}

const style = ScaledSheet.create({
  StudentDetail_main_container: {
    flex: 1,
    marginTop: "10@s",
    marginBottom: "10@s",
    marginHorizontal: "10@s",
  },
  first_section: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: "10@s",
  },
  text: {
    fontWeight: "bold",
    fontSize: "18@s",
    marginTop: "10@s",
  },
  profile_image: {
    width: "100%",
    height: 250,
    borderRadius: "10@s",
    borderBottomLeftRadius: "30@s",
    borderBottomRightRadius: "30@s",
  },
  second_section: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: "20@s",
    marginTop: "10@s",
  },
  third_section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: "10@s",
  },
  pickImage_btn: {
    flex:1,
    flexDirection:'row',
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.74)",
    borderRadius: 10,
    textAlign: "center",
    justifyContent: 'space-evenly',
    alignItems: "center",
    paddingVertical:10,
  },
  pickImage_btn_text: {
    color: "white",
    fontWeight: "600",
    fontSize: "16@s",
  },
  apply_btn_text: {
    alignItems: "center",
    fontSize: "22@s",
    fontWeight: "bold",
    color: "white",
  },
  Detail_row_title: {
    fontSize: "18@s",
    marginTop: "10@s",
  },
  Detail_row_value: {
    fontSize: "15@s",
    fontWeight: "bold",
  },
  Detail_row: {
    flex: 1,
    flexDirection: "row",
    borderTopWidth: "1@s",
    paddingBottom: "5@s",
    borderColor: "gray",
  },
  receipt_image_section: {
    paddingHorizontal: "10@s",
    marginVertical:10,
  },
  uploaded_receipt:{
    marginVertical:10,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:200,
  },
  apply_btn:{
    backgroundColor:'#102243',
    paddingHorizontal:20,
    paddingVertical:10,
    width:180,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center'
  }
});
import { StyleSheet, Text, View, Image,TouchableOpacity,ActivityIndicator } from "react-native";
import React, { useContext, useEffect, useRef } from "react";

import * as ImagePicker from "expo-image-picker";

//
import { ScaledSheet } from "react-native-size-matters";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { MyContext } from "../../App";

export default function Profile() {

  const {userData,profileImage,dispatch} = useContext(MyContext);

  if(userData == undefined){
    return   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><ActivityIndicator color='white'/></View>
  }

  useEffect(() => {
      return () => {
        //runs when component unmounts
          dispatch({type:'CLEAR_PROFILE'})
      };
  }, []);
  const { _id,username,first_name,last_name,address,branch,bus_no,email,phone_no,pickup_point,semester,receipt_img } = userData;
  


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });


    if (!result.cancelled) {
      dispatch({type:'PROFILE_IMAGE',payload:result.uri});
    }
  };


  return (
    <View style={styles.profile_container}>
    <ScrollView >
      <View style={styles.image_section}>
        {userData.profile_img ?  (
          <Image
          source={{uri:`http://192.168.129.20:8080/${userData.profile_img}`}}
          style={styles.profile_image}
        />
        ) : 
        <Image
          source={require("../../Image/male_profile.png")}
          style={styles.profile_image}
        />
        }

        {profileImage && (
          <>
          <Text style={styles.new_image_text}> New Image</Text>
          <Image
          source={{uri:profileImage}}
          style={styles.profile_image}
        />
        </>
        )}
        <TouchableOpacity style={{position:'absolute',bottom:-15}} onPress={pickImage}>
          <Image source={require("../../Image/Icons/edit_img.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.input_field_section}>
        {/* 1 */}
        <View style={styles.text_input}>
          <View>
            <Text>Name</Text>
            <TextInput  placeholder={first_name + " " + last_name} style={styles.input} />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Image
              source={require("../../Image/Icons/edit.png")}
              style={styles.edit_icon}
            />
          </View>
        </View>
        {/* 2 */}
        <View style={styles.text_input}>
          <View>
            <Text>Branch</Text>
            <TextInput  placeholder={branch} style={styles.input} />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Image
              source={require("../../Image/Icons/edit.png")}
              style={styles.edit_icon}
            />
          </View>
        </View>
        {/* 3 */}
        <View style={styles.text_input}>
          <View>
            <Text>Semester</Text>
            <TextInput  placeholder={semester.toString() + "th"} keyboardType='number-pad' style={styles.input} />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Image
              source={require("../../Image/Icons/edit.png")}
              style={styles.edit_icon}
            />
          </View>
        </View>
        {/* 4 */}
        <View style={styles.text_input}>
          <View>
            <Text>Phone No</Text>
            <TextInput  placeholder={phone_no.toString()} keyboardType='number-pad' style={styles.input} />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Image
              source={require("../../Image/Icons/edit.png")}
              style={styles.edit_icon}
            />
          </View>
        </View>
        {/* 5 */}
        <View style={styles.text_input}>
          <View>
            <Text>Address</Text>
            <TextInput  placeholder={address} style={styles.input} />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Image
              source={require("../../Image/Icons/edit.png")}
              style={styles.edit_icon}
            />
          </View>
        </View>
        {/* 2 */}
        <View style={styles.text_input}>
          <View>
            <Text>Email Id</Text>
            <TextInput  placeholder={email}  style={styles.input} />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Image
              source={require("../../Image/Icons/edit.png")}
              style={styles.edit_icon}
            />
          </View>
        </View>
      </View>
      <View style={styles.btn_section}>
        <TouchableOpacity style={styles.save_btn} onPress={()=>{dispatch({type:'UPDATE_PROFILE',payload:profileImage}); dispatch({type:'CLEAR_PROFILE'})}}>
            <Text style={styles.btn_text}>Save</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = ScaledSheet.create({
  profile_container: {
    flex: 1,
  },
  image_section: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "20@s",
    marginTop:'10@s',
    position:'relative'
  },
  profile_image: {
    width:'250@s',
    maxWidth: "300@s",
    height: "180@s",
    resizeMode: "cover",
    borderRadius: 20,
  },
  new_image_text:{
    fontSize:22,
    fontWeight:'600',
  },
  input_field_section: {
    flex: 2,
    paddingHorizontal: "20@s",
    marginTop: "30@s",
  },
  text_input: {
    flexDirection: "row",
    backgroundColor: "#D3E9EB",
    height: "60@s",
    marginBottom: "10@s",
    padding: "10@s",
    paddingHorizontal: "20@s",
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {},
  edit_icon: {
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
  btn_section:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:'10@s'
  },
  save_btn:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#102243",
    width:'180@s',
    height:'50@s',
    borderRadius:30,
  },
  btn_text:{
    color:'white',
    fontSize:'20@s',
    fontWeight:'500'
  }
});

import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity,ScrollView,KeyboardAvoidingView } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import style from "./Loginstyle";

export default function Login() {
  return (
    <ScrollView style={{flex:1}}>
    <KeyboardAwareScrollView style={{flex:1}} keyboardShouldPersistTaps="always">
    {/* <View style={{ flex: 1 }}> */}
      <View style={{ flex: 1 }}>
        <Image
          source={require("../../Image/loginBackground-1.png")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
        />
      </View>
        <View style={{ flex: 1 }}>
          <View
            style={{ flex: 1 }}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={require("../../Image/logo.png")}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
            />
          </View>
          <View style={{ flex: 1,justifyContent:'center',alignItems:'center' }}>
            <TextInput placeholder="Enrollment No." style={style.input}  />
          {/* </View> */}
          {/* <View style={{ flex: 1 ,justifyContent:'center',alignItems:'center'}}> */}
            <TextInput placeholder="Password" style={style.input} />
          </View>
          <View
            style={{ flex: 1 }}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <TouchableOpacity style={style.login_btn}>
              <Text style={style.btn_text}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../../Image/loginBackground-2.png")}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 60,
          }}
          resizeMode="contain"
        />
      </View>
    {/* </View> */}
    </KeyboardAwareScrollView>
    </ScrollView>
  );
}

import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, SafeAreaView, ImageBackground } from "react-native";

import style from "./Loginstyle";

export default function Login() {
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center'}}> 
      <View style={{flex:1}}>
        <ImageBackground
          source={require("../../Image/loginBackground-1.png")}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
      </View> 
        <View style={{flex:1}}>
          <View
            style={{ flex:1,justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={require("../../Image/logo.png")}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
            />
          </View>
          <View style={{ alignItems:'center' }}>
            <TextInput placeholder="Enrollment No." style={style.input}  />
            <TextInput placeholder="Password" style={style.input} />
          </View>
          <View
            style={{  alignItems: "center" }}
          >
            <TouchableOpacity style={style.login_btn}>
              <Text style={style.btn_text}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      <View style={{flex:1, justifyContent: "center",alignItems:'center'}}>
        <ImageBackground
          source={require("../../Image/loginBackground-2.png")}
          style={{
            width: '100%', height: '100%'
          }}
          resizeMode="cover"
        />
      </View>
    </SafeAreaView>
  );
}

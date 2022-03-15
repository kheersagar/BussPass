import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator
} from "react-native";
import { MyContext } from "../../App";

import style from "./Loginstyle";

// main function starts
function Login() {
  //states import
  const {dispatch,isLoading,invalidLogin} = useContext(MyContext);
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../Image/loginBackground-1.png")}
        style={{ width: "100%", height: 100 }}
        resizeMode="stretch"
      />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../../Image/logo.png")}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
        <TextInput
          placeholder="Enrollment No."
          style={style.input}
          onChangeText={(e) => dispatch({type:'EnrollmentChangeHandler',payload:e})}
        />
        <TextInput
          placeholder="Password"
          style={style.input}
          secureTextEntry
          onChangeText={(e) => dispatch({type:'PasswordChangeHandler',payload:e})}
        />
        {invalidLogin ? <Text>Please Enter valid username / password</Text> : null}
        <TouchableOpacity style={style.login_btn} onPress={()=>{dispatch({type:'login_submit'})}}>
          {isLoading ? <ActivityIndicator color='white'/> : <Text style={style.btn_text}>Login</Text>}
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={require("../../Image/loginBackground-2.png")}
        style={{
          width: "100%",
          height: 100,
        }}
        resizeMode="stretch"
      />
    </View>
  );
}

export default Login;

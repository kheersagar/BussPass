import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { MyContext } from "../../App";

import style from "./Loginstyle";

// main function starts
function Login() {
  //states import
  const { setPassword, setEnrollment ,submitHandler} = useContext(MyContext);

  function EnrollmentChangeHandler(e) {
    setEnrollment(e);
  }
  function PasswordChangeHandler(e) {
    setPassword(e);
  }
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
          onChangeText={(e) => EnrollmentChangeHandler(e)}
        />
        <TextInput
          placeholder="Password"
          style={style.input}
          secureTextEntry
          onChangeText={(e) => PasswordChangeHandler(e)}
        />
        <TouchableOpacity style={style.login_btn} onPress={submitHandler}>
          <Text style={style.btn_text}>Login</Text>
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

import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { connect, useSelector } from "react-redux";
import { Enrollment, Password, SubmitForm } from "../../actions";

import style from "./Loginstyle";

// function EnrollmentHandler(event){
//   // console.log(event)
  
// }

// function passwordHandler(event){
//   console.log(event)

// }
// function submitHandler(){

// }

const mapStateToProps = (state)=>{
  // console.log(state)
  return{

  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    EnrollmentHandler : (e)=>{
      dispatch(Enrollment(e));

    },
    passwordHandler : (e)=>{
      dispatch(Password(e))
    },
    onSubmit : ()=>{
      dispatch(SubmitForm());
    },
  }
}
// main function starts
function Login(props) {

  return (
    <View style={{flex:1}}>
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
        <TextInput placeholder="Enrollment No." style={style.input} onChangeText={(e)=>props.EnrollmentHandler(e)}/>
        <TextInput placeholder="Password" style={style.input} onChangeText={(e)=>props.passwordHandler(e)} secureTextEntry/>
        <TouchableOpacity style={style.login_btn} onPress={props.onSubmit
        }>
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

export default connect(mapStateToProps,mapDispatchToProps)(Login)
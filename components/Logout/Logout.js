import { StyleSheet, Text, View, Alert,ImageBackground } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

//styles
import { ScaledSheet } from "react-native-size-matters";
import { MyContext } from "../../App";


function Logout() {
  const navigation = useNavigation();
  const {dispatch} = useContext(MyContext);

  return (
    <>

      <View style={styles.alert_container}>
      <ImageBackground
        source={require("../../Image/loginBackground-1.png")}
        style={{ width: "100%", height: 100 }}
        resizeMode="stretch"
      />
       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text style={styles.logout_text}>Are you Sure?</Text>
      </View>
      <View style={styles.btn_container}>
        <TouchableOpacity
          onPress={() => dispatch({type:'logoutHandler'}) }
          style={styles.alert_btn}
        >
          <Text style={styles.text_btn}>LOGOUT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>navigation.navigate('Home') }
          style={styles.alert_btn}
        >
          <Text style={styles.text_btn}>BACK TO BUSPASS</Text>
        </TouchableOpacity>
      </View>
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
    </>
  );
}

export default Logout;

const styles = ScaledSheet.create({
  alert_container: {
    flex: 1,
    justifyContent:'center',
    alignItems: "center",
  },
  alert_dialog:{
   height:200,
   width:'90%',
   backgroundColor: "#FFC300",
   borderRadius:'10@s',
   justifyContent:'center',
   alignItems:'center',
   shadowColor: '#000',
   shadowOffset: { width: 0, height: 1 },
   shadowOpacity: 0.8,
   shadowRadius: 2,  
   elevation: 5

  },
  btn_container:{
    width: '300@s'
  },
  alert_btn: {
    width: '100%',
    padding: "10@s",
    borderRadius: 50,
    backgroundColor: "#060F2F",
    marginTop:'20@s',
    marginRight: '10@s'
  },
  text_btn: {
    textAlign:'center',
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  logout_text:{
    fontWeight:'500',
    fontSize:32,
    lineHeight:48,
    letterSpacing:1,
    color:'#1D3487'
  }
});

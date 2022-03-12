import { StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AccountLogout } from "../../actions";

//styles
import { ScaledSheet } from "react-native-size-matters";

const mapDispatchToProps = (dispatch) => {
  return {
    NoHandler: (navigation) => {
      navigation.navigate("Home");
    },
    YesHandler: () => {
      dispatch(AccountLogout());
    },
  };
};

function Logout(props) {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.alert_container}>
      <View style={styles.alert_dialog}>
      <View>
        <Text style={{fontSize:25}}>Are you Sure??</Text>
      </View>
      <View style={styles.btn_container}>
        <TouchableOpacity
          onPress={() => props.YesHandler()}
          style={styles.alert_btn}
        >
          <Text style={styles.text_btn}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.NoHandler(navigation)}
          style={styles.alert_btn}
        >
          <Text style={styles.text_btn}>No</Text>
        </TouchableOpacity>
      </View>

      </View>
      </View>
    </>
  );
}

export default connect(null, mapDispatchToProps)(Logout);

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

    flexDirection:'row',
  },
  alert_btn: {
    width: 120,
    padding: "10@s",
    borderRadius: "10@s",
    backgroundColor: "#2D31FA",
    marginTop:'20@s',
    marginRight: '10@s'
  },
  text_btn: {
    textAlign:'center',
    fontSize: "20@s",
    fontWeight: "500",
    color: "white",
  },
});

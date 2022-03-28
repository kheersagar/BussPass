import {
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  Pressable,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { MyContext } from "../../App";
import { ScaledSheet } from "react-native-size-matters";
import { TextInput } from "react-native-gesture-handler";

export default function ModalSuccess() {
  const {  dispatch,modalSuccessVisible } = useContext(MyContext);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalSuccessVisible}
        style={styles.centeredView}
        onRequestClose={() => {
          dispatch({ type: "ModalReceiptClose" });
        }}
      >
        <View style={ styles.modal_main_container}>
          <View style={styles.modal_title}>
              <Text style={styles.success_text}>Successfully Updated</Text>
              <Text style={styles.btn_text}>Reason For Decline</Text>
          </View>
          <View style={styles.modal_body}>
            <View style={styles.modal_body_btn}>
              <TouchableOpacity style={styles.ok} onPress={()=>dispatch({type:'ModalSucessClose'})}>
                <Text style={styles.btn_text}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = ScaledSheet.create({
  centeredView: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal_main_container: {
    position:'absolute',
    top:'30%',
    backgroundColor:'white',
    paddingHorizontal: "20@s",
    width:'90%',
    height:200,
    borderRadius:20,
    marginLeft:10,
    marginRight:10,
  },
  modal_title: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: "10@s",
    padding:20,
  },
  modal_title_text: {
    fontSize: 22,
    fontWeight: "600",
  },
  success_text:{
    fontSize:25,
    fontWeight:'700',
    color:"#21A700"
  },
  close_btn: {
    backgroundColor: "white",
    width: 100,
    height:50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "rgb(210, 230, 255)",
  },
  close_btn_text: {
    fontSize: 22,
    color: "black",
    fontWeight: "600",
  },
  modal_body:{
    marginTop:10,
    flex:1,
  },
  modal_body_btn:{
    justifyContent:'center',
    alignItems:'center',
  },
  ok:{
    backgroundColor:'#54A3FF',
    padding:20,
    width:120,
    textAlign:'center',
    justifyContent:'flex-end',
    alignItems:'center',
    borderRadius:50,
  },
  btn_text:{
    fontWeight:'600',
    fontSize:22,
    color:'black',
  }
});

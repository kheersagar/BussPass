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
import React, { useContext, useState } from "react";
import { MyContext } from "../../App";
import { ScaledSheet } from "react-native-size-matters";
import { TextInput } from "react-native-gesture-handler";

export default function ModalDecline() {
  const { modalDeclineVisible, dispatch,currentStudentData } = useContext(MyContext);

  
  const {_id} = currentStudentData;
  const [textareaValue,setTextareaValue] = useState('');

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalDeclineVisible}
        style={styles.centeredView}
        onRequestClose={() => {
          dispatch({ type: "ModalReceiptClose" });
        }}
      >
        <View style={ styles.modal_main_container}>
          <View style={styles.modal_title}>
              <Text style={styles.btn_text}>Reason For Decline</Text>
          </View>
          <View style={styles.modal_body}>
            <TextInput multiline={true} style={styles.textarea} value={textareaValue} onChangeText={(e) => setTextareaValue(e)}/>
            <View style={styles.modal_body_btn}>
              <TouchableOpacity onPress={() => dispatch({type:'BUSS_PASS_APPROVED',payload:3,_id:_id,reason:textareaValue})}>
                <Text style={styles.btn_text} >Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>dispatch({type:'ModalDeclineClose'})}>
                <Text style={styles.btn_text}>Cancel</Text>
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
    height:300,
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
  textarea:{
    borderWidth:1,
    height:'70%',
    borderRadius:20,
    fontSize:20,
    padding:10,
  },
  modal_body_btn:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20,
    marginTop:10,
  },
  btn_text:{
    fontWeight:'700',
    fontSize:20,
  }
});

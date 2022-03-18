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
import ImageZoom from "react-native-image-pan-zoom";

export default function ModalReceipt() {
  const { modalVisible, dispatch, image } = useContext(MyContext);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={styles.centeredView}
        onRequestClose={() => {
          dispatch({ type: "ModalReceiptClose" });
        }}
      >
        <View style={[styles.centeredView, styles.modal_main_container]}>
          <View style={styles.modal_title}>
            <Pressable
              onPress={() => {
                dispatch({ type: "ModalReceiptClose" });
                // console.log("close pressed")
              }}
              style={styles.close_btn}
            >
              <Text
                style={styles.close_btn_text}
              >
                close
              </Text>
            </Pressable>
          </View>
          <ImageZoom
            cropWidth={Dimensions.get("window").width}
            cropHeight={Dimensions.get("window").height}
            imageWidth={Dimensions.get("window").width}
            imageHeight={200}
            panToMove={true}
            pinchToZoom={true}
          >
            <Image
              source={{ uri: image }}
              style={{ width: "100%", height: "100%" }}
            />
          </ImageZoom>
        </View>
      </Modal>
    </View>
  );
}

const styles = ScaledSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  modal_main_container: {
    backgroundColor: "rgba(0, 0, 0, 0.74)",
    paddingHorizontal: "20@s",
  },
  modal_title: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: "10@s",
    marginTop:20
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
});

import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

//
import { ScaledSheet } from "react-native-size-matters";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";

export default function Profile() {
  return (
    <View style={styles.profile_container}>
    <ScrollView >
      <View style={styles.image_section}>
        <Image
          source={require("../../Image/profile.jpg")}
          style={styles.profile_image}
        />
        <Image source={require("../../Image/Icons/edit_img.png")} style={{position:'absolute',bottom:-15}}/>
      </View>
      <View style={styles.input_field_section}>
        {/* 1 */}
        <View style={styles.text_input}>
          <View>
            <Text>Name</Text>
            <TextInput placeholder="kheersagar" style={styles.input} />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Image
              source={require("../../Image/Icons/edit.png")}
              style={styles.edit_icon}
            />
          </View>
        </View>
        {/* 2 */}
        <View style={styles.text_input}>
          <View>
            <Text>Branch</Text>
            <TextInput placeholder="Btech(cse)" style={styles.input} />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Image
              source={require("../../Image/Icons/edit.png")}
              style={styles.edit_icon}
            />
          </View>
        </View>
        {/* 3 */}
        <View style={styles.text_input}>
          <View>
            <Text>Semester</Text>
            <TextInput placeholder="6th" style={styles.input} />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Image
              source={require("../../Image/Icons/edit.png")}
              style={styles.edit_icon}
            />
          </View>
        </View>
        {/* 4 */}
        <View style={styles.text_input}>
          <View>
            <Text>Phone No</Text>
            <TextInput placeholder="87981263921" style={styles.input} />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Image
              source={require("../../Image/Icons/edit.png")}
              style={styles.edit_icon}
            />
          </View>
        </View>
        {/* 5 */}
        <View style={styles.text_input}>
          <View>
            <Text>Address</Text>
            <TextInput placeholder="asds" style={styles.input} />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Image
              source={require("../../Image/Icons/edit.png")}
              style={styles.edit_icon}
            />
          </View>
        </View>
        {/* 2 */}
        <View style={styles.text_input}>
          <View>
            <Text>Email Id</Text>
            <TextInput placeholder="ex@gamil.com" style={styles.input} />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Image
              source={require("../../Image/Icons/edit.png")}
              style={styles.edit_icon}
            />
          </View>
        </View>
      </View>
      <View style={styles.btn_section}>
        <TouchableOpacity style={styles.save_btn}>
            <Text style={styles.btn_text}>Save</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = ScaledSheet.create({
  profile_container: {
    flex: 1,
  },
  image_section: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "20@s",
    marginTop:'10@s',
    position:'relative'
  },
  profile_image: {
    maxWidth: "200@s",
    height: "180@s",
    resizeMode: "cover",
    borderRadius: 20,
  },
  input_field_section: {
    flex: 2,
    paddingHorizontal: "20@s",
    marginTop: "30@s",
  },
  text_input: {
    flexDirection: "row",
    backgroundColor: "#D3E9EB",
    height: "60@s",
    marginBottom: "10@s",
    padding: "10@s",
    paddingHorizontal: "20@s",
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {},
  edit_icon: {
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
  btn_section:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:'10@s'
  },
  save_btn:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#102243",
    width:'180@s',
    height:'50@s',
    borderRadius:30,
  },
  btn_text:{
    color:'white',
    fontSize:'20@s',
    fontWeight:'500'
  }
});

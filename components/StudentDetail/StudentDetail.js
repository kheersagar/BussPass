import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Image, ImageBackground, Alert } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import style from "./Studentstyle";

function onClickHandler(message) {
  Alert.alert("Are you sure ?", message, [
    { text: "Yes", onPress: () => console.log("Yes Pressed") },
    { text: "No", onPress: () => console.log("No Pressed") },
  ]);
}
function Detail({value,title}){
  return(
    <View style={style.Detail_row}>
    <View style={{flex:1}}>
      <View >
        <Text style={style.Detail_row_title}>{title} </Text>
      </View>
    </View>
    <View style={{flex:1,justifyContent:'center'}}>
      <View >
        <Text style={style.Detail_row_value}>{value} </Text>
      </View>
    </View>
    </View>
  )
}
export default function StudentDetail({ route }) {
 var  data = [{
    id:1,
    title:'Branch',
    value:'B.Tech(Cse)',
  },
  {
    id:2,
    title:'Semester',
     value:'5th',
  },
  {
    id:3,
    title:'Enrollment No.',
     value:'01ug19020068',
  },
  {
    id:4,
    title:'Bus No.',
     value:'7',
  },
  {
    id:5,
    title:'Pickup Point',
     value:'Raigarh',
  }
]
  return (
    <View style={style.StudentDetail_main_container}>
      <LinearGradient
        colors={["#FFB423", "#FDDB3A"]}
        start={{ x: 0, y: 0.38 }}
        style={{ width: "100%", height: "100%", borderRadius: 10 }}
      >
        <View style={style.first_section}>
          <View
            style={{ flex: 6, flexDirection: "row", justifyContent: "center" }}
          >
            <Image
              source={{
                uri: route.params.image,
              }}
              style={style.profile_image}
              resizeMode="cover"
            />
          </View>
          <View
            style={style.first_section_name}
            style={{ flex: 1, justifyContent: "center" }}
          >
            <Text style={style.text}>{route.params.name}</Text>
          </View>
          <View style={style.borderLine}></View>
        </View>
        <View style={style.second_section} >
        <FlatList
            data={data}
            keyExtractor={data.id}
            renderItem={({item}) => <Detail title={item.title} value={item.value} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={style.third_section}>
          <View style={style.button_class}>
            <TouchableOpacity
              style={style.decline}
              onPress={() => onClickHandler("Decline")}
            >
              <Text style={style.profile_button}>Decline</Text>
            </TouchableOpacity>
          </View>
          <View style={style.button_class}>
            <TouchableOpacity
              style={style.approve}
              onPress={() => onClickHandler("Approve")}
            >
              <Text style={style.profile_button}>Approve</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import style from "./HomeScreenStyle";

function Card({value,icon,navigation}) {

  return (
    <TouchableOpacity onPress={()=>{
      navigation.navigate('List');
    }}>
    <View style={style.Card_main_container}>
      <LinearGradient
        colors={["#4274AF", "#5399EC"]}
        start={{ x: 0, y: 0.38 }}
        style={style.Card_background}
      >
      <Image source={icon}
      style={{width:50,height:50}}
      />
        <Text style={style.Card_title}>{value}</Text>
      </LinearGradient>
    </View>
    </TouchableOpacity>
  );
}

export default function HomeScreen() {
  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      title: "Approval/Pending",
      icon: require('../../Image/Icons/admin.png'),
      navigationPath:'List'
    },
    {
      id: 2,
      title: "Student-List",
      icon: require('../../Image/Icons/list.png'),
      navigationPath:'StudentList'
    },
    {
      id: 3,
      title: "Status",
      icon: require('../../Image/Icons/search.png'),
      navigationPath:'Status'
    },
    {
      id: 4,
      title: "Setting",
      icon: require('../../Image/Icons/setting.png'),
      navigationPath:'Setting'
    },
  ];

  return (
    <View style={style.HomeScreen}>
      <View style={style.Home_first_section}>
        <LinearGradient
          colors={["#FFB423", "#FDDB3A"]}
          start={{ x: 0.3, y: 0.38 }}
          style={style.HomeScreen_heading}
        >
          <View>
            <Text style={style.home_title}>Welcom To</Text>
            <Text style={style.home_title}>ShowBussPassFirst</Text>
          </View>
        </LinearGradient>
      </View>
      <View style={style.Home_second_section}>
        <View style={style.Card_row}>
          {data.map((item) => {
            return <Card  value={item.title} icon={item.icon} navigation={navigation} navigationPath={item.navigationPath}/>;
          })}
        </View>
      </View>
    </View>
  );
}

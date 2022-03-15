import { useNavigation } from "@react-navigation/core";
import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import style from "./HomeScreenStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import { MyContext } from "../../App";

function Card({value,icon,navigation,navigationPath}) {

  return (
    <TouchableOpacity onPress={()=>{
      navigation.navigate(navigationPath);
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

  const {isAdmin} = useContext(MyContext);
  const data = isAdmin ? [
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
      navigationPath:'AllStudent'
    },
    {
      id: 3,
      title: "Status",
      icon: require('../../Image/Icons/search.png'),
      navigationPath:'Status'
    },
    {
      id: 4,
      title: "Profile Setting",
      icon: require('../../Image/Icons/setting.png'),
      navigationPath:'profile'
    }
  ] : [{
    id: 1,
    title: "Apply",
    icon: require('../../Image/Icons/search.png'),
    navigationPath:'Status'
  },
  {
    id: 2,
    title: "Your Buss Pass",
    icon: require('../../Image/Icons/setting.png'),
    navigationPath:'profile'
  },
  {
    id: 3,
    title: "Status",
    icon: require('../../Image/Icons/search.png'),
    navigationPath:'Status'
  },
  {
    id: 4,
    title: "Profile Setting",
    icon: require('../../Image/Icons/setting.png'),
    navigationPath:'profile'
  }];

  return (
    <View style={{flex:1}}>
    <ScrollView >
      <View style={style.Home_first_section}>
        <LinearGradient
          colors={["#FFB423", "#FDDB3A"]}
          start={{ x: 0.3, y: 0.38 }}
          style={style.HomeScreen_heading}
        >
            <Text style={[style.home_title,{fontSize:30}]}>Welcome To</Text>
            <Text style={style.home_title}>BusPassFirst</Text>
        </LinearGradient>
      </View>
      <View style={style.Home_second_section}>
      
        <View style={style.Card_row}>
          {data.map((item) => {
            return <Card  value={item.title} icon={item.icon} navigation={navigation} navigationPath={item.navigationPath}/>;
          })}
        </View>
      </View>
        </ScrollView>
      </View>
  );
}

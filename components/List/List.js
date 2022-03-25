import { useNavigation } from "@react-navigation/core";
import React, { useContext, useEffect } from "react";
import { Image, SafeAreaView, Text, View,ActivityIndicator } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";
import { MyContext } from "../../App";
import { HOST_URL } from "../../variables";


function Mylist({currenStudent, navigation,dispatch }) {

  const {first_name,status,branch,profile_img} = currenStudent;

  const statusArr = ['Not Applied','Applied','Approve','Decline','Admin'];

  return (
    <TouchableOpacity
      onPress={() =>{
        dispatch({type:'CURRENT_STUDENT',payload:currenStudent})
        navigation.navigate("studentDetail");
      }
      }
    >
      <LinearGradient
        colors={["#fbc443", "#f8e785"]}
        start={{ x: 0, y: 0.28 }}
        style={styles.main_container}
      >
        <View>
        {profile_img ? 
          <Image
            style={styles.profile_pic}
            source={{uri:`${HOST_URL}/${profile_img}`}}
          />
          :
          <Image
          source={require("../../Image/male_profile.png")}
          style={styles.profile_pic}
        />
        }
        </View>
        <View style={styles.info}>
          <View>
            <Text style={styles.student_name}>{first_name}</Text>
          </View>
          <View>
            <Text style={styles.student_course}>{branch} || {statusArr[status]}</Text>
          </View>
        </View>
        <View>
          <Image
            style={[styles.status]}
            source={require("../../Image/status.png")}
          />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

function List({navigation }) {
  const currentroute = navigation.getState().routes[1].key.split('-')[0];
  console.log(currentroute);
  const { studentData,dispatch } = useContext(MyContext);
  
  useEffect(()=>{
    if(currentroute == 'AllStudent'){
      dispatch({type:'FETCH_LIST'});
    }else if(currentroute == 'List'){
      dispatch({type:'STUDENT_STATUS_LIST'});
    }
  },[])
  
  if(!studentData){
    return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><ActivityIndicator color='white'/></View>
  }

  console.log(studentData);

  return (
    <FlatList
      data={studentData}
      keyExtractor={studentData._id}
      renderItem={({ item }) => (
        <Mylist currenStudent={item} navigation={navigation} dispatch={dispatch} />
      )}
    />
  );
}

export default List;

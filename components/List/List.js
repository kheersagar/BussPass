import { useNavigation } from "@react-navigation/core";
import React, { useContext, useEffect } from "react";
import { Image, SafeAreaView, Text, View,ActivityIndicator } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";
import { MyContext } from "../../App";


function Mylist({currenStudent, navigation,dispatch }) {

  const {first_name} = currenStudent;
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
          {/* <Image
            style={styles.profile_pic}
            source={{
              uri: image,
            }}
          /> */}
        </View>
        <View style={styles.info}>
          <View>
            <Text style={styles.student_name}>{first_name}</Text>
          </View>
          <View>
            <Text style={styles.student_course}>status</Text>
          </View>
        </View>
        <View>
          <Image
            style={styles.status}
            source={require("../../Image/status.png")}
            style={{ width: 25, height: 25 }}
          />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

function List({navigation }) {
  const currentroute = navigation.getState().routes[1].key.split('-')[0];
  console.log(currentroute);
  const { studentData,setCurrentStudentData,dispatch } = useContext(MyContext);
  
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
      keyExtractor={studentData.id}
      renderItem={({ item }) => (
        <Mylist currenStudent={item} navigation={navigation} dispatch={dispatch}/>
      )}
    />
  );
}

export default List;

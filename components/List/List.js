import { useNavigation } from "@react-navigation/core";
import React, { useContext } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./style";
import { connect, useSelector } from "react-redux";
import { studentDetail } from "../../actions";

// function listClickHandler(value,image,navigation){
  
//   navigation.navigate('studentDetail',{
//     name: value,
//     image:image
//   });
// }

const mapStateToProps = (state) =>{
  return{}
}

const mapDispatchToProps = (dispatch)=>{
  return{
    listClickHandler : (value,image,navigation) => {
      dispatch(studentDetail(value,image,navigation));
      navigation.navigate('studentDetail');
    }
  }
}
function Mylist({props,value,image,navigation}){
  return(
    <TouchableOpacity onPress={()=>props.listClickHandler(value,image,navigation)}>
    <LinearGradient
   colors={['#fbc443','#f8e785', ]}
   start={{x:0,y:0.28}}
   style={styles.main_container}
   >
      <View>
        <Image
          style={styles.profile_pic}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={styles.info}>
        <View>
          <Text style={styles.student_name}>{value}</Text>
        </View>
        <View>
          <Text style={styles.student_course}>status</Text>
        </View>
      </View>
      <View>
        <Image
          style={styles.status}
          source={ require("../../Image/status.png")}
          style={{width:25,height:25}}
        />
      </View>
      </LinearGradient>
    </TouchableOpacity>

  )
}
 function List(props) {
  const navigation = useNavigation();
  const DATA = useSelector((state) => state.DATA);

  return (
    <FlatList
      data={DATA}
      keyExtractor={DATA.id}
      renderItem={({item}) => <Mylist props={props} value={item.title} image={item.image} navigation={navigation}/>}
    />
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(List)
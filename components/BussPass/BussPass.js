import { StyleSheet, Text, View,ImageBackground,Image,ScrollView,ActivityIndicator } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { MyContext } from '../../App';
import { FlatList } from 'react-native-gesture-handler';
import { ScaledSheet } from 'react-native-size-matters';
import { usePreventScreenCapture } from 'expo-screen-capture';
import { HOST_URL } from '../../variables';

function Detail({ value, title }) {
  return (
    <View style={styles.Detail_row}>
      <View style={{ flex: 1 }}>
        <View>
          <Text style={styles.Detail_row_title}>{title} </Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View>
          <Text style={styles.Detail_row_value}>{value} </Text>
        </View>
      </View>
    </View>
  );
}

export default function BussPass() {
  usePreventScreenCapture();

  const {dispatch,isBusPass,userData} = useContext(MyContext);

  const { _id,username,first_name,last_name,address,branch,bus_no,email,phone_no,pickup_point,semester,receipt_img,profile_img,qr_code } = userData;

  useEffect(()=>{
    dispatch({type:'BUSS_PASS'});
  },[])

  if(isBusPass == false){
    return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><ActivityIndicator color='black'/></View>
  }


  var data = [
    {
      id: 1,
      title: "Branch",
      value: branch,
    },
    {
      id: 2,
      title: "Semester",
      value: `${semester}th`,
    },
    {
      id: 3,
      title: "Enrollment No.",
      value: username,
    },
    {
      id: 4,
      title: "Bus No.",
      value: bus_no,
    },
    {
      id: 5,
      title: "Pickup Point",
      value: pickup_point,
    },
    {
      id: 6,
      title: "Address",
      value: address,
    },
  ];
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../Image/bussPassBackground.png")}  style={styles.image}>
      <ScrollView>
        <View style={styles.first_section}>
          <Image source={require("../../Image/opju_logo.png")} style={{width:'50%',height:80}} resizeMode="contain"/>
          <Image source={{uri:`${HOST_URL}/${profile_img}`}} style={styles.profile_image} resizeMode="contain"/>
        </View>
        <View style={styles.second_section}>
        <FlatList
              data={data}
              scrollEnabled={false}
              keyExtractor={data.id}
              renderItem={({ item }) => (
                <Detail title={item.title} value={item.value} />
              )}
              showsVerticalScrollIndicator={false}
            />
        </View>
        <View style={styles.third_section}>
        <Image source={{uri:qr_code}} style={{width:100,height:100}}/>
          <Text>Authorities Signatory</Text>
          <View style={styles.signature}>
            <Image source={require("../../Image/approved.png")} style={{width:25,height:25}}/>
            <Text>Approved</Text>
          </View>
        </View>
      </ScrollView>
      </ImageBackground>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    // height:'100%'
  },
  first_section:{
    // flex:1,
    alignItems:'flex-start',
    width:'100%',
    marginBottom:'10@s'
  },
  second_section:{
    flexDirection:'row',
    alignItems:'flex-start',
    paddingHorizontal:'20@s',
    marginTop:'10@s',
    borderTopWidth:'1@s',
    borderColor:'gray',
  },
  third_section:{
    // flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    paddingHorizontal:'10@s',
    borderTopWidth:'1@s',
    borderColor:'gray',
  },
  image: {
    flex:1,
    padding:20,
  },
  profile_image:{
    width: '100%', 
    height: 200 ,
    borderRadius:'10@s',
    borderBottomLeftRadius:'30@s',
    borderBottomRightRadius:'30@s'
  },
  Detail_row:{
    flexDirection:'row',
    paddingBottom:'5@s',
   },
   Detail_row_title:{
    fontSize:'18@s',
    marginTop:'10@s',
  },
  Detail_row_value:{
    fontSize:'15@s',
    fontWeight:'bold'
  },
  signature:{
    flexDirection:'row',
  }
})
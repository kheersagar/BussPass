import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import React, { useContext } from 'react'
import { LinearGradient } from 'expo-linear-gradient';

//icons
import statusbg from "../../Image/statusbg.png"
import { MyContext } from '../../App';

export default function Status() {
  const { userData,dispatch } = useContext(MyContext);
  const { _id,username,first_name,last_name,address,branch,bus_no,email,phone_no,pickup_point,semester,receipt_img,profile_img,status,decline_reason } = userData;

  return (
    <View style={{flex:1}}>
    <ScrollView >
    <View style={styles.status_section}>
        <LinearGradient
          colors={["#FFB423", "#FDDB3A"]}
          start={{ x: 0.3, y: 0.38 }}
          style={styles.Status_heading}
        >
            <Text style={[styles.status_title]}>Status</Text>
        </LinearGradient>
      </View>
      <View style={styles.status_second_section}>
      {status === 0?
        <Image source={statusbg} resizeMode="cover" />
        : null }
        {status === 1 ?<Text style={styles.under_review}>Your Request is Under Review</Text>  : null}
        {status === 2 ? <Text style={styles.approved}>Your Request have been Approved</Text> : null}
        {status === 3 ? <View style={styles.Decline}>
          <Text style={styles.Decline_text}>Your Request have been Declined</Text>
          <Text style={styles.Decline_reason_text}>{decline_reason}</Text>
        </View> : null}
        
        
        
      </View>
    </ScrollView>
    </View>
  )
}

const styles = ScaledSheet.create({
  Status_heading:{
    // flex:1,
    alignItems:'flex-start',
    justifyContent:'center',
    paddingLeft:'20@s',
    // width:'100%',
    justifyContent:'center',
    height:200,
    borderBottomLeftRadius:'40@s',
    borderBottomRightRadius:'40@s',
  },
  status_section:{
    // flex:1,
    height:'300@s',
    borderBottomRightRadius:'30@s',
    borderBottomLeftRadius:'30@s',
  },
  status_title:{
    fontSize:'30@s',
    fontWeight:'bold',
    marginRight:'20@s'
  },
  status_second_section:{
    justifyContent:'center',
    alignItems:'center'
  },
  under_review:{
    fontWeight:'700',
    fontSize:25,
    color:'#0F32AC'
  },
  approved:{
    fontWeight:'700',
    fontSize:25,
    color:'#2C9D10'
  },
  Decline:{
    padding:20,
  },
  Decline_text:{
    fontSize:25,
    fontWeight:'700',
    color:'red'
  },
  Decline_reason_text:{
    fontSize:15,
    fontWeight:'700',
  }
})
import {Dimensions, StyleSheet} from "react-native";

const style = StyleSheet.create({
  HomeScreen:{
    flex:1,
    // marginHorizontal:10
  },
  HomeScreen_heading:{
    flex:1,
    alignItems:'flex-start',
    justifyContent:'center',
    padding:20,
    width:'100%',
    height:'100%',
    borderBottomLeftRadius:40,
    borderBottomRightRadius:40,
  },
  Home_first_section:{
    // flex:1,
    height:250,
    maxHeight:300,
    borderBottomRightRadius:30,
    borderBottomLeftRadius:30,
  },
  Home_second_section:{
    // flex:2.5,
    // backgroundColor:"gray"
    position:'absolute',
    top:200

  },
  Card_row:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  home_title:{
    fontSize:24,
    fontWeight:'bold',
    fontStyle:'normal',
    lineHeight:25
  },
  Card_main_container:{
    width:150,
    height:200,
    marginHorizontal:20,
    marginVertical:15,
    alignItems:'center',
    justifyContent:'center',
  },
  Card_background:{
    width:'100%',
    height:'100%',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  },
  Card_title:{
    color:'#F0FFF3',
    fontSize:16,
    fontWeight:'bold',
    lineHeight:25,
    marginTop:10,
  }
})

export default style;
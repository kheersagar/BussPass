import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated';

const style = StyleSheet.create({
  StudentDetail_main_container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    marginBottom:10,
    marginHorizontal:20,
  },
  first_section:{
    flex:2,
    alignContent:'center',
    alignItems:'center',
    width:'100%',
    // backgroundColor:'yellow'
  },
  first_section_name:{
    flex:1,
    alignItems:'center',
    marginTop:20
  },
  text:{
    fontWeight:'bold',
    fontSize:18,
    marginTop:10,
  },
  profile_image:{
    width: '100%', 
    height: '100%' ,
    borderRadius:10,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30
  },
  borderLine:{
    height:0,
    width:'90%',
    borderColor:'gray',
    borderWidth:1,
    borderStyle:'solid',
  },
  second_section:{
    flex:1,
    flexDirection:'row',
    alignItems:'flex-start',
    width:'100%',
    paddingHorizontal:20,
    marginTop:10,
  },
  third_section:{
    flex:0.5,
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
  },
  decline:{
    width:160,
    height:45,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#E50202',
    borderRadius:25,
  },
  button_class:{
    flex:1,
    borderColor:'gray',
    alignItems:'center'
  },
  profile_button:{
    alignItems:'center',
    fontSize:20,
    fontWeight:'bold',
    color:'white'
  },
  approve:{
    width:160,
    height:45,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:'#54E346'
  },
  Detail_row_title:{
    fontSize:18,
    marginTop:10,
  },
  Detail_row_value:{
    fontSize:15,
    fontWeight:'bold'
  },
  Detail_row:{
   flex:1,
   flexDirection:'row',
   borderBottomWidth:1,
   paddingBottom:5,
   borderColor:'gray',
  },
});

export default style;
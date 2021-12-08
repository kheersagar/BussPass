import { StyleSheet } from 'react-native'

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
    height:1,
    width:'90%',
    borderColor:'gray',
    borderWidth:1,
    borderStyle:'solid',
  },
  second_section:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-start',
    width:'100%',
    paddingHorizontal:20,
    // backgroundColor:'red'
  },
  third_section:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    // backgroundColor:'blue'
  }
});

export default style;
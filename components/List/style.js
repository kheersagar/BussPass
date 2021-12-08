import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  main_container:{
    flex:1,
    flexDirection:'row',
    maxHeight:80,
    alignItems:"center",
    justifyContent:'space-around',
    padding:10,
    marginHorizontal:20,
    backgroundColor: '#FFBF00',
    borderRadius:16,
    borderColor:'#ffb423',
    borderWidth:1,
    shadowColor:'gray',
    shadowRadius:10,
    marginTop:10,
    width:'90%'
  },
  profile_pic:{
    flex:1,
    width: 50,
    height: 50,
    borderRadius: 50 ,
    overflow: "hidden",
  },
  info:{
    flex:1,
    marginLeft:10,
    paddingLeft:30,
    alignItems:'flex-start',
  },
  student_name:{
    fontWeight:'bold',
    fontSize:20,
    fontStyle:'normal',
    fontFamily:'System'
  },
  student_course:{
    fontWeight:'500',
    fontStyle:'normal',
    fontSize:16,
    fontFamily:'System',
  },
  status:{
    flex:1,
    width: 50,
  }
})

export default styles;
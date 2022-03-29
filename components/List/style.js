import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  main_container:{
    flex:1,
    flexDirection:'row',
    maxHeight:'80@s',
    alignItems:"center",
    justifyContent:'space-around',
    padding:'10@s',
    marginHorizontal:'20@s',
    backgroundColor: '#FFBF00',
    borderRadius:'16@s',
    borderColor:'#ffb423',
    borderWidth:'1@s',
    shadowColor:'gray',
    shadowRadius:'10@s',
    marginTop:'10@s',
    width:'90%'
  },
  filter_dropdown:{
    backgroundColor:'#0B194C',
    // padding:20,
    paddingHorizontal:20,
    paddingTop:20,
  },
  filter_dropdown_text:{
    color:'white',
    fontWeight:'bold',
    fontSize:22,
  },
  filter_dropdown_first:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:10,
    borderBottomWidth:1,
    borderBottomColor:'white',
  },
  sort_strem:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  sort_semester:{
    paddingHorizontal:10,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  checkbox: {
    alignSelf: "center",
    backgroundColor:'white',
  },
  label: {
    margin: 8,
    color:'white',
  },
  filter:{
    flexDirection:'row',
    backgroundColor:'#0B194C',
    justifyContent:'space-around',
    alignItems:'center',
    paddingHorizontal:15,
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,
    padding:10,
  },
  filter_text:{
    color:'white',
    fontWeight:'bold',
    fontSize:24,
  },
  filter_btn_section:{
    flexDirection:'row',
    backgroundColor:'black',
    justifyContent:'space-around',
    borderRadius:10,
    padding:10,
  },
  filter_btn:{
    borderRadius:10,
  },
  btn_text:{
    color:'white',
    fontSize:22,
  },
  profile_pic:{
    flex:1,
    width: 50,
    height: 50,
    borderRadius: 50 ,
  },
  info:{
    flex:1,
    marginLeft:'10@s',
    paddingLeft:'10@s',
    alignItems:'flex-start',
  },
  student_name:{
    fontWeight:'bold',
    fontSize:'20@s',
    fontStyle:'normal',
    fontFamily:'System'
  },
  student_course:{
    fontWeight:'500',
    fontStyle:'normal',
    fontSize:'16@s',
    fontFamily:'System',
  },
  status:{
    width: 25,
    height:25,
  }
})

export default styles;
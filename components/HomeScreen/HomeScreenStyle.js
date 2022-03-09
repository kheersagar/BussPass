import { ScaledSheet } from 'react-native-size-matters';

const style = ScaledSheet.create({
  HomeScreen:{
    // flex:1,
    // marginHorizontal:10
  },
  HomeScreen_heading:{
    // flex:1,
    alignItems:'flex-start',
    justifyContent:'center',
    padding:'20@s',
    width:'100%',
    height:'100%',
    borderBottomLeftRadius:'40@s',
    borderBottomRightRadius:'40@s',
  },
  Home_first_section:{
    height:'220@s',
    maxHeight:'300@s',
    borderBottomRightRadius:'30@s',
    borderBottomLeftRadius:'30@s',
  },
  Home_second_section:{
    // flex:1,
    position:'relative',
  },
  Card_row:{
    flexDirection:'row',
    flexWrap:'wrap',
    position:'absolute',
    top:'-50@s'
  },
  home_title:{
    fontSize:'24@s',
    fontWeight:'bold',
    fontStyle:'normal',
    lineHeight:'25@s'
  },
  Card_main_container:{
    width:'130@s',
    height:'180@s',
    marginHorizontal:'20@s',
    marginVertical:'15@s',
    alignItems:'center',
    justifyContent:'center',
  },
  Card_background:{
    width:'100%',
    height:'100%',
    borderRadius:'10@s',
    alignItems:'center',
    justifyContent:'center'
  },
  Card_title:{
    color:'#F0FFF3',
    fontSize:'16@s',
    fontWeight:'bold',
    lineHeight:'25@s',
    marginTop:'10@s',
  }
})

export default style;
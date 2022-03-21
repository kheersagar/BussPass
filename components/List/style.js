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
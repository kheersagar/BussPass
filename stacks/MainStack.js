import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStack from '../routes/HomeStack'
import Login from '../components/Login/Login'
import Logout from '../components/Logout/Logout';
import Profile from '../components/Profile/Profile';
import { MyContext } from '../App';


export default function MainStack() {
  const Drawer = createDrawerNavigator();

  const {logged,getValueFor,setLogged,setLoginToken} = useContext(MyContext);

  useEffect(async ()=>{
    const token = await new Promise((resolve,reject)=>{
      resolve(getValueFor('token'));
    }) 
    // console.log("tokensdfd " + token.token)
    setLoginToken(token.token);
    setLogged(token.status);
  },[]);

  return (
    <Drawer.Navigator 
    screenOptions={{
      headerShown:false,
      drawerPosition:'right',
    }}
    initialRouteName={logged ? 'Home' : 'login'}
  >
  {logged ?       
  <>
  {/* If user is logged in can accessed home stack */}
    <Drawer.Screen name="Home" component={HomeStack} />
    <Drawer.Screen name="Profile" component={Profile} />    
    <Drawer.Screen name="Logout" component={Logout} />
    </>
    :
    //{/* if user is not logged in will only be able to access login stack */}
    <Drawer.Screen name="login" component={Login} />
    
    }

  </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})
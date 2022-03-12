import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStack from '../routes/HomeStack'
import List from '../components/List/List'
import Login from '../components/Login/Login'
import { useSelector } from 'react-redux'
import Logout from '../components/Logout/Logout';


export default function MainStack() {
  const Drawer = createDrawerNavigator(); 
  const {logged} = useSelector((state) => state.loginCreditials)
  console.log(logged)
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
    <Drawer.Screen name="Profile" component={List} />    
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
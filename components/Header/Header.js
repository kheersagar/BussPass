import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Header() {
  const navigation = useNavigation();
  const toggleDrawer = () => {
    //Props to open/close the drawer
    navigation.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={require('../../Image/more.png')}
          style={{
            // backgroundColor:'white',
            borderRadius:2,
            width: 25,
            height: 25,
            marginLeft: 5
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

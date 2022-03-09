import React from 'react'
import { View, Text, Image } from 'react-native'

export default function LogoTitle() {
  return (
    <View style={{padding:5}}>
      <Image
      style={{ width: 80, height: 65 }}
      source={require('../../Image/logo.png')}
    />
    </View>
  );
}

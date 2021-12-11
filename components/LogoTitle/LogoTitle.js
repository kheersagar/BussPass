import React from 'react'
import { View, Text, Image } from 'react-native'

export default function LogoTitle() {
  return (
    <Image
      style={{ width: 80, height: 65 }}
      source={require('../../Image/logo.png')}
    />
  );
}

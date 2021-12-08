import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function HomeScreen() {

  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={()=>{
        navigation.navigate('List');
      }}>
        <Text> StudentList </Text>
      </TouchableOpacity>
    </View>
  )
}

import React, { createContext, useReducer } from 'react';
import { FlatList, StyleSheet,Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import List from './components/List/List';
import StudentList from './routes/HomeStack';
import HomeStack from './routes/HomeStack';

const MyContext = createContext();

export default function App() {
  const Drawer = createDrawerNavigator(); 

  function render(state,action){

  }

  const[state,dispatch] = useReducer(render,0)

  const DATA = [
    {
      id: "bd7acbeaas-c1b1-46c2-aadaded5-3asdfdd53abb28ba",
      title: "Kheersagar Parja",
      image:'https://media-exp1.licdn.com/dms/image/C5603AQEkuyp3J4Tirg/profile-displayphoto-shrink_800_800/0/1608468923158?e=1644451200&v=beta&t=GFwyyQdnr8Hv8IQ2hxNhruNYCBqqC_yG1d34tz8gIbI',
    },
    {
      id: "3ac68afc-c6a05-48dfasd3-aadad4f8-fbd91aa97f63",
      title: "Sarthak",
      image:'https://i.pinimg.com/originals/48/35/b5/4835b5f9c52fd733eb26fb2c2b47bdc7.jpg',
    },
    {
      id: "58694a0f-3dsa1-47asd1fs-bd96sdfsdfadsdsf-145571e29d72",
      title: "Swati Mishra",
      image:'https://media-exp1.licdn.com/dms/image/C4E03AQGbGWI5Nk6AnQ/profile-displayphoto-shrink_800_800/0/1624343531061?e=1644451200&v=beta&t=Kta2f2VNGfuahaX37H300y8LXk1mevFcepWeoVFXZ7w',
    },
    {
      id: "bd7acbea-c1sb1-46c2-aed5-3asdfdd53sdabb28ba",
      title: "Kheersagar Parja",
      image:'https://media-exp1.licdn.com/dms/image/C5603AQEkuyp3J4Tirg/profile-displayphoto-shrink_800_800/0/1608468923158?e=1644451200&v=beta&t=GFwyyQdnr8Hv8IQ2hxNhruNYCBqqC_yG1d34tz8gIbI',
    },
    {
      id: "3ac68afc-c6s05-48dfasd3-a4f8-fbd9dsfa1aa97f63",
      title: "Sarthak",
      image:'https://i.pinimg.com/originals/48/35/b5/4835b5f9c52fd733eb26fb2c2b47bdc7.jpg',
    },
    {
      id: "58694a0f-3da1s-47asd1fs-bd96sdfsdsfdf-145571e29d72",
      title: "Swati Mishra",
      image:'https://media-exp1.licdn.com/dms/image/C4E03AQGbGWI5Nk6AnQ/profile-displayphoto-shrink_800_800/0/1624343531061?e=1644451200&v=beta&t=Kta2f2VNGfuahaX37H300y8LXk1mevFcepWeoVFXZ7w',
    },
    {
      id: "bd7acbea-c1sb1-46c2-aed5-3asdfdsfd53abb28ba",
      title: "Kheersagar Parja",
      image:'https://media-exp1.licdn.com/dms/image/C5603AQEkuyp3J4Tirg/profile-displayphoto-shrink_800_800/0/1608468923158?e=1644451200&v=beta&t=GFwyyQdnr8Hv8IQ2hxNhruNYCBqqC_yG1d34tz8gIbI',
    },
    {
      id: "3ac68afc-c605-4sdsad8dffddasd3-a4f8-fbd91aa97f63",
      title: "Sarthak",
      image:'https://i.pinimg.com/originals/48/35/b5/4835b5f9c52fd733eb26fb2c2b47bdc7.jpg',
    },
    {
      id: "58694a0f-3da1-4asdasd7asd1fs-bd96sdfsdf-145571e29d72",
      title: "Swati Mishra",
      image:'https://media-exp1.licdn.com/dms/image/C4E03AQGbGWI5Nk6AnQ/profile-displayphoto-shrink_800_800/0/1624343531061?e=1644451200&v=beta&t=Kta2f2VNGfuahaX37H300y8LXk1mevFcepWeoVFXZ7w',
    },
    {
      id: "bd7acbea-c1asdasdb1-46c2-aed5-3asdfdd53abb28ba",
      title: "Kheersagar Parja Parja",
      image:'https://media-exp1.licdn.com/dms/image/C5603AQEkuyp3J4Tirg/profile-displayphoto-shrink_800_800/0/1608468923158?e=1644451200&v=beta&t=GFwyyQdnr8Hv8IQ2hxNhruNYCBqqC_yG1d34tz8gIbI',
    },
    {
      id: "3ac68afc-c605asdasd-48dfasd3-a4f8-fbd91aa97f63",
      title: "Sarthak",
      image:'https://i.pinimg.com/originals/48/35/b5/4835b5f9c52fd733eb26fb2c2b47bdc7.jpg',
    },
    {
      id: "58694a0f-3da1-47asd1fasdsas-bd96sdfsdf-145571e29d72",
      title: "Swati Mishra",
      image:'https://media-exp1.licdn.com/dms/image/C4E03AQGbGWI5Nk6AnQ/profile-displayphoto-shrink_800_800/0/1624343531061?e=1644451200&v=beta&t=Kta2f2VNGfuahaX37H300y8LXk1mevFcepWeoVFXZ7w',
    },
  ];
  return (
    <MyContext.Provider value={{
      DATA
    }}>
    <NavigationContainer>
    <Drawer.Navigator 
      screenOptions={{
        headerShown:false,
        drawerPosition:'right',
      }}
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Profile" component={List} />
    </Drawer.Navigator>
    </NavigationContainer>
    </MyContext.Provider>
  );
}

export {MyContext};

const styles = StyleSheet.create({
  main_container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  list:{
    flex:1,
  }
})
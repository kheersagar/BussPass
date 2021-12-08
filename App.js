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
      id: "bd7acbea-c1b1-46c2-aed5-3asdfdd53abb28ba",
      title: "Kheersagar",
      image:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    },
    {
      id: "3ac68afc-c605-48dfasd3-a4f8-fbd91aa97f63",
      title: "Sarthak",
      image:'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    },
    {
      id: "58694a0f-3da1-47asd1fs-bd96sdfsdf-145571e29d72",
      title: "Third Item",
      image:'https://static.remove.bg/remove-bg-web/126e8851f6e88bf644890fafdf1b0d82aff0629e/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg',
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3adsdfsd53abb28ba",
      title: "First Item",
      image:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    },
    {
      id: "3ac68afc-c605-48dfafsd3-a4fsdfsdf8-fbd91aa97f63",
      title: "Second Item",
      image:'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    },
    {
      id: "58694a0f-3da1-47aasd1f-bd96sdfsd-145571e29d72",
      title: "Third Item",
      image:'https://static.remove.bg/remove-bg-web/126e8851f6e88bf644890fafdf1b0d82aff0629e/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg',
    },
    {
      id: "bd7acbea-c1b1-46gc2-aed5-3sdfsdfad53abb28ba",
      title: "First Item",
      image:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    },
    {
      id: "3ac68afc-c605-48dafasd3-a4sdfsdff8-fbd91aa97f63",
      title: "Second Item",
      image:'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    },
    {
      id: "58694a0f-3da1-47asd1f-bd96-sdfsdf145g571e29d72",
      title: "Third Item",
      image:'https://static.remove.bg/remove-bg-web/126e8851f6e88bf644890fafdf1b0d82aff0629e/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg',
    },
    {
      id: "3acs68afc-c605-48dafasd3-a4sdfsdff8-fbd91aa97f63",
      title: "Second Item",
      image:'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    },
    {
      id: "586a94a0f-3da1-47asd1f-bd96-1sfsdfs45g571e29d72",
      title: "Third Item",
      image:'https://static.remove.bg/remove-bg-web/126e8851f6e88bf644890fafdf1b0d82aff0629e/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg',
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
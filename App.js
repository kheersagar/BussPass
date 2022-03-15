import React, { createContext, useReducer, useState } from "react";
import {  StyleSheet} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import * as SecureStore from 'expo-secure-store';

import MainStack from "./stacks/MainStack";
import axios from "axios";

const MyContext = createContext();

export default function App() {
  const DATA = [
    {
      id: "bd7acbeaas-c1b1-46c2-aadaded5-3asdfdd53abb28ba",
      title: "Kheersagar Parja",
      image:
        "https://media-exp1.licdn.com/dms/image/C5603AQEkuyp3J4Tirg/profile-displayphoto-shrink_800_800/0/1608468923158?e=1652313600&v=beta&t=uKU4zthYP5GoM4HDeYHXweIxAn45OlmTWtqth-GEAfQ",
    },
    {
      id: "3ac68afc-c6a05-48dfasd3-aadad4f8-fbd91aa97f63",
      title: "Sarthak",
      image:
        "https://i.pinimg.com/originals/48/35/b5/4835b5f9c52fd733eb26fb2c2b47bdc7.jpg",
    },
    {
      id: "58694a0f-3dsa1-47asd1fs-bd96sdfsdfadsdsf-145571e29d72",
      title: "Swati Mishra",
      image:
        "https://media-exp1.licdn.com/dms/image/C4E03AQGbGWI5Nk6AnQ/profile-displayphoto-shrink_400_400/0/1624343531061?e=1652313600&v=beta&t=3jfAG-rxPGA1YcZKiMfyTTVdjnaxiYcUAbbdjUnqg9s",
    },
    {
      id: "bd7acbea-c1sb1-46c2-aed5-3asdfdd53sdabb28ba",
      title: "Kheersagar Parja",
      image:
        "https://media-exp1.licdn.com/dms/image/C5603AQEkuyp3J4Tirg/profile-displayphoto-shrink_800_800/0/1608468923158?e=1652313600&v=beta&t=uKU4zthYP5GoM4HDeYHXweIxAn45OlmTWtqth-GEAfQ",
    },
    {
      id: "3ac68afc-c6s05-48dfasd3-a4f8-fbd9dsfa1aa97f63",
      title: "Sarthak",
      image:
        "https://i.pinimg.com/originals/48/35/b5/4835b5f9c52fd733eb26fb2c2b47bdc7.jpg",
    },
    {
      id: "58694a0f-3da1s-47asd1fs-bd96sdfsdsfdf-145571e29d72",
      title: "Swati Mishra",
      image:
        "https://media-exp1.licdn.com/dms/image/C4E03AQGbGWI5Nk6AnQ/profile-displayphoto-shrink_400_400/0/1624343531061?e=1652313600&v=beta&t=3jfAG-rxPGA1YcZKiMfyTTVdjnaxiYcUAbbdjUnqg9s",
    },
    {
      id: "bd7acbea-c1sb1-46c2-aed5-3asdfdsfd53abb28ba",
      title: "Kheersagar Parja",
      image:
        "https://media-exp1.licdn.com/dms/image/C5603AQEkuyp3J4Tirg/profile-displayphoto-shrink_800_800/0/1608468923158?e=1652313600&v=beta&t=uKU4zthYP5GoM4HDeYHXweIxAn45OlmTWtqth-GEAfQ",
    },
    {
      id: "3ac68afc-c605-4sdsad8dffddasd3-a4f8-fbd91aa97f63",
      title: "Sarthak",
      image:
        "https://i.pinimg.com/originals/48/35/b5/4835b5f9c52fd733eb26fb2c2b47bdc7.jpg",
    },
    {
      id: "58694a0f-3da1-4asdasd7asd1fs-bd96sdfsdf-145571e29d72",
      title: "Swati Mishra",
      image:
        "https://media-exp1.licdn.com/dms/image/C4E03AQGbGWI5Nk6AnQ/profile-displayphoto-shrink_400_400/0/1624343531061?e=1652313600&v=beta&t=3jfAG-rxPGA1YcZKiMfyTTVdjnaxiYcUAbbdjUnqg9s",
    },
    {
      id: "bd7acbea-c1asdasdb1-46c2-aed5-3asdfdd53abb28ba",
      title: "Kheersagar Parja Parja",
      image:
        "https://media-exp1.licdn.com/dms/image/C5603AQEkuyp3J4Tirg/profile-displayphoto-shrink_800_800/0/1608468923158?e=1652313600&v=beta&t=uKU4zthYP5GoM4HDeYHXweIxAn45OlmTWtqth-GEAfQ",
    },
    {
      id: "3ac68afc-c605asdasd-48dfasd3-a4f8-fbd91aa97f63",
      title: "Sarthak",
      image:
        "https://i.pinimg.com/originals/48/35/b5/4835b5f9c52fd733eb26fb2c2b47bdc7.jpg",
    },
    {
      id: "58694a0f-3da1-47asd1fasdsas-bd96sdfsdf-145571e29d72",
      title: "Swati Mishra",
      image:
        "https://media-exp1.licdn.com/dms/image/C4E03AQGbGWI5Nk6AnQ/profile-displayphoto-shrink_400_400/0/1624343531061?e=1652313600&v=beta&t=3jfAG-rxPGA1YcZKiMfyTTVdjnaxiYcUAbbdjUnqg9s",
    },
  ];

  const [enrollment, setEnrollment] = useState();
  const [password, setPassword] = useState();
  const [logged,setLogged] = useState(false);
  const [currentStudentData,setCurrentStudentData] = useState({});
  const [isAdmin,setIsAdmin] = useState(false);
  const [loginToken,setLoginToken] = useState();
  const [isLoading,setIsLoading] = useState(false);
  const [invalidLogin,setInvalidLogin] = useState(false);

  async function saveToken(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result != null) {
      const state = {status:true,token:result};
      return state;
    } else {
      const state = {status:false};
      return state;
    }
  }
  //
  async function removeToken(key){
    const result = await SecureStore.deleteItemAsync(key);
    if(result){
      return true;
    }else{
      return false;
    }
  }
  async function submitHandler() {
    // console.log(enrollment,password);
    setIsLoading(true);
    try{
      const res = await axios.get("http://192.168.129.20:8080/Auth",{
        params:{
          username:enrollment,
          password:password
        }
      })
      console.log(res.data);
      if(res.data.status == false){
        setInvalidLogin(true);
      }else{
        setInvalidLogin(false);
      }
      setLogged(res.data.status);
      saveToken('token',res.data.token);
      setIsAdmin(res.data._doc.role == 'student' ? false : true);
      setIsLoading(false);
      // getValueFor('token');
    }catch(e){
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      setInvalidLogin(true);
      console.log("error on login " + e);
    }
  }
  async function logoutHandler(){
    await new Promise((resolve,reject)=>{
      resolve(removeToken('token'));
    })
    setLogged(false);
  }

  //Reducer
  function reducer(state, action) {
    switch(action.type){
      case 'EnrollmentChangeHandler': setEnrollment(action.payload);
      break;
      case 'PasswordChangeHandler': setPassword(action.payload)
      break;
      case 'login_submit': submitHandler();
      break;
      case 'logoutHandler' : logoutHandler();
      break;
      default : return true;                     
    }
  }
  const [state, dispatch] = useReducer(reducer,0);

  return (
    <MyContext.Provider value={{dispatch,logged,DATA,setCurrentStudentData,currentStudentData,setLogged,getValueFor,removeToken,isAdmin,setIsAdmin,loginToken,setLoginToken,isLoading,invalidLogin}}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </MyContext.Provider>
  );
}

export {MyContext};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flex: 1,
  },
});

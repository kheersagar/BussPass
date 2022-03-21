import React, { createContext, useReducer, useState } from "react";
import {  StyleSheet} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import * as SecureStore from 'expo-secure-store';

import MainStack from "./stacks/MainStack";
import axios from "axios";

const MyContext = createContext();

export default function App() {
  // const DATA = [
  //   {
  //     id: "bd7acbeaas-c1b1-46c2-aadaded5-3asdfdd53abb28ba",
  //     title: "Kheersagar Parja",
  //     image:
  //       "https://media-exp1.licdn.com/dms/image/C5603AQEkuyp3J4Tirg/profile-displayphoto-shrink_800_800/0/1608468923158?e=1652313600&v=beta&t=uKU4zthYP5GoM4HDeYHXweIxAn45OlmTWtqth-GEAfQ",
  //   },
  //   {
  //     id: "3ac68afc-c6a05-48dfasd3-aadad4f8-fbd91aa97f63",
  //     title: "Sarthak",
  //     image:
  //       "https://i.pinimg.com/originals/48/35/b5/4835b5f9c52fd733eb26fb2c2b47bdc7.jpg",
  //   },
  //   {
  //     id: "58694a0f-3dsa1-47asd1fs-bd96sdfsdfadsdsf-145571e29d72",
  //     title: "Swati Mishra",
  //     image:
  //       "https://media-exp1.licdn.com/dms/image/C4E03AQGbGWI5Nk6AnQ/profile-displayphoto-shrink_400_400/0/1624343531061?e=1652313600&v=beta&t=3jfAG-rxPGA1YcZKiMfyTTVdjnaxiYcUAbbdjUnqg9s",
  //   },
  //   {
  //     id: "bd7acbea-c1sb1-46c2-aed5-3asdfdd53sdabb28ba",
  //     title: "Kheersagar Parja",
  //     image:
  //       "https://media-exp1.licdn.com/dms/image/C5603AQEkuyp3J4Tirg/profile-displayphoto-shrink_800_800/0/1608468923158?e=1652313600&v=beta&t=uKU4zthYP5GoM4HDeYHXweIxAn45OlmTWtqth-GEAfQ",
  //   },
  //   {
  //     id: "3ac68afc-c6s05-48dfasd3-a4f8-fbd9dsfa1aa97f63",
  //     title: "Sarthak",
  //     image:
  //       "https://i.pinimg.com/originals/48/35/b5/4835b5f9c52fd733eb26fb2c2b47bdc7.jpg",
  //   },
  //   {
  //     id: "58694a0f-3da1s-47asd1fs-bd96sdfsdsfdf-145571e29d72",
  //     title: "Swati Mishra",
  //     image:
  //       "https://media-exp1.licdn.com/dms/image/C4E03AQGbGWI5Nk6AnQ/profile-displayphoto-shrink_400_400/0/1624343531061?e=1652313600&v=beta&t=3jfAG-rxPGA1YcZKiMfyTTVdjnaxiYcUAbbdjUnqg9s",
  //   },
  //   {
  //     id: "bd7acbea-c1sb1-46c2-aed5-3asdfdsfd53abb28ba",
  //     title: "Kheersagar Parja",
  //     image:
  //       "https://media-exp1.licdn.com/dms/image/C5603AQEkuyp3J4Tirg/profile-displayphoto-shrink_800_800/0/1608468923158?e=1652313600&v=beta&t=uKU4zthYP5GoM4HDeYHXweIxAn45OlmTWtqth-GEAfQ",
  //   },
  //   {
  //     id: "3ac68afc-c605-4sdsad8dffddasd3-a4f8-fbd91aa97f63",
  //     title: "Sarthak",
  //     image:
  //       "https://i.pinimg.com/originals/48/35/b5/4835b5f9c52fd733eb26fb2c2b47bdc7.jpg",
  //   },
  //   {
  //     id: "58694a0f-3da1-4asdasd7asd1fs-bd96sdfsdf-145571e29d72",
  //     title: "Swati Mishra",
  //     image:
  //       "https://media-exp1.licdn.com/dms/image/C4E03AQGbGWI5Nk6AnQ/profile-displayphoto-shrink_400_400/0/1624343531061?e=1652313600&v=beta&t=3jfAG-rxPGA1YcZKiMfyTTVdjnaxiYcUAbbdjUnqg9s",
  //   },
  //   {
  //     id: "bd7acbea-c1asdasdb1-46c2-aed5-3asdfdd53abb28ba",
  //     title: "Kheersagar Parja Parja",
  //     image:
  //       "https://media-exp1.licdn.com/dms/image/C5603AQEkuyp3J4Tirg/profile-displayphoto-shrink_800_800/0/1608468923158?e=1652313600&v=beta&t=uKU4zthYP5GoM4HDeYHXweIxAn45OlmTWtqth-GEAfQ",
  //   },
  //   {
  //     id: "3ac68afc-c605asdasd-48dfasd3-a4f8-fbd91aa97f63",
  //     title: "Sarthak",
  //     image:
  //       "https://i.pinimg.com/originals/48/35/b5/4835b5f9c52fd733eb26fb2c2b47bdc7.jpg",
  //   },
  //   {
  //     id: "58694a0f-3da1-47asd1fasdsas-bd96sdfsdf-145571e29d72",
  //     title: "Swati Mishra",
  //     image:
  //       "https://media-exp1.licdn.com/dms/image/C4E03AQGbGWI5Nk6AnQ/profile-displayphoto-shrink_400_400/0/1624343531061?e=1652313600&v=beta&t=3jfAG-rxPGA1YcZKiMfyTTVdjnaxiYcUAbbdjUnqg9s",
  //   },
  // ];

  const [enrollment, setEnrollment] = useState();
  const [password, setPassword] = useState();
  const [logged,setLogged] = useState(false);
  const [isAdmin,setIsAdmin] = useState(false);
  const [loginToken,setLoginToken] = useState();
  const [isLoading,setIsLoading] = useState(false);
  const [invalidLogin,setInvalidLogin] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [userData,setUserData] = useState(null);
  const [image, setImage] = useState(null);
  const [profileImage,setProfileImage] = useState(null);
  
  //student data
  const [studentData,setStudentData] = useState(null);
  const [currentStudentData,setCurrentStudentData] = useState(null);

  //loading
  const [isAppliedLoading,setIsAppliedLoading] = useState(false);

  async function saveToken(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  async function getValueFor(key) {
    console.log("called get token")
    let result = await SecureStore.getItemAsync(key);
    if (result != null) {
      // alert("🔐 Here's your value 🔐 \n" + result);
      const state = {status:true,token:result};
      return state;
    } else {
      // alert('No values stored under that key.');
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
      // console.log(res.data);
      if(res.data.status == false){
        setInvalidLogin(true);
      }else{
        setInvalidLogin(false);
      }
      setUserData(res.data._doc);
      saveToken('token',res.data.token);
      saveToken('role',res.data._doc.role);
      const token = await new Promise((resolve,reject)=>{      
        resolve(getValueFor('token'));
      })
      setLogged(token.status);
      setLoginToken(token.token);
      setIsAdmin(res.data._doc.role == 'student' ? false : true);
      setIsLoading(false);
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
      removeToken('token')
      removeToken('role')
      setLogged(false);
      resolve();
    })
  }

  async function studentList(){
      const res = await axios.get("http://192.168.129.20:8080/studentData");
      if( res.data != null){
        setStudentData(res.data);
      }
  }

  async function studentStatusList(){
    const res = await axios.get("http://192.168.129.20:8080/student-status-list");
    if( res.data != null){
      setStudentData(res.data);
    }
  }

  async function updateUserData(){
    console.log("called")
    const formData = new FormData();

    formData.append('userId', loginToken);
    formData.append('image', {
      uri: profileImage,
      name: 'SomeImageName.jpg',
      type: 'image/jpg',
    } );

    const res = await fetch("http://192.168.129.20:8080/update-profile", {
      method: "POST",
      body: formData,
    });
    // console.log(await res.json());
    setUserData(await res.json());
  }

  async function applyBussPass(){

    setIsAppliedLoading(true);

    const formData = new FormData();

    formData.append('userId', loginToken);
    formData.append('image', {
      uri: image,
      name: 'SomeImageName.jpg',
      type: 'image/jpg',
    } );
    
    try{
      const res =  await fetch("http://192.168.129.20:8080/apply-buss-pass", {
         method: "POST",
         body: formData,
       });
       if(await res.json()){
         setIsAppliedLoading(false);
       }
    }catch(e){
      console.log(e);
    }
  }

  async function bussPassApproved(status,_id){
    const res = await axios.post("http://192.168.129.20:8080/buss-pass-status",{
      userId: _id,
      status:status
    });
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
      case 'FETCH_LIST' : studentList();
      break;
      case 'STUDENT_STATUS_LIST' : studentStatusList();
      break;
      case 'CURRENT_STUDENT' : setCurrentStudentData(action.payload);
      break;
      case 'PROFILE_IMAGE' : setProfileImage(action.payload);
      break;
      case 'CLEAR_PROFILE' : setProfileImage(null);
      break;
      case 'UPDATE_PROFILE' : updateUserData(action.payload);
      break;
      case 'ModalImage' : setImage(action.payload);
      break;
      case 'ModalReceiptVisible' : setModalVisible(true);
      break;
      case 'ModalReceiptClose' : setModalVisible(false);
      break;
      case 'APPLY_BUSS_PASS' : applyBussPass();
      break;
      case 'BUSS_PASS_APPROVED' : bussPassApproved(action.payload,action._id);
      break;
      default : return true;                     
    }
  }
  const [state, dispatch] = useReducer(reducer,0);

  return (
    <MyContext.Provider value={{dispatch,logged,studentData,currentStudentData,setLogged,getValueFor,removeToken,isAdmin,setIsAdmin,loginToken,setLoginToken,isLoading,invalidLogin,
    modalVisible, setModalVisible,image, setImage,userData,profileImage,isAppliedLoading}}>
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

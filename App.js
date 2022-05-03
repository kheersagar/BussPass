import React, { createContext, useReducer, useState } from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";

import MainStack from "./stacks/MainStack";
import axios from "axios";

import { HOST_URL } from "./variables";

//fire base

import { storage } from "./firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const MyContext = createContext();

export default function App() {
  const [enrollment, setEnrollment] = useState();
  const [password, setPassword] = useState();
  const [logged, setLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginToken, setLoginToken] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDeclineVisible, setModalDeclineVisible] = useState(false);
  const [modalSuccessVisible, setModalSuccessVisible] = useState(false);
  const [userData, setUserData] = useState(null);
  const [image, setImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  //student data
  const [studentData, setStudentData] = useState(null);
  const [currentStudentData, setCurrentStudentData] = useState(null);

  //loading
  const [isAppliedLoading, setIsAppliedLoading] = useState(false);
  const [isUpdateProfileLoading, setIsUpdateProfileLoading] = useState(false);

  //isBus pass available
  const [isBusPass, setIsBusPass] = useState(false);

  async function saveToken(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  async function getValueFor(key) {
    console.log("called get token");
    let result = await SecureStore.getItemAsync(key);
    if (result != null) {
      // alert("🔐 Here's your value 🔐 \n" + result);
      const state = { status: true, token: result };
      return state;
    } else {
      // alert('No values stored under that key.');
      const state = { status: false };
      return state;
    }
  }
  //
  async function removeToken(key) {
    const result = await SecureStore.deleteItemAsync(key);
    if (result) {
      return true;
    } else {
      return false;
    }
  }
  async function submitHandler() {
    console.log(`${HOST_URL}/Auth`);
    setIsLoading(true);
    try {
      const res = await axios.get(`${HOST_URL}/Auth`, {
        params: {
          username: enrollment,
          password: password,
        },
      });
      // console.log(res.data);
      if (res.data.status == false) {
        setInvalidLogin(true);
      } else {
        setInvalidLogin(false);
      }
      setUserData(res.data._doc);
      saveToken("token", res.data.token);
      saveToken("role", res.data._doc.role);
      const token = await new Promise((resolve, reject) => {
        resolve(getValueFor("token"));
      });
      setLogged(token.status);
      setLoginToken(token.token);
      setIsAdmin(res.data._doc.role == "student" ? false : true);
      setIsLoading(false);
    } catch (e) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      setInvalidLogin(true);
      console.log("error on login " + e);
    }
  }

  async function logoutHandler() {
    await new Promise((resolve, reject) => {
      removeToken("token");
      removeToken("role");
      setLogged(false);
      resolve();
    });
  }

  async function studentList() {
    const res = await axios.get(`${HOST_URL}/studentData`);
    if (res.data != null) {
      setStudentData(res.data);
    }
  }

  async function studentStatusList() {
    const res = await axios.get(`${HOST_URL}/student-status-list`);
    if (res.data != null) {
      setStudentData(res.data);
    }
  }

  async function updateUserData() {
    // console.log("called")
    setIsUpdateProfileLoading(true);
    const refs = ref(storage, `/profileImg/${(Math.random() + 1).toString(36).substring(2)}`);

        //convert array of bytes
        const img = await fetch(profileImage);
        const bytes = await img.blob();
    
        // console.log(bytes);
    
        await uploadBytes(refs, bytes);
        const imageUrl  = await getDownloadURL(refs);
        if (imageUrl) {
          try {
            const res = await axios.post(`${HOST_URL}/update-profile`, {
              userId: loginToken,
              profileUrl : imageUrl
            });
            console.log(res.data);
            if (res.data) {
              setUserData(res.data);
              setIsUpdateProfileLoading(false);
            }
          } catch (e) {
            console.log(e);
          }
        }
  }

  async function applyBussPass() {
    setIsAppliedLoading(true);

    const refs = ref(storage, `/receipts/${(Math.random() + 1).toString(36).substring(2)}`);

    //convert array of bytes
    const img = await fetch(image);
    const bytes = await img.blob();

    // console.log(bytes);

    await uploadBytes(refs, bytes);
    const imageUrl  = await getDownloadURL(refs)
    if (imageUrl) {
      try {
        const res = await axios.post(`${HOST_URL}/apply-buss-pass`, {
          userId: loginToken,
          receiptUrl : imageUrl
        });
        console.log(res.data);
        if (res.data) {
          setUserData(res.data);
          setIsAppliedLoading(false);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

  async function bussPassApproved(status, _id, reason) {
    const res = await axios.post(`${HOST_URL}/buss-pass-status`, {
      userId: _id,
      status: status,
      reason: reason,
    });
    // console.log(res.data,status)
    if (res.data && status === 3) {
      console.log("close called");
      setModalDeclineVisible(false);
      setModalSuccessVisible(true);
      setCurrentStudentData(res.data);
    } else if (status === 2) {
      setCurrentStudentData(res.data);
    }
  }

  async function bussPass() {
    const res = await axios.post(`${HOST_URL}/get-buss-pass`, {
      userId: loginToken,
    });
    console.log(res.data);
    if (res.data) {
      setIsBusPass(true);
    } else {
      setIsBusPass(false);
    }
  }

  //Reducer
  function reducer(state, action) {
    switch (action.type) {
      case "EnrollmentChangeHandler":
        setEnrollment(action.payload);
        break;
      case "PasswordChangeHandler":
        setPassword(action.payload);
        break;
      case "login_submit":
        submitHandler();
        break;
      case "logoutHandler":
        logoutHandler();
        break;
      case "FETCH_LIST":
        studentList();
        break;
      case "STUDENT_STATUS_LIST":
        studentStatusList();
        break;
      case "CURRENT_STUDENT":
        setCurrentStudentData(action.payload);
        break;
      case "PROFILE_IMAGE":
        setProfileImage(action.payload);
        break;
      case "CLEAR_PROFILE":
        setProfileImage(null);
        break;
      case "UPDATE_PROFILE":
        updateUserData(action.payload);
        break;
      case "ModalImage":
        setImage(action.payload);
        break;
      case "ModalReceiptVisible":
        setModalVisible(true);
        break;
      case "ModalReceiptClose":
        setModalVisible(false);
        break;
      case "ModalDeclineVisible":
        setModalDeclineVisible(true);
        break;
      case "ModalDeclineClose":
        setModalDeclineVisible(false);
        break;
      case "ModalSucessClose":
        setModalSuccessVisible(false);
        break;
      case "APPLY_BUSS_PASS":
        applyBussPass();
        break;
      case "BUSS_PASS_APPROVED":
        bussPassApproved(action.payload, action._id, action.reason);
        break;
      case "BUSS_PASS":
        bussPass();
        break;
      default:
        return true;
    }
  }
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <MyContext.Provider
      value={{
        dispatch,
        logged,
        studentData,
        currentStudentData,
        setLogged,
        getValueFor,
        removeToken,
        isAdmin,
        setIsAdmin,
        loginToken,
        setLoginToken,
        isLoading,
        invalidLogin,
        modalVisible,
        modalDeclineVisible,
        setModalVisible,
        image,
        setImage,
        userData,
        profileImage,
        isAppliedLoading,
        isBusPass,
        isUpdateProfileLoading,
        modalSuccessVisible,
      }}
    >
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </MyContext.Provider>
  );
}

export { MyContext };

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

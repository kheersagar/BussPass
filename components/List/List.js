import { useNavigation } from "@react-navigation/core";
import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import Checkbox from "expo-checkbox";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";
import { MyContext } from "../../App";
import { HOST_URL } from "../../variables";

function Mylist({ currenStudent, navigation, dispatch }) {
  const { first_name, status, branch, profile_img } = currenStudent;

  const statusArr = ["Not Applied", "Applied", "Approved", "Declined", "Admin"];

  return (
    <TouchableOpacity
      onPress={() => {
        dispatch({ type: "CURRENT_STUDENT", payload: currenStudent });
        navigation.navigate("studentDetail");
      }}
    >
      <LinearGradient
        colors={["#fbc443", "#f8e785"]}
        start={{ x: 0, y: 0.28 }}
        style={styles.main_container}
      >
        <View>
          {profile_img ? (
            <Image
              style={styles.profile_pic}
              source={{ uri: profile_img }}
            />
          ) : (
            <Image
              source={require("../../Image/male_profile.png")}
              style={styles.profile_pic}
            />
          )}
        </View>
        <View style={styles.info}>
          <View>
            <Text style={styles.student_name}>{first_name}</Text>
          </View>
          <View>
            <Text style={styles.student_course}>
              {branch} || {statusArr[status]}
            </Text>
          </View>
        </View>
        <View>
          <Image
            style={[styles.status]}
            source={require("../../Image/status.png")}
          />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

function List({ navigation }) {
  const currentroute = navigation.getState().routes[1].key.split("-")[0];
  console.log(currentroute);
  const { studentData, dispatch } = useContext(MyContext);

  const [data,setData] = useState();
  const [isDropdown, setIsDropdown] = useState(false);

  const initialValues = {
    btech: false,
    mtech: false,
    diploma: false,
    bsc: false,
    bba: false,
    mba: false,
    bcom: false,
    msc: false,
    first:false,
    second:false,
    third:false,
    fourth:false,
    fifth:false,
    sixth:false,
    seventh:false,
    eighth:false
  };
  const [isChecked, setIsChecked] = useState(initialValues);
  const keyValue = {
    btech :"B.Tech",
    mtech: "M.Tech",
    diploma: "Diploma",
    bsc: "Bsc",
    bba: "BBA",
    mba: "MBA",
    bcom: "Bcom",
    msc: "Msc",
    first:1,
    second:2,
    third:3,
    fourth:4,
    fifth:5,
    sixth:6,
    seventh:7,
    eighth:8
  }
  useEffect(() => {
    if (currentroute == "AllStudent") {
      dispatch({ type: "FETCH_LIST" });
    } else if (currentroute == "List") {
      dispatch({ type: "STUDENT_STATUS_LIST" });
    }
  }, []);

  useEffect(()=>{
    setData(studentData)
  },[studentData])

  if (!studentData || !data) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="black" />
      </View>
    );
  }

  function filterHandler(){

    const res = studentData.filter((item) =>{
       return ( 
       ((isChecked.btech === true && keyValue.btech === item.branch) || (isChecked.mtech === true && keyValue.mtech === item.branch) ||
       (isChecked.diploma === true && keyValue.diploma === item.branch) || (isChecked.bsc === true && keyValue.bsc === item.branch) ||
       (isChecked.bba === true && keyValue.bba === item.branch) || (isChecked.mba === true && keyValue.mba === item.branch) ||
       (isChecked.bcom === true && keyValue.bcom === item.branch) || (isChecked.msc === true && keyValue.msc === item.branch) )
        &&
       ((isChecked.first === true && keyValue.second === item.semester) || (isChecked.second === true && keyValue.first === item.semester) ||
       (isChecked.third === true && keyValue.third === item.semester) || (isChecked.fourth === true && keyValue.fourth === item.semester) ||
       (isChecked.fifth === true && keyValue.fifth === item.semester) || (isChecked.sixth === true && keyValue.sixth === item.semester)  || 
       (isChecked.seventh === true && keyValue.seventh === item.semester) || (isChecked.eighth === true && keyValue.eighth === item.semester) )
       
       )
    } )
    setData(res);
  }


  function FilterDropDown() {
    return (
      <View
        style={[
          styles.filter_dropdown,
          { display: isDropdown ? null : "none" },
        ]}
      >
        <View style={styles.filter_dropdown_first}>
          <Text style={styles.filter_dropdown_text}>Clear All</Text>
          <TouchableOpacity onPress={() => setIsDropdown(false)}>
            <Image
              source={require("../../Image/cross.png")}
              style={{ width: 25, height: 20, marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
        {/* stream */}
        <View style={styles.sort_strem}>
          <View style={styles.col1}>
            <View style={styles.checkboxContainer}>
              <Text style={styles.label}>B.Tech</Text>
              <Checkbox
                value={isChecked.btech}
                onValueChange={() => {
                  setIsChecked((prev) => {
                    return { ...prev, btech: !isChecked.btech };
                  });
                }}
                style={styles.checkbox}
              />
            </View>
            <View style={styles.checkboxContainer}>
              <Text style={styles.label}>M.Tech</Text>
              <Checkbox
                value={isChecked.mtech}
                onValueChange={() => {
                  setIsChecked((prev) => {
                    return { ...prev, mtech: !isChecked.mtech };
                  });
                }}
                style={styles.checkbox}
              />
            </View>
            <View style={styles.checkboxContainer}>
              <Text style={styles.label}>Diploma</Text>
              <Checkbox
                value={isChecked.diploma}
                onValueChange={() => {
                  setIsChecked((prev) => {
                    return { ...prev, diploma: !isChecked.diploma };
                  });
                }}
                style={styles.checkbox}
              />
            </View>
          </View>
          <View style={styles.col2}>
            <View style={styles.checkboxContainer}>
              <Text style={styles.label}>Bsc</Text>
              <Checkbox
                value={isChecked.bsc}
                onValueChange={() => {
                  setIsChecked((prev) => {
                    return { ...prev, bsc: !isChecked.bsc };
                  });
                }}
                style={styles.checkbox}
              />
            </View>
            <View style={styles.checkboxContainer}>
              <Text style={styles.label}>BBA</Text>
              <Checkbox
                value={isChecked.bba}
                onValueChange={() => {
                  setIsChecked((prev) => {
                    return { ...prev, bba: !isChecked.bba };
                  });
                }}
                style={styles.checkbox}
              />
            </View>
            <View style={styles.checkboxContainer}>
              <Text style={styles.label}>MBA</Text>
              <Checkbox
                value={isChecked.mba}
                onValueChange={() => {
                  setIsChecked((prev) => {
                    return { ...prev, mba: !isChecked.mba };
                  });
                }}
                style={styles.checkbox}
              />
            </View>
          </View>
          <View style={styles.col3}>
            <View style={styles.checkboxContainer}>
              <Text style={styles.label}>bcom</Text>
              <Checkbox
                value={isChecked.bcom}
                onValueChange={() => {
                  setIsChecked((prev) => {
                    return { ...prev, bcom: !isChecked.bcom };
                  });
                }}
                style={styles.checkbox}
              />
            </View>
            <View style={styles.checkboxContainer}>
              <Text style={styles.label}>Msc</Text>
              <Checkbox
                value={isChecked.msc}
                onValueChange={() => {
                  setIsChecked((prev) => {
                    return { ...prev, msc: !isChecked.msc };
                  });
                }}
                style={styles.checkbox}
              />
            </View>
          </View>
        </View>
        {/* semester */}
        <View style={[styles.sort_strem,styles.sort_semester]}>
          <View style={styles.col1}>
            <View style={styles.checkboxContainer}>
              <Text style={styles.label}>1st</Text>
              <Checkbox
                value={isChecked.first}
                onValueChange={() => {
                  setIsChecked((prev) => {
                    return { ...prev, first: !isChecked.first };
                  });
                }}
                style={styles.checkbox}
              />
            </View>
            <View style={styles.checkboxContainer}>
              <Text style={styles.label}>4th</Text>
              <Checkbox
                value={isChecked.fourth}
                onValueChange={() => {
                  setIsChecked((prev) => {
                    return { ...prev, fourth: !isChecked.fourth };
                  });
                }}
                style={styles.checkbox}
              />
            </View>
            <View style={styles.checkboxContainer}>
              <Text style={styles.label}>7th</Text>
              <Checkbox
                value={isChecked.seventh}
                onValueChange={() => {
                  setIsChecked((prev) => {
                    return { ...prev, seventh: !isChecked.seventh };
                  });
                }}
                style={styles.checkbox}
              />
            </View>
          </View>
          <View style={styles.col2}>
            <View style={styles.checkboxContainer}>
              <Text style={styles.label}>2nd</Text>
              <Checkbox
                value={isChecked.second}
                onValueChange={() => {
                  setIsChecked((prev) => {
                    return { ...prev, second: !isChecked.second };
                  });
                }}
                style={styles.checkbox}
              />
            </View>
            <View style={styles.checkboxContainer}>
              <Text style={styles.label}>5th</Text>
              <Checkbox
                value={isChecked.fifth}
                onValueChange={() => {
                  setIsChecked((prev) => {
                    return { ...prev, fifth: !isChecked.fifth };
                  });
                }}
                style={styles.checkbox}
              />
            </View>
            <View style={styles.checkboxContainer}>
              <Text style={styles.label}>8th</Text>
              <Checkbox
                value={isChecked.eighth}
                onValueChange={() => {
                  setIsChecked((prev) => {
                    return { ...prev, eighth: !isChecked.eighth };
                  });
                }}
                style={styles.checkbox}
              />
            </View>
          </View>
          <View style={styles.col3}>
            <View style={styles.checkboxContainer}>
              <Text style={styles.label}>3rd</Text>
              <Checkbox
                value={isChecked.third}
                onValueChange={() => {
                  setIsChecked((prev) => {
                    return { ...prev, third: !isChecked.third };
                  });
                }}
                style={styles.checkbox}
              />
            </View>
            <View style={styles.checkboxContainer}>
              <Text style={styles.label}>6th</Text>
              <Checkbox
                value={isChecked.sixth}
                onValueChange={() => {
                  setIsChecked((prev) => {
                    return { ...prev, sixth: !isChecked.sixth };
                  });
                }}
                style={styles.checkbox}
              />
            </View>
          </View>
        </View>
        {/* buttomn section */}
        <View style={styles.filter_btn_section}>
          <TouchableOpacity style={styles.filter_btn} onPress={()=>{
            setIsChecked(false);
            setData(studentData);
          }}>
            <Text style={styles.btn_text}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filter_btn} onPress={() => filterHandler()}>
            <Text style={styles.btn_text}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }


  return (
    <View style={{flex:1}}>
      <View style={[styles.filter, { display: isDropdown ? "none" : null }]}>
        <TouchableOpacity onPress={() => setIsDropdown(true)}>
          <Image
            source={require("../../Image/filter_dropdown.png")}
            style={{ width: 25, height: 20, marginRight: 10 }}
          />
        </TouchableOpacity>
        <Text style={styles.filter_text}>Filter</Text>
      </View>
      <FilterDropDown />
      <FlatList
        data={data}
        keyExtractor={data._id}
        renderItem={({ item }) => (
          <Mylist
            currenStudent={item}
            navigation={navigation}
            dispatch={dispatch}
          />
        )}
      />
    </View>
  );
}

export default List;

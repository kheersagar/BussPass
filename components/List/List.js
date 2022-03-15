import { useNavigation } from "@react-navigation/core";
import React, { useContext } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";
import { MyContext } from "../../App";

const listClickHandler = (value, image, navigation,setCurrentStudentData) => {
  const studentData = {
    name: value,
    image: image,
    navigation: navigation,
  };
  setCurrentStudentData(studentData);
  navigation.navigate("studentDetail");
};

function Mylist({ value, image, navigation,setCurrentStudentData }) {
  return (
    <TouchableOpacity
      onPress={() =>
        listClickHandler(value, image, navigation,setCurrentStudentData)
      }
    >
      <LinearGradient
        colors={["#fbc443", "#f8e785"]}
        start={{ x: 0, y: 0.28 }}
        style={styles.main_container}
      >
        <View>
          <Image
            style={styles.profile_pic}
            source={{
              uri: image,
            }}
          />
        </View>
        <View style={styles.info}>
          <View>
            <Text style={styles.student_name}>{value}</Text>
          </View>
          <View>
            <Text style={styles.student_course}>status</Text>
          </View>
        </View>
        <View>
          <Image
            style={styles.status}
            source={require("../../Image/status.png")}
            style={{ width: 25, height: 25 }}
          />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
function List() {
  const navigation = useNavigation();

  const { DATA,setCurrentStudentData } = useContext(MyContext);
  return (
    <FlatList
      data={DATA}
      keyExtractor={DATA.id}
      renderItem={({ item }) => (
        <Mylist value={item.title} image={item.image} navigation={navigation} setCurrentStudentData={setCurrentStudentData}/>
      )}
    />
  );
}

export default List;

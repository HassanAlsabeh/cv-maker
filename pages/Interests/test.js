import React, { useState, useEffect } from "react";
import DatePicker from "react-native-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { addexperience2 } from "../../redux/actions/experienceAction";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Input } from "react-native-elements/dist/input/Input";
import { Icon } from "react-native-elements/dist/icons/Icon";

export default function Interests({ route, navigation }) {
  // const enrollments = useSelector((state) => state.enrollments.enrollments);
  // console.log("hellllllllllll",enrollments);
  const dispatch = useDispatch();
  const { user_id } = route.params;
  const [inputList, setInputList] = useState([{ firstName: "" }]);
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "" }]);
  };
  return (
    <ScrollView style={{ backgroundColor: "#e2fdff" }}>
      <View>
        <View style={{ margin: 22 }}>
          {inputList.map((x, i) => {
            return (
              <View style={styles.inputfield}>
                <View style={{ width: "75%" }}>
                  <Input
                    name="firstName"
                    placeholder="Interest"
                    value={x.firstName}
                    onChangeText={(e) => handleInputChange(e, i)}
                  />
                </View>

                {inputList.length - 1 === i && (
                  <TouchableOpacity
                    style={{ marginTop: 15 }}
                    onPress={handleAddClick}
                  >
                    <Icon
                      name="plus-circle"
                      type="font-awesome"
                      size={30}
                      color="#444"
                    />
                  </TouchableOpacity>
                )}
                {inputList.length !== 1 && (
                  <TouchableOpacity
                    style={{ marginTop: 15 }}
                    onPress={() => handleRemoveClick(i)}
                  >
                    <Icon name="delete" type="Feather" size={30} color="#444" />
                  </TouchableOpacity>
                )}
              </View>
            );
          })}
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.blockButton}
            // onPress={()=>(navigation.navigate("Enrollments"))}
            onPress={() =>
              dispatch(
                addexperience2(
                  user_id,
                  job_title,
                  company,
                  location,
                  description,
                  from,
                  to,
                  navigation
                )
              )
            }
          >
            <Text style={styles.buttonText}>
              next{"  "}
              <Icon
                name="angle-double-right"
                type="font-awesome"
                size={20}
                color="#fff"
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  btn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 35,
  },
  inputfield: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  blockButton: {
    width: "30%",
    display: "flex",
    alignItems: "center",
    paddingVertical: 8,
    backgroundColor: "#EE5A24",
    borderRadius: 10,
    elevation: 10,
    shadowColor: "#000",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 2,
  },
});

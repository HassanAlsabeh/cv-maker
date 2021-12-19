import React, { useState, useEffect } from "react";
import DatePicker from "react-native-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { addenrollment } from "../../redux/actions/enrollmentsAction";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Input } from "react-native-elements/dist/input/Input";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { _Text } from "react-native";

export default function Enrollments({ navigation }) {
  // const enrollments = useSelector((state) => state.enrollments.enrollments);
  // console.log("hellllllllllll",enrollments);
  const user = useSelector((state) => state.userdata.users);
  const user_id = user.id;
  const dispatch = useDispatch();
  const [skip, setSkip] = useState(false);
  const [university, setUniversity] = useState("");
  const [level, setLevel] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const resetInputField = () => {
    setUniversity("");
    setLevel("");
    setFrom("");
    setTo("");
  };

  function SubmitButton() {
    if (university && level && from && to) {
      return (
        <TouchableOpacity
          style={styles.blockButton}
          // onPress={()=>(navigation.navigate("Enrollments"))}
          onPress={() => {
            setSkip(true);
            dispatch(
              addenrollment(user_id, university, level, from, to, navigation)
            );
          }}
        >
          <Text style={styles.buttonText}>submit{"  "}</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          disabled
          style={styles.blockButton3}
          // onPress={()=>(navigation.navigate("Enrollments"))}
          onPress={() => {
            setSkip(true);
            dispatch(
              addenrollment(user_id, university, level, from, to, navigation)
            );
          }}
        >
          <Text style={styles.buttonText}>submit{"  "}</Text>
        </TouchableOpacity>
      );
    }
  }
  return (
    <ScrollView>
      <View>
        <View style={{ margin: 22 }}>
          <Input
            placeholder="University"
            rightIcon={
              <Icon
                name="university"
                type="font-awesome"
                size={24}
                color="#444"
              />
            }
            value={university}
            autoCorrect={false}
            autoCapitalize="words"
            keyboardType="name-phone-pad"
            textContentType="name"
            onChangeText={(university) => setUniversity(university)}
          />
          <Input
            placeholder="Level"
            rightIcon={
              <Icon
                name="certificate"
                type="font-awesome"
                size={26}
                color="#444"
              />
            }
            autoCorrect={false}
            value={level}
            autoCapitalize="words"
            keyboardType="name-phone-pad"
            textContentType="name"
            onChangeText={(level) => setLevel(level)}
          />
          <Text style={{ textAlign: "center", fontSize: 18 }}>From</Text>
          <DatePicker
            style={{ width: "95%", margin: 15 }}
            date={from}
            placeholder="Select Date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            value={from}
            onDateChange={(d) => setFrom(d)}
          />
          <Text style={{ textAlign: "center", fontSize: 18 }}>To</Text>
          <DatePicker
            style={{ width: "95%", margin: 15 }}
            date={to}
            placeholder="Select Date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            value={to}
            onDateChange={(d) => setTo(d)}
          />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: 45,
            marginBottom: 0,
          }}
        >
          <View></View>
          <SubmitButton />
        </View>

        {skip && (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 45,
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              style={styles.blockButton1}
              // onPress={()=>(navigation.navigate("Enrollments"))}
              onPress={() => {
                resetInputField();
              }}
            >
              <Text style={styles.buttonText}>
                Add New {"  "}
                <Icon
                  name="plus-circle"
                  type="font-awesome"
                  size={22}
                  color="#fff"
                />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.blockButton2}
              onPress={() =>
                navigation.navigate("Experience", { user_id: user_id })
              }
            >
              <Text style={styles.buttonText1}>
                Skip {"  "}
                <Icon
                  name="arrow-right"
                  type="font-awesome"
                  size={20}
                  color="#7f7f7f"
                />
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    height: 120,
    width: 120,
    backgroundColor: "#efefef",
    position: "relative",
    borderRadius: 999,
    overflow: "hidden",
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "lightgrey",
    width: "100%",
    height: "25%",
  },
  uploadBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  blockButton: {
    width: "30%",
    display: "flex",
    alignItems: "center",
    paddingVertical: 8,
    backgroundColor: "#EE5A24",
    borderRadius: 10,
    elevation: 2,
    shadowColor: "#000",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.5,
  },
  blockButton3: {
    width: "30%",
    display: "flex",
    alignItems: "center",
    paddingVertical: 8,
    backgroundColor: "#ffbf7f",
    borderRadius: 10,
    elevation: 2,
    shadowColor: "#000",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5.5,
  },
  blockButton1: {
    width: "45%",
    display: "flex",
    alignItems: "center",
    paddingVertical: 8,
    backgroundColor: "#4667C2",
    borderRadius: 10,
    elevation: 2,
    shadowColor: "#000",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.5,
  },
  blockButton2: {
    width: "30%",
    display: "flex",
    alignItems: "center",
    paddingVertical: 8,

    borderRadius: 10,
    elevation: 2,
    shadowColor: "#fff",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 2,
  },
  buttonText1: {
    color: "#7f7f7f",
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 2,
  },
});

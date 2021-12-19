import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Input } from "react-native-elements/dist/input/Input";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { addinterest } from "../../redux/actions/interestAction";
import { getinterests } from "../../redux/actions/interestAction";
import { deleteinterest } from "../../redux/actions/interestAction";
export default function UpdateInterests({ navigation }) {
  const interests = useSelector((state) => state.getinterests.getinterests);
  const user = useSelector((state) => state.userdata.users);
  const user_id = user.id;

  const dispatch = useDispatch();
  const [interest, setInterest] = useState("");

  const createThreeButtonAlert = (index) =>
    Alert.alert("Alert ", "Are you sure", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "yes",

        onPress: () => {
          dispatch(deleteinterest(index, navigation));
        },
      },
    ]);
  const resetInputField = () => {
    setInterest("");
  };
  useEffect(() => {
    dispatch(getinterests(user_id));
  }, []);
  return (
    <ScrollView>
      <View>
        <View style={{ margin: 22 }}>
          <View style={styles.inputfield}>
            <View style={{ width: "80%" }}>
              <Input
                name="firstName"
                placeholder="Interest (max 5)"
                value={interest}
                onChangeText={(interest) => setInterest(interest)}
              />
            </View>

            <TouchableOpacity
              style={{ marginTop: 5 }}
              onPress={() => {
                dispatch(addinterest(user_id, interest, navigation)),
                  dispatch(getinterests(user_id)),
                  resetInputField();
              }}

              ////////////////
            >
              <Icon
                name="plus-circle"
                type="font-awesome"
                size={40}
                color="#444"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            padding: 40,
          }}
        >
          {interests &&
            interests.map((item) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  createThreeButtonAlert(item.id);
                }}
              >
                <Text
                  style={{ fontWeight: "200", fontSize: 25, marginLeft: 20 }}
                >
                  {item.interest}
                </Text>
                <View style={{ marginRight: 15 }}>
                  <Icon
                    name="delete"
                    type="material-icon"
                    size={30}
                    color="#444"
                  />
                </View>
              </TouchableOpacity>
            ))}
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.blockButton}
            onPress={() => navigation.navigate("Update")}
          >
            <Text style={styles.buttonText}>
              Update{"  "}
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
  item: {
    padding: 8,
    borderColor: "black",
    borderRadius: 85,
    borderWidth: 1,
    marginTop: 15,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
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
    marginTop: 50,
    marginBottom: 90,
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

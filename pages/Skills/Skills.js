import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getskill } from "../../redux/actions/skillsAction";
import { addskill } from "../../redux/actions/skillsAction";
import { getskilluser } from "../../redux/actions/skillsAction";
import { deleteskill } from "../../redux/actions/skillsAction";
import { Slider } from "react-native-range-slider-expo";
import { Icon } from "react-native-elements/dist/icons/Icon";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
export default function Language({ navigation }) {
  const [value1, setValue1] = useState(0);
  const skills = useSelector((state) => state.getskill.getskill);
  const user = useSelector((state) => state.userdata.users);
  const fetchuserdata = useSelector((state) => state.fetchskills.fetchskills);

  const user_id = user.id;

  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [levelname1, setLevel] = useState("");

  function SubmitButton() {
    // if (!value && !levelname1) {
    //   return alert("please select a language");
    // }
  }
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
          dispatch(deleteskill(index, navigation));
        },
      },
    ]);
  const levelname = (value1) => {
    const test = [
      "Beginner",
      "Elementary",
      "Low Intermediate",
      "Upper Intermediate",
      "Advanced",
    ];
    setLevel(test[value1 - 1]);
  };

  useEffect(() => {
    dispatch(getskilluser(user_id));
    dispatch(getskill());
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Select your skills</Text>
        <View style={styles.centerContentStyle}>
          <View style={styles.dropdown}>
            <Picker
              selectedValue={value}
              onValueChange={(value) => setValue(value)}
              style={styles.picker}
            >
              <Picker.Item
                label={"Select"}
                value="0"
                style={styles.picker}
                enabled={false}
              />
              {skills &&
                skills.map((item) => {
                  return (
                    <Picker.Item
                      key={item.id}
                      value={item.id}
                      label={item.skill}
                      style={styles.picker}
                    />
                  );
                })}
            </Picker>
          </View>
        </View>

        <View style={{ margin: 30 }}>
          <Slider
            min={0}
            max={5}
            step={1}
            valueOnChange={(value1) => {
              setValue1(value1);
              levelname(value1);
            }}
            initialValue={0}
            knobColor="#CD729D"
            valueLabelsBackgroundColor="black"
            inRangeBarColor="black"
            outOfRangeBarColor="grey"
          />
          <Text style={{ marginLeft: "10%", fontSize: 25 }}>
            Level: {levelname1}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.blockButton1}
          onPress={() => {
            dispatch(addskill(value, levelname1, user_id, navigation)),
              dispatch(getskilluser(user_id));
            // SubmitButton();
          }}
        >
          <Text style={styles.buttonText}>
            Add {"  "}
            <Icon
              name="plus-circle"
              type="font-awesome"
              size={22}
              color="#fff"
            />
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          padding: 40,
        }}
      >
        {fetchuserdata &&
          fetchuserdata.map((item) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                createThreeButtonAlert(item.id);
              }}
            >
              <Text style={{ fontWeight: "200", fontSize: 25, marginLeft: 20 }}>
                {item && item.skill.skill}
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
          onPress={() => navigation.navigate("Cvpicker")}
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  blockButton1: {
    width: "30%",
    display: "flex",
    marginLeft: "35%",
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
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  blockButton: {
    width: "30%",
    display: "flex",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30,
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
  btn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 35,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
    marginTop: 30,
  },
  centerContentStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  picker: {
    marginVertical: -6,
    height: 5,
    fontSize: 22,
  },
  dropdown: {
    marginTop: "5%",
    marginBottom: "10%",
    backgroundColor: "#CD729D",
    borderRadius: 12,
    height: 50,
    width: "60%",
  },
});

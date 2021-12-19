import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLanguages } from "../../redux/actions/languageAction";
import { addLanguageUser } from "../../redux/actions/languageAction";
import { Slider } from "react-native-range-slider-expo";
import { Icon } from "react-native-elements/dist/icons/Icon";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
export default function Language({ navigation }) {
  const [value1, setValue1] = useState(0);
  const languages = useSelector((state) => state.languages.languages);
  const user = useSelector((state) => state.userdata.users);
  const user_id = user.id;

  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const [levelname1, setLevel] = useState("");
  function SubmitButton() {
    if (!value) {
      return alert("please select a language");
    }
  }
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
    dispatch(getLanguages());
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Select your Language</Text>
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
              {languages &&
                languages.map((item) => {
                  return (
                    <Picker.Item
                      key={item.id}
                      value={item.id}
                      label={item.language}
                      style={styles.picker}
                    />
                  );
                })}
            </Picker>
          </View>
        </View>

        <View style={{ margin: 20 }}>
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
          <Text style={{ marginLeft: "10%", fontSize: 25, marginTop: 20 }}>
            Level : <Text style={{ fontWeight: "bold" }}>{levelname1}</Text>
          </Text>
        </View>
      </View>

      <View style={styles.btn}>
        <TouchableOpacity
          style={styles.blockButton}
          onPress={() => {
            SubmitButton();
            dispatch(addLanguageUser(value, levelname1, user_id, navigation));
          }}
          // onPress={() => navigation.navigate("Skills")}
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
  blockButton: {
    width: "30%",
    display: "flex",
    alignItems: "center",
    marginTop: "45%",
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
  blockButton1: {
    width: "30%",
    marginLeft: "35%",
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
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  picker: {
    marginVertical: -6,
    height: 5,
    fontSize: 22,
  },
  dropdown: {
    marginTop: "10%",
    marginBottom: "10%",
    backgroundColor: "#CD729D",
    borderRadius: 12,
    height: 50,
    width: "60%",
  },
});

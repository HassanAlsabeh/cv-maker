import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMajors } from "../../redux/actions/majorAction";
import { addMajorUser } from "../../redux/actions/majorAction";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AnimatedLottieView from "lottie-react-native";
export default function Dashboard({ navigation }) {
  // const { user_id } = route.params;
  const majors = useSelector((state) => state.majors.majors);
  const user = useSelector((state) => state.userdata.users);
  const user_id = user.id;
  console.log("user_id",user_id);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  function SubmitButton() {
    if (!value) {
      return alert("please select a value");
    }
  }

  useEffect(() => {
    dispatch(getMajors());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{ flex: 1, width: null, marginTop: -20 }}
        //We are using online image to set background
        source={{
          uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg",
        }}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
        <View style={styles.container}>
          <Text style={styles.titleStyle}>
            Select your Major To Start Your Resume
          </Text>
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
                {majors &&
                  majors.map((item) => {
                    return (
                      <Picker.Item
                        key={item.id}
                        value={item.id}
                        label={item.major}
                        style={styles.picker}
                      />
                    );
                  })}
              </Picker>
            </View>

            <AnimatedLottieView
              style={{ height: 330, alignSelf: "center" }}
              source={require("./animations/computer1.json")}
              autoPlay
              loop={true}
            />
            <TouchableOpacity
              onPress={() => {
                SubmitButton();
                dispatch(addMajorUser(value, user_id, navigation));
              }}
            >
              <Text>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleStyle: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
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
    marginTop: "25%",
    marginBottom: "10%",
    backgroundColor: "#CD729D",
    borderRadius: 12,
    height: 50,
    width: "60%",
  },
});

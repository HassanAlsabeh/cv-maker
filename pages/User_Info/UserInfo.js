import React, { useState, useEffect } from "react";
import { adduserinfo } from "../../redux/actions/userInfoAction";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Image,
  View,
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";
import { AntDesign } from "@expo/vector-icons";
import { Input } from "react-native-elements/dist/input/Input";
import { Icon } from "react-native-elements/dist/icons/Icon";
import Interests from "../Interests/Interests";

export default function UserInfo({ route, navigation }) {
  // const error = useSelector((state) => state.userinfoData.userinfo);
  // console.log("hellllllllllll",error);
  const dispatch = useDispatch();
  const { user_id } = route.params;
  const [file_path, setImage] = useState(null);
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [selectedGender, setSelectedGender] = useState();
  const [about, setAbout] = useState();

  function SubmitButton() {
    if (
      file_path &&
      fname &&
      lname &&
      email &&
      phone &&
      address &&
      selectedGender &&
      about
    ) {
      return (
        <TouchableOpacity
          style={styles.blockButton}
          onPress={() =>
            navigation.navigate("Enrollments", { user_id: user_id })
          }
          onPress={() =>
            dispatch(
              adduserinfo(
                user_id,
                fname,
                lname,
                email,
                phone,
                address,
                selectedGender,
                about,
                file_path,
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
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.blockButton3}
          disabled
          onPress={() =>
            navigation.navigate("Enrollments", { user_id: user_id })
          }
          onPress={() =>
            dispatch(
              adduserinfo(
                user_id,
                fname,
                lname,
                email,
                phone,
                address,
                selectedGender,
                about,
                file_path,
                navigation
              )
            )
          }
        >
          <Text style={styles.buttonText}>
            next{"  "}{" "}
            <Icon
              name="angle-double-right"
              type="font-awesome"
              size={20}
              color="#fff"
            />
          </Text>
        </TouchableOpacity>
      );
    }
  }

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ScrollView>
      <View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <View style={styles.container}>
            {file_path && (
              <Image
                source={{ uri: file_path }}
                style={{ width: 120, height: 120 }}
              />
            )}

            <View style={styles.uploadBtnContainer}>
              <TouchableOpacity onPress={pickImage} style={styles.uploadBtn}>
                <AntDesign name="camera" size={25} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ margin: 22 }}>
          <Input
            placeholder="First Name"
            rightIcon={
              <Icon name="user" type="font-awesome" size={24} color="#444" />
            }
            autoCorrect={false}
            autoCapitalize="words"
            keyboardType="name-phone-pad"
            textContentType="name"
            onChangeText={(fname) => setFname(fname)}
          />
          <Input
            placeholder="Last Name"
            rightIcon={
              <Icon name="user" type="font-awesome" size={24} color="#444" />
            }
            autoCorrect={false}
            autoCapitalize="words"
            keyboardType="name-phone-pad"
            textContentType="familyName"
            onChangeText={(lname) => setLname(lname)}
          />
          <Input
            placeholder="Email"
            rightIcon={
              <Icon
                name="envelope"
                type="font-awesome"
                size={20}
                color="#444"
              />
            }
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            onChangeText={(email) => setEmail(email)}
          />
          <Input
            placeholder="Phone Number"
            rightIcon={
              <Icon name="phone" type="font-awesome" size={24} color="#444" />
            }
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            onChangeText={(phone) => setPhone(phone)}
          />
          <Input
            placeholder="Address"
            rightIcon={
              <Icon
                name="map-marker"
                type="font-awesome"
                size={26}
                color="#444"
              />
            }
            autoCorrect={false}
            autoCapitalize="sentences"
            keyboardType="name-phone-pad"
            textContentType="addressCity"
            onChangeText={(address) => setAddress(address)}
          />

          <Input
            placeholder="About"
            rightIcon={
              <Icon name="comment" type="font-awesome" size={22} color="#444" />
            }
            autoCorrect={false}
            autoCapitalize="sentences"
            keyboardType="name-phone-pad"
            textContentType="name"
            onChangeText={(about) => setAbout(about)}
          />
          <Picker
            selectedValue={selectedGender}
            onValueChange={(itemValue) => setSelectedGender(itemValue)}
          >
            <Picker.Item
              enabled={false}
              label="Gender"
              value="0"
              style={{ color: "#9e9e9e" }}
            />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 5,
            marginBottom: 20,
          }}
        >
          <View></View>

          <SubmitButton />
        </View>
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
    width: "25%",

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
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  blockButton3: {
    width: "25%",
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
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 2,
  },
});

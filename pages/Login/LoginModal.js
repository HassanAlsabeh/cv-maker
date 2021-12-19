import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginusers } from "../../redux/actions/userAction";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Keyboard,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import BackgroundImage from "./login.jpeg";
import { Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";

export default function LoginModal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      {" "}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View>
          <View style={styles.modalView}>
            <View
              style={{
                marginLeft: "80%",
              }}
            >
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Icon name="close" type="font-awesome" size={26} color="#444" />
              </Pressable>
            </View>
            <Text style={styles.loginText}>Login</Text>

            <View style={styles.inputView}>
              <Icon
                style={styles.inputIcon}
                name="person"
                type="ionicons"
                color="#5352ed"
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={(email) => setEmail(email)}
              />
            </View>
            <View style={styles.inputView}>
              <Icon
                style={styles.inputIcon}
                name="lock"
                type="ionicons"
                color="#5352ed"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={(password) => setPassword(password)}
              />
            </View>
            <Text style={styles.fpText}>Forgot Password?</Text>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                setModalVisible(!modalVisible),
                  dispatch(loginusers(email, password, navigation));
              }}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.registerText}>
              Don't have an account?
              <Text
                style={{ color: "#5352ed" }}
                onPress={() => {
                  setModalVisible(!modalVisible), setModalVisible1(true);
                }}
              >
                {" Register"}
              </Text>
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    marginTop: 150,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  container: {
    flex: 1,
  },
  titleText: {
    position: "absolute",
    top: Dimensions.get("screen").height * 0.1,
    alignSelf: "center",
    color: "#fff",
    fontSize: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 20,
      height: 18,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },

  bottomView: {
    backgroundColor: "#fff",
    opacity: 0.95,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  loginText: {
    fontSize: 24,
    marginTop: 12,
    marginBottom: 4,
  },
  inputView: {
    height: 40,
    borderRadius: 10,
    backgroundColor: "#f1f3f6",
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  inputIcon: {
    paddingHorizontal: 8,
  },
  input: {
    height: 40,
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  loginButton: {
    backgroundColor: "#5352ed",
    paddingVertical: 10,
    paddingHorizontal: 70,
    borderRadius: 8,
    marginTop: 10,
  },
  loginButtonText: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 18,
  },
  registerText: {
    alignSelf: "center",
    marginTop: 12,
    fontSize: 16,
  },
  fpText: {
    marginTop: 10,
    alignSelf: "flex-end",
    fontSize: 16,
    color: "#5352ed",
  },
});

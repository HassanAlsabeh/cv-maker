import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginusers } from "../../redux/actions/userAction";
import { loginusers1 } from "../../redux/actions/userAction";
import { registerusers } from "../../redux/actions/userAction";
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
import AnimatedLottieView from "lottie-react-native";
import * as Animatable from "react-native-animatable";
export default function Login({ navigation }) {
  const error = useSelector((user) => user.userdata.error);
  const [name1, setName1] = useState();
  const [email1, setEmail1] = useState();
  const [password1, setPassword1] = useState();

  const [email2, setEmail2] = useState();
  const [password2, setPassword2] = useState();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
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
                  <Icon
                    name="close"
                    type="font-awesome"
                    size={26}
                    color="#444"
                  />
                </Pressable>
              </View>
              <Text style={styles.loginText}>User</Text>

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
                // onPress={() => navigation.navigate("Cv1")}
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

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            setModalVisible2(!modalVisible2);
          }}
        >
          <View>
            <View style={styles.modalView}>
              <View
                style={{
                  marginLeft: "80%",
                }}
              >
                <Pressable onPress={() => setModalVisible2(!modalVisible2)}>
                  <Icon
                    name="close"
                    type="font-awesome"
                    size={26}
                    color="#444"
                  />
                </Pressable>
              </View>
              <Text style={styles.loginText}>Company</Text>

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
                  onChangeText={(email2) => setEmail2(email2)}
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
                  onChangeText={(password2) => setPassword2(password2)}
                />
              </View>
              {/* <Text style={styles.fpText}>Forgot Password?</Text> */}
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => {
                  dispatch(loginusers1(email2, password2, navigation));
                  setModalVisible2(false)
                }}
              >
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
              {/* <Text style={styles.registerText}>
                Don't have an account?
                <Text
                  style={{ color: "#5352ed" }}
                  onPress={() => {
                    setModalVisible(!modalVisible), setModalVisible1(true);
                  }}
                >
                  {" Register"}
                </Text>
              </Text> */}
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {
            setModalVisible1(!modalVisible1);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{
                  marginLeft: "80%",
                }}
              >
                <Pressable onPress={() => setModalVisible1(!modalVisible1)}>
                  <Icon
                    name="close"
                    type="font-awesome"
                    size={26}
                    color="#444"
                  />
                </Pressable>
              </View>
              <Text style={styles.loginText}>Register</Text>
              <View style={styles.inputView}>
                <AntDesign
                  style={styles.inputIcon}
                  name="profile"
                  type="ionicons"
                  color="#5352ed"
                  size={25}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  onChangeText={(name1) => setName1(name1)}
                />
              </View>
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
                  onChangeText={(email1) => setEmail1(email1)}
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
                  onChangeText={(password1) => setPassword1(password1)}
                />
              </View>

              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => {
                  dispatch(registerusers(name1, email1, password1, navigation)),
                    setModalVisible1(!modalVisible1),
                    setModalVisible(true);
                }}
              >
                <Text style={styles.loginButtonText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={{ flex: 1 }}>
          <Image source={BackgroundImage} />
        </View>
        <Animatable.View
          style={styles.titleText}
          animation="fadeInUp"
          delay={500}
        >
          <AnimatedLottieView
            style={{ height: 200, alignSelf: "center" }}
            source={require("./loginanimation.json")}
            autoPlay
            loop={false}
          />
          {/* <Text style={styles.titleText}>Resume Buider</Text> */}
        </Animatable.View>
        <Animatable.View
          style={styles.loginanimate}
          animation="fadeInUp"
          delay={1000}
        >
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>Login as User</Text>
          </Pressable>
        </Animatable.View>
        <Animatable.View
          style={styles.registeranimate}
          animation="fadeInUp"
          delay={1500}
        >
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible2(true)}
          >
            <Text style={styles.textStyle}>Login as Company</Text>
          </Pressable>
        </Animatable.View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -130,
  },
  modalView: {
    margin: 20,
    marginTop: 210,
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
    borderRadius: 8,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#EE5A24",
    marginLeft: "-14%",
    width: 200,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },

  container: {
    flex: 1,
  },
  titleText: {
    position: "absolute",
    top: Dimensions.get("screen").height * 0.05,
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
  loginanimate: {
    position: "absolute",
    top: Dimensions.get("screen").height * 0.4,
    alignSelf: "center",
    color: "#fff",
    width: 150,

    shadowColor: "#000",
    shadowOffset: {
      width: 20,
      height: 18,
    },

    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  registeranimate: {
    position: "absolute",
    top: Dimensions.get("screen").height * 0.5,
    alignSelf: "center",
    color: "#fff",
    width: 150,

    shadowColor: "#000",
    shadowOffset: {
      width: 20,
      height: 18,
    },

    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
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

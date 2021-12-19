import React, { useState, useEffect } from "react";
import cv1 from "./cv1.png";
import cv2 from "./cv2.png";
import cv3 from "./cv3.png";
import AwesomeAlert from "react-native-awesome-alerts";

import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Pressable,
} from "react-native";

export default function Cvpicker({ navigation }) {
  const [showAlert, setShowAlert] = useState(false);
  const show = () => {
    setShowAlert(true);
  };

  const hide = () => {
    setShowAlert(false);
  };
  return (
    <ScrollView>
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Warnning"
        message="Proceed with this template?"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="No"
        confirmText="Yes"
        confirmButtonColor="#DD6B55"
        onCancelPressed={() => {
          hide();
        }}
        onConfirmPressed={() => {
          navigation.navigate("TabPages");
          hide();
        }}
      />
      <View>
        {/* <Text style={{ textAlign: "center", fontSize: 20, margin: 20 }}>
          Template 1
        </Text>
        <View style={styles.container}>
          <Image source={cv1} style={{ width: 200, height: 250, margin: 40 }} />
        </View>
        <Text style={{ textAlign: "center", fontSize: 20, margin: 20 }}>
          Template 2
        </Text>
        <View style={styles.container}>
          <View style={{ borderColor: "red", borderWidth: 4 }}>
            <Image
              source={cv2}
              style={{ width: 200, height: 250, margin: 40 }}
            />
          </View>
        </View> */}

        <Text style={{ textAlign: "center", fontSize: 20, margin: 20 }}>
          Template 1
        </Text>
        <Pressable
          style={({ pressed }) => [
            { borderColor: pressed ? "red" : "white", borderWidth: 4 },
          ]}
        >
          <Image
            source={cv1}
            style={{
              marginLeft: 75,
              width: 200,
              height: 250,
            }}
          />
        </Pressable>
        <Text style={{ textAlign: "center", fontSize: 20, margin: 20 }}>
          Template 2
        </Text>
        <Pressable
          style={({ pressed }) => [
            { borderColor: pressed ? "red" : "white", borderWidth: 4 },
          ]}
        >
          <Image
            source={cv2}
            style={{
              marginLeft: 75,
              width: 200,
              height: 250,
            }}
          />
        </Pressable>
        <Text style={{ textAlign: "center", fontSize: 20, margin: 20 }}>
          Template 3
        </Text>
        <Pressable
          style={({ pressed }) => [
            { borderColor: pressed ? "red" : "white", borderWidth: 4 },
          ]}
          onPress={() => {
            show();
          }}
        >
          <Image
            source={cv3}
            style={{
              marginLeft: 75,
              width: 200,
              height: 250,
            }}
          />
        </Pressable>

        {/* <View style={styles.btn}>
          <TouchableOpacity
            style={styles.blockButton}
            onPress={() => navigation.navigate("ProfilePage")}
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
        </View> */}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 80,
  },
  fitImage: {
    borderRadius: 70,
  },
  fitImageWithSize: {
    height: 100,
    width: 20,
  },
});

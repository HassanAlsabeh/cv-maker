import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import poster from "./poster.jpg";
import { StyleSheet, Image, TouchableOpacity, Animated,LogBox, } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Home({ navigation }) {
  LogBox.ignoreAllLogs();
  const [fadeAnim] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 2,
      duration: 6000,
    }).start();
  }, []);
  return (
    <View style={styles.container}>
      <Image style={{ flex: 1, width: null, marginTop: 0 }} source={poster} />

      <TouchableOpacity
        style={styles.loginButton}
        CartItems
        onPress={() => navigation.navigate("Login")}
      >
        <Animated.View
          style={{
            opacity: fadeAnim,
          }}
        >
          <Text style={styles.loginButtonText}>
            Create Your CV{" "}
            <Entypo name="arrow-with-circle-right" size={28} color="white" />
          </Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginButton: {
    backgroundColor: "#C54530",
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 10,
    position: "absolute",
    top: "15%",
    left: "5%",
    padding: 20,
  },
  loginButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
});

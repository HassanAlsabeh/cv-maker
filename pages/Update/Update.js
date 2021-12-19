import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";

export default function Update({ navigation }) {
  return (
    <View>
      <Pressable
        title="Personal Info"
        style={styles.blockButton}
        // onPress={() => navigation.navigate("UpdateUser")}
      >
        <Text> Personal Info</Text>
      </Pressable>

      <Pressable
        title="View my CV"
        style={styles.blockButton}
        // onPress={() => navigation.navigate("UpdateEnrollments")}
      >
        <Text>Enrollments</Text>
      </Pressable>
      <Pressable
        title="View my CV"
        style={styles.blockButton}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text>Experience</Text>
      </Pressable>
      <Pressable
        title="View my CV"
        style={styles.blockButton}
        onPress={() => navigation.navigate("UpdateInterests")}
      >
        <Text>Interests</Text>
      </Pressable>
      <Pressable
        title="View my CV"
        style={styles.blockButton}
        onPress={() => navigation.navigate("UpdateSkills")}
      >
        <Text>Skills</Text>
      </Pressable>
      <Pressable
        title="View my CV"
        style={styles.blockButton}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text>Major</Text>
      </Pressable>
      <Pressable
        title="View my CV"
        style={styles.blockButton}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text>Language</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  blockButton: {
    marginTop: 40,
    marginLeft: "35%",

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
});

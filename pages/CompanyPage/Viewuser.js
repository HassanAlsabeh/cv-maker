import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getallDetails } from "../../redux/actions/userdetailsAction";

import { Feather as Icon, FontAwesome as FAIcon } from "@expo/vector-icons/";

export default function Viewuser({ route, navigation }) {
  const dispatch = useDispatch();
  const [userskills, setUserskills] = useState([]);
  const [userexperience, setUserexperience] = useState([]);
  const [userenrollment, setUserenrollment] = useState([]);
  const [userinterest, setUserinterest] = useState([]);
  const userdetails = useSelector((state) => state.userdetails.userdetails);
  console.log("kkkkk", userdetails);

  useEffect(() => {
    dispatch(getallDetails());
  }, []);
  useEffect(() => {
    setUserskills(userdetails && userdetails && userdetails.skills);
    setUserexperience(userdetails && userdetails.experience);
    setUserenrollment(userdetails && userdetails.enrollment);
    setUserinterest(userdetails && userdetails.interest);
  }, [userdetails]);

  return (
    <View style={{ ...styles.container }}>
      <ScrollView>
        {/* Search Bar View */}
        <View style={{ ...styles.searchBarView }}>
          <TouchableOpacity>
            <Image
              style={{ ...styles.userProfileImage }}
              source={{
                uri: `https://cv-maker1-backend.herokuapp.com/${userdetails?.file_path}`,
              }}
            />
          </TouchableOpacity>
        </View>
        {/* /////////////////////////////////////// */}
        <View style={styles.postsView}>
          <View style={styles.postView}>
            <Text style={styles.title}>Employee Informaion</Text>
            {/* Post Header */}
            <View style={styles.postHeader}>
              <View style={{ flex: 1, paddingHorizontal: 10 }}>
                <Text style={{ color: "#fff", fontSize: 20 }}>
                  {userdetails?.fname} {userdetails?.lname}
                </Text>
              </View>
            </View>
            {/* Post Content */}
            <View style={{ marginTop: 10 }}>
              <Text
                style={{
                  color: "#fafafa",

                  fontSize: 14,
                  paddingHorizontal: 10,
                }}
              >
                {userdetails?.email}
              </Text>
              <Text
                style={{
                  color: "#fafafa",

                  fontSize: 14,
                  paddingHorizontal: 10,
                }}
              >
                {userdetails?.phone}
              </Text>
              <Text
                style={{
                  color: "#fafafa",

                  fontSize: 14,
                  paddingHorizontal: 10,
                }}
              >
                {userdetails?.address}
              </Text>
            </View>
            {/* Post Stats */}
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                paddingHorizontal: 10,
              }}
            ></View>
          </View>
        </View>
        {/* /////////////////////////////////////////// */}

        <View style={styles.postView}>
          {/* Post Header */}
          <View style={styles.postsView}>
            <Text style={styles.title}>Enrollments</Text>

            {userenrollment?.map((item) => {
              return (
                <View>
                  <View style={styles.postHeader}>
                    <View style={{ flex: 1, paddingHorizontal: 10 }}>
                      <Text style={{ color: "#fff", fontSize: 20 }}>
                        {"*"} {item.university}
                      </Text>
                    </View>
                  </View>
                  {/* Post Content */}
                  <View style={{ marginTop: 10 }}>
                    <Text
                      style={{
                        color: "#fafafa",

                        fontSize: 14,
                        paddingHorizontal: 10,
                      }}
                    >
                      {item.level}
                    </Text>

                    <Text
                      style={{
                        color: "#ffb10a",

                        fontSize: 14,
                        paddingHorizontal: 10,
                      }}
                    >
                      from: {item.from} / {item.to}
                    </Text>
                  </View>
                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: "row",
                      paddingHorizontal: 10,
                    }}
                  ></View>
                </View>
              );
            })}
          </View>
        </View>

        {/* ////////////////////////////////// */}

        <View style={styles.postView}>
          {/* Post Header */}
          <View style={styles.postsView}>
            <Text style={styles.title}>Experience</Text>
            {userexperience?.map((item) => {
              return (
                <View>
                  <View style={styles.postHeader}>
                    <View style={{ flex: 1, paddingHorizontal: 10 }}>
                      <Text style={{ color: "#fff", fontSize: 20 }}>
                        {"*"} {item.job_title}
                      </Text>
                    </View>
                  </View>
                  {/* Post Content */}
                  <View style={{ marginTop: 10 }}>
                    <Text
                      style={{
                        color: "#fafafa",

                        fontSize: 14,
                        paddingHorizontal: 10,
                      }}
                    >
                      {item.company}
                    </Text>

                    <Text
                      style={{
                        color: "#ffb10a",

                        fontSize: 14,
                        paddingHorizontal: 10,
                      }}
                    >
                      {item.from} {item.to}
                    </Text>

                    <Text
                      style={{
                        color: "#fafafa",

                        fontSize: 14,
                        paddingHorizontal: 10,
                      }}
                    >
                      {item.location}
                    </Text>
                    <Text
                      style={{
                        color: "#fafafa",

                        fontSize: 14,
                        paddingHorizontal: 10,
                      }}
                    >
                      {item.description}
                    </Text>
                  </View>
                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: "row",
                      paddingHorizontal: 10,
                    }}
                  ></View>
                </View>
              );
            })}
          </View>
        </View>
        {/* ///////////////////////////////////// */}

        <View style={styles.postView}>
          {/* Post Header */}
          <View style={styles.postsView}>
            <Text style={styles.title}>Skills</Text>
            {userskills?.map((item) => {
              return (
                <View>
                  <View style={styles.postHeader}></View>
                  {/* Post Content */}
                  <View style={{ marginTop: 10 }}>
                    <Text
                      style={{
                        color: "#fafafa",

                        fontSize: 14,
                        paddingHorizontal: 10,
                      }}
                    >
                      {"*  "}
                      {item.skill}
                    </Text>
                  </View>
                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: "row",
                      paddingHorizontal: 10,
                    }}
                  ></View>
                </View>
              );
            })}
          </View>
        </View>

        {/* ////////////////////////////// */}
        <View style={styles.postView}>
          {/* Post Header */}
          <View style={styles.postsView}>
            <Text style={styles.title}>Interests</Text>
            {userinterest?.map((item) => {
              return (
                <View>
                  <View style={styles.postHeader}>
                    <View style={{ flex: 1, paddingHorizontal: 10 }}></View>
                  </View>
                  {/* Post Content */}
                  <View style={{ marginTop: 10 }}>
                    <Text
                      style={{
                        color: "#fafafa",

                        fontSize: 14,
                        paddingHorizontal: 10,
                      }}
                    >
                      {"*  "}
                      {item.interest}
                    </Text>
                  </View>
                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: "row",
                      paddingHorizontal: 10,
                    }}
                  ></View>
                </View>
              );
            })}
          </View>
        </View>

        {/* ////////////////////////////// */}
        <View style={{ height: 20 }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f1f",
    paddingTop: 40,
  },
  userProfileImage: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginLeft: "28%",
  },

  postsView: { paddingHorizontal: 10, marginTop: 10 },
  postView: {
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: "#333",
    borderRadius: 10,
    shadowColor: "#1e1e1e",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 8,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  postStatsOpacity: {
    backgroundColor: "#222",
    padding: 8,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "#EE5A24",
    fontSize: 20,
    marginBottom: 10,
  },
});

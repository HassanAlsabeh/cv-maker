import React, { useState, useEffect } from "react";
import URL from "../../apis/config";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  getallDetails,
  getAllUsers,
} from "../../redux/actions/userdetailsAction";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { SocialIcon } from "react-native-elements";
import Icon from "react-native-vector-icons/Fontisto";
import { LinearGradient } from "expo-linear-gradient";
import { Picker } from "@react-native-picker/picker";
import { getskill } from "../../redux/actions/skillsAction";
import { getMajors } from "../../redux/actions/majorAction";

export default function CompanyPage({ navigation }) {
  const allusersdata = useSelector((state) => state.allusers.allusers);
  const skills = useSelector((state) => state.getskill.getskill);
  const majors = useSelector((state) => state.majors.majors);

  const [value, setValue] = useState("");
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  // console.log("ewwwwwwwwwwww", allusersdata);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getskill());
    dispatch(getMajors());
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.filter}>
          <View style={styles.dropdown}>
            <Picker
              selectedValue={value}
              onValueChange={(value) => setValue(value)}
              style={styles.picker}
            >
              <Picker.Item
                label={"Skills..."}
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
          <View style={styles.dropdown}>
            <Picker
              selectedValue={value}
              onValueChange={(value) => setValue(value)}
              style={styles.picker}
            >
              <Picker.Item
                label={"Major..."}
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
        </View>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Search..."
            keyboardType="numeric"
          />
          <Icon
            name="search"
            color="#000"
            size={27}
            style={{ marginLeft: "83%", marginBottom: -20, marginTop: 8 }}
          />
        </SafeAreaView>
        <View>
          <View style={styles.cardContainer}>
            {
              <View style={styles.cardHeaderContaner}>
                <Text style={styles.cardHeading}></Text>
              </View>
            }
            {allusersdata &&
              allusersdata.map((item) => {
                return (
                  <View style={styles.cardBody}>
                    <View style={styles.cardBodyTop}>
                      <View style={styles.cardLeftSide}>
                        <View>
                          <Text style={styles.cardName}>
                            {item.user_info.fname} {item.user_info.lname}
                          </Text>
                          <Text style={styles.cardName}>
                            {item.usermajor.major.major} Developer
                          </Text>
                          <Text
                            style={styles.cardAddress}
                            style={{
                              color: "blue",
                              fontSize: 15,
                              marginTop: 7,
                            }}
                            onPress={() =>
                              Linking.openURL(`tel:${item.user_info.phone}`)
                            }
                          >
                            +961 {item.user_info.phone}
                          </Text>
                          <Text
                            style={styles.cardAddress}
                            style={{
                              color: "blue",
                              fontSize: 15,
                              marginTop: 7,
                            }}
                            onPress={() =>
                              Linking.openURL(`mailto:${item.user_info.email}`)
                            }
                            title={item.user_info.email}
                          >
                            {item.user_info.email}
                          </Text>
                          <View style={styles.buttonBooks}></View>
                          <View style={styles.iconMore}></View>
                        </View>
                      </View>
                      {item.user_info.file_path && (
                        <Image
                          source={{
                            uri: `https://cv-maker1-backend.herokuapp.com/${item.user_info.file_path}`,
                          }}
                          style={styles.cardAvatar}
                        />
                      )}
                    </View>
                    <View style={styles.cardBodyBottom}>
                      <View style={styles.cardGroupIcon}>
                        <AntDesign
                          name="message1"
                          size={28}
                          onPress={() =>
                            navigation.navigate("Chatcompany", {
                              user_photo: item.user_info.file_path,
                              user_fname: item.user_info.fname,
                              user_lname: item.user_info.lname,
                            })
                          }
                        />
                        <Text style={styles.cardBottomTitle}>Message</Text>
                      </View>

                      <View style={styles.cardGroupIcon}>
                        <AntDesign
                          name="pdffile1"
                          size={28}
                          onPress={() => {
                            dispatch(getallDetails(item.id));
                            navigation.navigate("Viewuser");
                          }}
                        />
                        <Text
                          style={styles.cardBottomTitle}
                          onPress={() => {
                            dispatch(getallDetails(item.id));
                            navigation.navigate("Viewuser");
                          }}
                        >
                          View
                        </Text>
                      </View>
                      <SocialIcon
                        type="whatsapp"
                        iconSize={32}
                        onPress={() =>
                          Linking.openURL(
                            `whatsapp://send?text=Hello&phone=+961${item.user_info.phone}`
                          )
                        }
                      />
                    </View>
                  </View>
                );
              })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginBottom: -40,
  },
  filter: {
    display: "flex",
    flexDirection: "row",
  },
  picker: {
    marginVertical: -9,
    height: 5,
    fontSize: 18,
  },
  dropdown: {
    marginTop: "20%",
    marginBottom: "3%",
    marginLeft: "7%",
    backgroundColor: "#EE5A24",
    borderRadius: 12,
    height: 40,
    width: "40%",
  },
  rating: {
    flexDirection: "row",
    marginTop: 5,
  },
  tag: {
    color: "#EE5A24",
  },
  cardContainer: {
    padding: 15,
    paddingBottom: 0,
  },
  margin: {
    height: 1,
    backgroundColor: "#F0F1F2",
    width: "100%",
    marginVertical: 5,
  },
  cardBodyBottom: {
    marginTop: 0,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cardBottomTitle: {
    fontSize: 14,
    marginTop: 5,
  },
  cardGroupIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconMore: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  iconLike: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  cardBody: {
    padding: 5,
    backgroundColor: "#fff",
    marginTop: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardBodyTop: {
    flexDirection: "row",
  },
  cardLeftSide: {
    paddingHorizontal: 10,
    flex: 1,
  },
  cardName: {
    color: "#222",
    fontSize: 18,
    fontWeight: "bold",
  },
  cardTime: {
    color: "#222",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 5,
  },
  cardAddress: {
    color: "gray",
    fontSize: 15,
    fontWeight: "500",
    marginTop: 5,
  },
  cardAvatar: {
    height: 100,
    width: 100,
    backgroundColor: "gray",
    borderRadius: 10,
  },
  cardHeaderContaner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardHeading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cardMore: {
    fontWeight: "bold",
    color: "#7B6C95",
  },
  faceGroup: {
    justifyContent: "center",
    alignItems: "center",
  },
  faceContainer: {
    backgroundColor: "#fff",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: 20,
  },
  faceText: {
    fontSize: 16,
    marginTop: 6,
  },

  container: {
    flex: 1,
    marginTop: -45,
  },
  headerContainer: {
    padding: 20,
    paddingHorizontal: 10,
    marginTop: 12,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  desc: {
    fontSize: 20,
    fontWeight: "400",
    color: "#fff",
    marginTop: 5,
  },
  buttonBooks: {
    flexDirection: "row",
    marginTop: 20,
  },
  btnGradient: {
    padding: 10,
    borderRadius: 40,
  },
  btnBookText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
});

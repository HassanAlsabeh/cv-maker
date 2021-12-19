// import React, { useState, useEffect } from "react";
// import { adduserinfo } from "../../redux/actions/userInfoAction";
// import DatePicker from "react-native-datepicker";
// import { useDispatch, useSelector } from "react-redux";
// import { addenrollment2 } from "../../redux/actions/enrollmentsAction";
// import {
//   View,
//   StyleSheet,
//   Text,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";

// import { Input } from "react-native-elements/dist/input/Input";
// import { Icon } from "react-native-elements/dist/icons/Icon";

// export default function Enrollment2({ route, navigation }) {
//   // const enrollments = useSelector((state) => state.enrollments.enrollments);
//   // console.log("hellllllllllll",enrollments);
//   const dispatch = useDispatch();
//   const { user_id } = route.params;
//   const [university, setUniversity] = useState("");
//   const [level, setLevel] = useState("");
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");

//   return (
//     <ScrollView>
//       <View >
//         <View style={{ margin: 22 }}>
//           <Input
//             placeholder="University"
//             rightIcon={
//               <Icon
//                 name="university"
//                 type="font-awesome"
//                 size={24}
//                 color="#444"
//               />
//             }
//             autoCorrect={false}
//             autoCapitalize="words"
//             keyboardType="name-phone-pad"
//             textContentType="name"
//             onChangeText={(university) => setUniversity(university)}
//           />
//           <Input
//             placeholder="Level"
//             rightIcon={
//               <Icon
//                 name="certificate"
//                 type="font-awesome"
//                 size={26}
//                 color="#444"
//               />
//             }
//             autoCorrect={false}
//             autoCapitalize="words"
//             keyboardType="name-phone-pad"
//             textContentType="name"
//             onChangeText={(level) => setLevel(level)}
//           />
//           <Text style={{ textAlign: "center", fontSize: 18 }}>From</Text>
//           <DatePicker
//             style={{ width: "95%", margin: 15 }}
//             date={from}
//             placeholder="Select Date"
//             format="YYYY-MM-DD"
//             confirmBtnText="Confirm"
//             cancelBtnText="Cancel"
//             onDateChange={(d) => setFrom(d)}
//           />
//           <Text style={{ textAlign: "center", fontSize: 18 }}>To</Text>
//           <DatePicker
//             style={{ width: "95%", margin: 15 }}
//             date={to}
//             placeholder="Select Date"
//             format="YYYY-MM-DD"
//             confirmBtnText="Confirm"
//             cancelBtnText="Cancel"
//             onDateChange={(d) => setTo(d)}
//           />
//         </View>
//         <View
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-around",
//             padding: 5,
//             marginBottom: 20,
//             marginTop: "50%",
//           }}
//         >
//           <View>
//             <TouchableOpacity
//               onPress={() => navigation.navigate("Experience", { user_id })}
//             >
//               <Text style={styles.buttonText1}>
//                 Skip{"  "}
//                 <Icon name="arrow-right" type="font-awesome" size={22} />
//               </Text>
//             </TouchableOpacity>
//           </View>

//           <TouchableOpacity
//             style={styles.blockButton}
//             // onPress={()=>(navigation.navigate("Enrollments"))}
//             onPress={() =>
//               dispatch(
//                 addenrollment2(user_id, university, level, from, to, navigation)
//               )
//             }
//           >
//             <Text style={styles.buttonText}>
//               next{"  "}
//               <Icon
//                 name="angle-double-right"
//                 type="font-awesome"
//                 size={20}
//                 color="#fff"
//               />
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     elevation: 2,
//     height: 120,
//     width: 120,
//     backgroundColor: "#efefef",
//     position: "relative",
//     borderRadius: 999,
//     overflow: "hidden",
//   },
//   uploadBtnContainer: {
//     opacity: 0.7,
//     position: "absolute",
//     right: 0,
//     bottom: 0,
//     backgroundColor: "lightgrey",
//     width: "100%",
//     height: "25%",
//   },
//   uploadBtn: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   blockButton: {
//     width: "30%",
//     display: "flex",
//     alignItems: "center",
//     paddingVertical: 8,
//     backgroundColor: "#EE5A24",
//     borderRadius: 10,
//     elevation: 2,
//     shadowColor: "#000",
//     textShadowOffset: {
//       width: 2,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.5,
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 22,
//     marginBottom: 2,
//   },
//   buttonText1: {
//     color: "#111",

//     fontSize: 22,
//     marginTop: 9,
//   },
// });

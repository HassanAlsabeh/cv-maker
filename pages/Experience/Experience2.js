// import React, { useState, useEffect } from "react";
// import DatePicker from "react-native-datepicker";
// import { useDispatch, useSelector } from "react-redux";
// import { addexperience2 } from "../../redux/actions/experienceAction";
// import {
//   View,
//   StyleSheet,
//   Text,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";

// import { Input } from "react-native-elements/dist/input/Input";
// import { Icon } from "react-native-elements/dist/icons/Icon";

// export default function Experience2({ route, navigation }) {
//   // const enrollments = useSelector((state) => state.enrollments.enrollments);
//   // console.log("hellllllllllll",enrollments);
//   const dispatch = useDispatch();
//   const { user_id } = route.params;
//   const [job_title, setJob_title] = useState("");
//   const [company, setCompany] = useState("");
//   const [location, setLocation] = useState("");
//   const [description, setDescription] = useState("");
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const resetInputField = () => {
//     setJob_title("");
//     setCompany("");
//     setLocation("");
//     setDescription("");
//     setFrom("");
//     setTo("");
//   };
//   return (
//     <ScrollView>
//       <View >
//         <View style={{ margin: 22 }}>
//           <Input
//             placeholder="Job Title"
//             rightIcon={
//               <Icon
//                 name="suitcase"
//                 type="font-awesome"
//                 size={22}
//                 color="#444"
//               />
//             }
//             autoCorrect={false}
//             value={job_title}
//             autoCapitalize="words"
//             keyboardType="name-phone-pad"
//             textContentType="name"
//             onChangeText={(job_title) => setJob_title(job_title)}
//           />
//           <Input
//             placeholder="Company"
//             rightIcon={
//               <Icon
//                 name="building"
//                 type="font-awesome"
//                 size={26}
//                 color="#444"
//               />
//             }
//             autoCorrect={false}
//             value={company}
//             autoCapitalize="words"
//             keyboardType="name-phone-pad"
//             textContentType="name"
//             onChangeText={(company) => setCompany(company)}
//           />
//           <Input
//             placeholder="Location"
//             rightIcon={
//               <Icon name="map" type="font-awesome" size={22} color="#444" />
//             }
//             autoCorrect={false}
//             autoCapitalize="words"
//             value={location}
//             keyboardType="name-phone-pad"
//             textContentType="name"
//             onChangeText={(location) => setLocation(location)}
//           />
//           <Input
//             placeholder="Description"
//             rightIcon={
//               <Icon name="files-o" type="font-awesome" size={26} color="#444" />
//             }
//             autoCorrect={false}
//             value={description}
//             autoCapitalize="words"
//             keyboardType="name-phone-pad"
//             textContentType="name"
//             onChangeText={(description) => setDescription(description)}
//           />
//           <Text style={{ textAlign: "center", fontSize: 18 }}>From</Text>
//           <DatePicker
//             style={{ width: "95%", margin: 15 }}
//             date={from}
//             placeholder="Select Date"
//             format="YYYY-MM-DD"
//             confirmBtnText="Confirm"
//             cancelBtnText="Cancel"
//             value={from}
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
//             value={to}
//             onDateChange={(d) => setTo(d)}
//           />
//         </View>
//         <View>
//         <TouchableOpacity
//           style={styles.blockButton1}
//           onPress={() =>
//             dispatch(
//               addexperience2(
//                 user_id,
//                 job_title,
//                 company,
//                 location,
//                 description,
//                 from,
//                 to,
//                 navigation
//               )
//             )
//           }
//         >
//           <Text style={styles.buttonText}>
//             Submit{"  "}
//             <Icon
//               name="angle-double-right"
//               type="font-awesome"
//               size={20}
//               color="#fff"
//             />
//           </Text>
//         </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-around",

//             marginBottom: 20,
//             marginTop: "8%",
//           }}
//         >
//           <View>
//             <TouchableOpacity
//               onPress={() => navigation.navigate("Interests", { user_id })}
//             >
//               <Text style={styles.buttonText1}>
//                 Skip{"  "}
//                 <Icon name="arrow-right" type="font-awesome" size={20} />
//               </Text>
//             </TouchableOpacity>
//           </View>

//           <TouchableOpacity
//             style={styles.blockButton}
//             onPress={() => {
//               resetInputField();
//             }}
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
//     elevation: 10,
//     shadowColor: "#000",
//     textShadowOffset: {
//       width: 2,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.5,
//   },
//   blockButton1: {
//     width: "30%",

//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     paddingVertical: 8,
//     backgroundColor: "#4F75DB",
//     borderRadius: 10,
//     elevation: 10,
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

// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getallDetails } from "../../redux/actions/userdetailsAction";
// import {
//   View,
//   StyleSheet,
//   Button,
//   Platform,
//   Text,
//   Image,
//   TouchableOpacity,
// } from "react-native";
// import * as Print from "expo-print";
// import { Icon } from "react-native-elements";
// import { shareAsync } from "expo-sharing";
// import { NavigationContainer } from "@react-navigation/native";

// export default function Cv2({ navigation }) {
//   const dispatch = useDispatch();
//   const userdetails = useSelector((state) => state.userdetails.userdetails);
//   let userskills = userdetails.skills;
//   let userexperience = userdetails.experience;
//   let userenrollment = userdetails.enrollment;
//   let userinterest = userdetails.interest;
//   // console.log("ewwwwwwwwwwww", userenrollment);

//   const html =
//     userdetails &&
//     `
//   <html>
//     <head>
//       <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />

//       </head>
//     <body style="text-align: center;background-color:lighblue; min-height:1000px  -moz-box-sizing: border-box;
//     box-sizing: border-box">
//     <!--page container-->
//     <div style="margin:10px; display:flex; min-height:900px; position: relative">
//                                                                                         <!--part left-->
//         <div style="background-color:white; width:33%; margin:16px 5px; max-height: 1075px; box-shadow:3px 3px 5px 4px gray ">
//             <div class="allLeft" margin:"30px>
//                                                                                         <!--picture-->
//                 <div style="width:100%" >
//                     <img src= "https://www.vippng.com/png/detail/355-3554387_create-digital-profile-icon-blue-profile-icon-png.png" style="width:70%; height:"70%">
//                     <h2 class="jane">${userdetails.fname}${
//       userdetails.lname
//     } </h2>
//                 </div>
//                                                                                         <!--Enter data-->
//                 <div style="margin:-10px -20px">
//                     <p style="color:gray"><i style="color:red; margin-right:20px; font-size:20px" class="fa">&#xf0b1;</i>

//                     </p>
//                     <p style="color:gray"><i style="color:red; margin-right:20px; font-size:20px" class="fa">&#xf015;</i>${
//                       userdetails.address
//                     }</p>
//                     <p style="color:gray"><i style="color:red; margin-right:20px; font-size:20px" class="fa">&#xf0e0;</i>${
//                       userdetails.email
//                     }</p>
//                     <p style="color:gray"><i style="color:red; margin-right:20px; font-size:20px" class="fa">	&#xf095;</i>${
//                       userdetails.phone
//                     }</p>
//                     <p style="color:gray"><i style="color:red; margin-right:20px; font-size:20px" class="fa">	&#xf095;</i>${
//                       userdetails.gender
//                     }</p>
//                 </div>
//             <hr style="color:lighblue; margin:0 30px">
//                                                                                         <!--Enter Skills-->
//                 <div style="style="margin:-10px 20px"">
//                     <p style="font-size:20px;"><i class="fa">&#xf069;</i><b>Skills</b></p>

//                     ${
//                       userskills &&
//                       userskills
//                         .map(
//                           (
//                             item
//                           ) => `<p>${item.skill}</p> <div style="background-color:lighblue; border-radius:15px ">
//                       <div style="background-color:red; border-radius:15px; color:white" id="ninty">${item.skill}</div>
//                   </div>`
//                         )
//                         .join("")
//                     }

//                     <p style="star"><i class="fa">	&#xf0ac;</i><b>Languages</b></p>
//                     <p></p>
//                     <div style="background-color:lighblue; border-radius:15px center">
//                         <div style="background-color:red; border-radius:15px; color:white" id="one-hundred">100%</div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//                                                                                         <!--part right-->
//         <div style="width:70%; margin:-4px -8px 0 5px;">
//             <div style="background-color:white; box-shadow:3px 3px 5px 4px gray; ">
//                                                                                         <!--write experience-->
//                 <div style="margin:0 30px">
//                     <h2 class="icon"><i class="fa">&#xf0f2;</i>Work Experience</h2>
//                 </div>

//                 <div style="margin:0 30px">
//                 ${
//                   userexperience &&
//                   userexperience
//                     .map(
//                       (item) =>
//                         `<h5>${item.job_title} / ${item.company}</h5><h6><i class="fa">&#xf073;</i>${item.from} to <span>${item.to}</span></h6>
//                     <p>${item.description}</p>`
//                     )
//                     .join("")
//                 }
//                 </div>

//             </div>
//                                                                                         <!--levels education-->
//             <div style="background-color:white; box-shadow:3px 3px 5px 4px gray; ">
//                 <div style="margin:0 30px">
//                     <h2 class="icon"><i class="fa">&#xf0a3;</i>Education</h2>
//                 </div>

//                 <div style="margin:0 30px">
//                 ${
//                   userenrollment &&
//                   userenrollment
//                     .map(
//                       (item) =>
//                         `<h5>${item.university}</h5>
//                     <h6><i class="fa">&#xf073;</i>${item.from} to ${item.to}</h6>
//                     <p>${item.level}</p>
//                 </div>`
//                     )
//                     .join("")
//                 }
//                 <div style="background-color:white; box-shadow:3px 3px 5px 4px gray; ">
//                 <div style="margin:0 30px">
//                     <h2 class="icon"><i class="fa">&#xf0f2;</i>Interests</h2>
//                 </div>

//                 <div style="margin:0 0 0 35%">
//                 ${
//                   userinterest &&
//                   userinterest
//                     .map(
//                       (item) =>
//                         `<h4 style="margin:30px ; border: 2px solid red;border-radius: 15px;width:100px ; padding:4px";>${item.interest} </h4>`
//                     )
//                     .join("")
//                 }
//                 </div>
//               </div>
//             </div>

//         </div>
//                                                                                         <!--end container-->
//     </div>
//                                                                                         <!--footer-->

//     </body>
//   </html>
//   `;

//   const [selectedPrinter, setSelectedPrinter] = React.useState();

//   const print = async () => {
//     // On iOS/android prints the given html. On web prints the HTML from the current page.
//     await Print.printAsync({
//       html,
//       printerUrl: selectedPrinter?.url, // iOS only
//     });
//   };

//   const printToFile = async () => {
//     // On iOS/android prints the given html. On web prints the HTML from the current page.
//     const { uri } = await Print.printToFileAsync({
//       html,
//     });
//     console.log("File has been saved to:", uri);
//     await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
//   };

//   const selectPrinter = async () => {
//     const printer = await Print.selectPrinterAsync(); // iOS only
//     setSelectedPrinter(printer);
//   };
//   useEffect(() => {
//     navigation.setOptions({
//       title: "",
//       headerLeft: () => (
//         <View style={styles.headerLeft}>
//           <TouchableOpacity
//             style={{ paddingRight: 30 }}
//             onPress={() => {
//               navigation.goBack();
//             }}
//           >
//             <Icon
//               name="angle-left"
//               type="font-awesome"
//               size={30}
//               color="#111"
//             />
//           </TouchableOpacity>
//           <Image style={styles.userProfileImage} />
//           <View
//             style={{
//               paddingLeft: 10,
//               justifyContent: "center",
//             }}
//           >
//             <Text
//               style={{ color: "#111", fontWeight: "700", fontSize: 18 }}
//             ></Text>
//             <Text style={{ color: "#111", fontWeight: "300" }}></Text>
//           </View>
//         </View>
//       ),
//       headerRight: () => (
//         <TouchableOpacity
//           style={{ paddingRight: 10 }}
//           onPress={() => {
//             Alert.alert("Audio Call", "Audio Call Button Pressed");
//           }}
//         >
//           <Icon name="logout" size={28} color="#111" />
//         </TouchableOpacity>
//       ),
//     }),
//       dispatch(getallDetails());
//   }, []);
//   return (
//     <View style={styles.container}>
//       <Button title="Show" onPress={print} />
//       <View style={styles.spacer} />
//       <Button
//         title="Send"
//         onPress={() => {
//           printToFile();
//         }}
//       />
//       {Platform.OS === "ios" && (
//         <>
//           <View style={styles.spacer} />
//           <Button title="Select printer" onPress={selectPrinter} />
//           <View style={styles.spacer} />
//           {selectedPrinter ? (
//             <Text
//               style={styles.printer}
//             >{`Selected printer: ${selectedPrinter.name}`}</Text>
//           ) : undefined}
//           <Button title="GO" onPress={() => navigation.navigate("ProfilePage")} />
//         </>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: "#ecf0f1",
//     flexDirection: "column",
//     padding: 8,
//   },
//   spacer: {
//     height: 8,
//   },
//   printer: {
//     textAlign: "center",
//   },
//   headerLeft: {
//     paddingVertical: 4,
//     paddingHorizontal: 10,
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   userProfileImage: { height: "100%", aspectRatio: 1, borderRadius: 100 },
//   container: {
//     flex: 1,
//     marginBottom: "20%",
//     backgroundColor: "#f2f2ff",
//   },
//   messageInputView: {
//     display: "flex",
//     flexDirection: "row",
//     marginHorizontal: 14,
//     backgroundColor: "#fff",
//     borderRadius: 4,
//   },
//   messageInput: {
//     height: 40,
//     flex: 1,
//     paddingHorizontal: 10,
//   },
//   messageSendView: {
//     paddingHorizontal: 10,
//     justifyContent: "center",
//   },
// });
import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getallDetails } from "../../redux/actions/userdetailsAction";

export default function Cv2({ navigation }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userdata.users);
  const user_id = user.id;
  useEffect(() => {
    dispatch(getallDetails(user_id));
  }, []);
  return (
    <View>
      <Text onPress={() => navigation.navigate("Cv1")}>CV Completed</Text>
    </View>
  );
}

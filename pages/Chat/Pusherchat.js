// import React, { useState, useCallback, useEffect } from "react";
// // import { Text } from "react-native-paper";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Image,
//   Dimensions,
//   Animated,
//   ImageBackground,
//   LogBox,
// } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import {
//   Bubble,
//   GiftedChat,
//   InputToolbar,
//   SystemMessage,
// } from "react-native-gifted-chat";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import { Icon } from "react-native-elements";
// import PusherJs from "pusher-js/react-native";
// import Url from "../../apis/axiosApi";

// export default function Pusherchat({ navigation }) {
//   LogBox.ignoreAllLogs();
//   const [roomMemberid, setId] = useState(0);
//   const [room, setRoom] = useState(1);

//   const [messages, setMessages] = useState([]);
//   useEffect(async () => {
//     const token = await AsyncStorage.getItem("token");
//     // navigation.setOptions({ title: route.params.name });
//     const formData = new FormData();
//     formData.append("room_id", room);

//     const pusher = new PusherJs("cbb882a63fa5dbf8b739", {
//       cluster: "eu",
//     });

//     const channel = pusher.subscribe("Chat" + room);
//     channel.bind("App\\Events\\NewMessage", function (data) {
//       console.log(data);

//       setMessages((prev) => {
//         return [
//           {
//             _id: prev.length,
//             text: data.message.message,
//             user: {
//               _id: data.username,
//             },
//           },
//           ...prev,
//         ];
//       });
//     });

//     const response = await fetch("http://192.168.3.152:8000/api/getmsg", {
//       headers: {
//         // Authorization: `Bearer ${token}`,
//       },
//       method: "post",
//       body: formData,
//     });
//     const result = await response.json();
//     console.log("messages", result);

//     const allMessages = [];
//     result.map((mes, key) => {
//       const m = {
//         _id: key,
//         text: mes.message,
//         user: {
//           _id: mes.member_id,
//           name: mes.room_member.user.name,
//         },
//       };
//       allMessages.unshift(m);
//     });
//     setMessages(allMessages);
//     return () => {
//       pusher.unsubscribe("chat" + room);
//     };
//   }, []);

//   const onSend = async (message) => {
//     const formData = new FormData();
//     formData.append("message", message[0].text);
//     formData.append("room_id", room);
//     const token = await AsyncStorage.getItem("token");

//     const response = await fetch("http://192.168.3.152:8000/api/messagesuser", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       method: "post",
//       body: formData,
//     });
//   };

//   const ToolBar = (props) => {
//     return (
//       <InputToolbar
//         {...props}
//         containerStyle={{
//           backgroundColor: "#435A64",
//           borderRadius: 20,
//           marginBottom: 5,
//         }}
//       />
//     );
//   };
//   const scrollToBottom = (props) => {
//     return <FontAwesome name="angle-double-down" size={22} color="# 333" />;
//   };
//   const renderBubble = (props) => {
//     return (
//       <Bubble
//         {...props}
//         wrapperStyle={{
//           left: {
//             paddingTop: 5,
//             backgroundColor: "#435A64",
//           },
//           right: {
//             paddingTop: 5,
//             backgroundColor: "#075E54",
//           },
//         }}
//         textStyle={{
//           right: {
//             color: "#fff",
//           },
//           left: {
//             color: "#fff",
//           },
//         }}
//       />
//     );
//   };
//   return (
//     <ImageBackground
//       source={require("./chat.jpg")}
//       resizeMode="cover"
//       style={styles.image}
//     >
//       <GiftedChat
//         renderInputToolbar={ToolBar}
//         messages={messages}
//         onSend={(messages) => onSend(messages)}
//         user={{
//           _id: roomMemberid,
//         }}
//         renderBubble={renderBubble}
//         scrollToBottom
//         scrollToBottomComponent={scrollToBottom}
//         multiline
//         minComposerHeight={45}
//         maxComposerHeight={50}
//         textInputStyle={styles.message}
//       />
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   message: {
//     color: "white",
//     alignSelf: "center",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 0,
//   },
//   image: {
//     flex: 1,
//     justifyContent: "center",
//   },
// });

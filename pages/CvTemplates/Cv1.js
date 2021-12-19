import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AnimatedLottieView from "lottie-react-native";
import { getallDetails } from "../../redux/actions/userdetailsAction";
import { logoutUser } from "../../redux/actions/userAction";
import image from "./wallpaper.jpg";
import {
  View,
  StyleSheet,
  Button,
  Platform,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
  TextInput,
} from "react-native";
import * as Print from "expo-print";
import { Icon } from "react-native-elements";
import { shareAsync } from "expo-sharing";
import { NavigationContainer } from "@react-navigation/native";
import AwesomeAlert from "react-native-awesome-alerts";

export default function Cv1({ navigation }) {
  const dispatch = useDispatch();
  const [userskills, setUserskills] = useState([]);
  const [userexperience, setUserexperience] = useState([]);
  const [userenrollment, setUserenrollment] = useState([]);
  const [userinterest, setUserinterest] = useState([]);

  const [showAlert, setShowAlert] = useState(false);
  console.log(showAlert);
  const user = useSelector((state) => state.userdata.users);
  const user_id = user.id;
  const userdetails = useSelector((state) => state.userdetails.userdetails);
  // let userskills = userdetails.skills;
  // let userexperience = userdetails.experience;
  // let userenrollment = userdetails.enrollment;
  // let userinterest = userdetails.interest;
  ///////test/////////////////////
  // let userskills = null;
  // let userexperience = null;
  // let userenrollment = null;
  // let userinterest = null;
  //////test/////////////////////

  // console.log("ewwwwwwwwwwww", userenrollnt);
  const show = () => {
    setShowAlert(true);
  };

  const hide = () => {
    setShowAlert(false);
  };

  // const logoutask = () =>
  //   Alert.alert("Alert ", "Are you sure you want to exit", [
  //     {
  //       text: "No",
  //       onPress: () => console.log("Cancel Pressed"),
  //       style: "cancel",
  //     },
  //     {
  //       text: "Exit",

  //       onPress: () => {
  //         navigation.navigate("Login");
  //       },
  //     },
  //   ]);

  const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  
    </head>
  <body style="text-align: center;background-color:lightgray; min-height:1000px  -moz-box-sizing: border-box;
  box-sizing: border-box">
  <!--page container-->
  <div style="margin:10px; display:flex; min-height:900px; position: relative">
                                                                                      <!--part left-->
      <div style="background-color:white; width:33%; margin:16px 5px; max-height: 1075px; box-shadow:3px 3px 5px 4px gray ">
          <div class="allLeft" margin:"30px>
                                                                                      <!--picture-->
              <div style="width:100%" >
                  <img src= "https://cv-maker1-backend.herokuapp.com/${
                    userdetails && userdetails.file_path
                  }" style="width:70%; height:"70%">
                  <h2 class="jane">${userdetails && userdetails.fname}${
    userdetails && userdetails.lname
  } </h2>
  <h2 class="jane" style="margin-bottom:-40px">${
    userdetails && userdetails.major[0].major
  }
   </h2>
              </div>
                                                                                      <!--Enter data-->
              <div style="margin:-10px -20px">
                  <p style="color:gray"><i style="color:teal; margin-right:20px; font-size:20px" class="fa">&#xf0b1;</i>
                   
                  </p>
                  <p style="color:gray"><i style="color:teal; margin-right:20px; font-size:20px" class="fa">&#xf015;</i>${
                    userdetails && userdetails.address
                  }</p>
                  <p style="color:gray"><i style="color:teal; margin-right:20px; font-size:20px" class="fa">&#xf0e0;</i>${
                    userdetails && userdetails.email
                  }</p>
                  <p style="color:gray"><i style="color:teal; margin-right:20px; font-size:20px" class="fa">	&#xf095;</i>${
                    userdetails && userdetails.phone
                  }</p>
                  <p style="color:gray"><i style="color:teal; margin-right:20px; font-size:20px" class="fa">	&#xf095;</i>${
                    userdetails && userdetails.gender
                  }</p>
              </div>
          <hr style="color:lightgray; margin:0 30px">
                                                                                      <!--Enter Skills-->
              <div style="style="margin:-10px 20px"">
                  <p style="font-size:20px;"><i class="fa">&#xf069;</i><b>Skills</b></p>
                 
                  ${
                    userskills?.length > 0 &&
                    userskills
                      .map(
                        (
                          item
                        ) => `<p>${item.skill}</p> <div style="background-color:lightgray; border-radius:15px ">
                    <div style="background-color:teal; border-radius:15px; color:white" id="ninty">${item.skill}</div>
                </div>`
                      )
                      .join("")
                  }                  
                  
                 
            
                  <p style="star"><i class="fa">	&#xf0ac;</i><b>Languages</b></p>
                  <p></p>
                  <div style="background-color:lightgray; border-radius:15px center">
                      <div style="background-color:teal; border-radius:15px; color:white" id="one-hundred">100%</div>
                  </div>
                  
                 
              </div>
          </div>
      </div>
                                                                                      <!--part right-->
      <div style="width:70%; margin:-4px -8px 0 5px;">
          <div style="background-color:white; box-shadow:3px 3px 5px 4px gray; ">
                                                                                      <!--write experience-->
              <div style="margin:0 30px">
                  <h2 class="icon"><i class="fa">&#xf0f2;</i>Work Experience</h2>
              </div>
 

              <div style="margin:0 30px">
              ${
                userexperience?.length > 0 &&
                userexperience
                  .map(
                    (item) =>
                      `<h5>${item.job_title} / ${item.company}</h5><h6><i class="fa">&#xf073;</i>${item.from} to <span>${item.to}</span></h6>
                  <p>${item.description}</p>`
                  )
                  .join("")
              }
              </div>
            
             
         
             
          </div>
                                                                                      <!--levels education-->
          <div style="background-color:white; box-shadow:3px 3px 5px 4px gray; ">
              <div style="margin:0 30px">
                  <h2 class="icon"><i class="fa">&#xf0a3;</i>Education</h2>
              </div>
        
              <div style="margin:0 30px">
              ${
                userenrollment?.length > 0 &&
                userenrollment
                  .map(
                    (item) =>
                      `<h5>${item.university}</h5>
                  <h6><i class="fa">&#xf073;</i>${item.from} to ${item.to}</h6>
                  <p>${item.level}</p>
              </div>`
                  )
                  .join("")
              }
              <div style="background-color:white; box-shadow:3px 3px 5px 4px gray; ">
              <div style="margin:0 30px">
                  <h2 class="icon"><i class="fa">&#xf0f2;</i>Interests</h2>
              </div>
 

              <div style="margin:0 0 0 35%"> 
              ${
                userinterest?.length > 0 &&
                userinterest
                  .map(
                    (item) =>
                      `<h4 style="margin:30px ; border: 2px solid teal;border-radius: 15px;width:100px ; padding:4px";>${item.interest} </h4>`
                  )
                  .join("")
              }
              </div>
            </div>
          </div>
          
      </div>
                                                                                      <!--end container-->
  </div>
                                                                                      <!--footer-->
 
  </body>
</html>
`;

  const [selectedPrinter, setSelectedPrinter] = React.useState();

  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url, // iOS only
    });
  };

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({
      html,
    });
    console.log("File has been saved to:", uri);
    await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
  };

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  };
  useEffect(() => {
    navigation.setOptions({
      title: "Profile Page",
      headerLeft: () => (
        <TouchableOpacity
          style={{ paddingRight: 10, marginLeft: 20, marginRight: 50 }}
          onPress={() => navigation.navigate("Update")}
        >
          <Icon name="edit" size={33} color="#111" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{ paddingRight: 10 }}
          // onPress={() => logoutask(navigation)}
          onPress={() => show()}
        >
          <Icon name="logout" size={28} color="#111" />
        </TouchableOpacity>
      ),
    }),
      dispatch(getallDetails(user_id));
  }, []);
  useEffect(() => {
    setUserskills(userdetails && userdetails && userdetails.skills);
    setUserexperience(userdetails && userdetails.experience);
    setUserenrollment(userdetails && userdetails.enrollment);
    setUserinterest(userdetails && userdetails.interest);
  }, [userdetails]);
  return (
    <View style={styles.container}>
      {console.log({ userdetails })}
      <Image
        source={{
          uri: `https://cv-maker1-backend.herokuapp.com/${
            userdetails && userdetails.file_path
          }`,
        }}
        style={{
          width: "100%",
          height: "40%",
          borderBottomLeftRadius: 70,
          borderBottomRightRadius: 70,
        }}
      />
      <Text
        style={{
          textAlign: "center",
          marginBottom: -20,
          marginTop: 20,
          fontWeight: "bold",
          fontSize: 25,
        }}
      >
        {userdetails && userdetails.fname} {userdetails && userdetails.lname}
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginBottom: 20,
          marginTop: 20,
          fontWeight: "bold",
          fontSize: 15,
        }}
      >
        {userdetails && userdetails.major[0].major}
        {""} Developer
      </Text>
      <Pressable onPress={print}>
        <Text
          style={{
            textAlign: "center",
            marginBottom: -20,
            marginTop: 20,
            fontWeight: "bold",
            fontSize: 13,
          }}
        >
          Open Your Resume
        </Text>
        <AnimatedLottieView
          style={{ height: 50, alignSelf: "center", margin: 20 }}
          source={require("./47226-pdf-file.json")}
          autoPlay
          loop={true}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          printToFile();
        }}
      >
        <Text
          style={{
            textAlign: "center",
            marginBottom: -20,
            marginTop: 20,
            fontWeight: "bold",
            fontSize: 13,
          }}
        >
          Share Your Resume
        </Text>
        <AnimatedLottieView
          style={{ height: 40, alignSelf: "center", margin: 20 }}
          source={require("./24224-send-button.json")}
          autoPlay
          loop={true}
        />
      </Pressable>

      <View></View>

      {Platform.OS === "ios" && (
        <>
          <View style={styles.spacer} />
          <Button title="Select printer" onPress={selectPrinter} />
          <View style={styles.spacer} />
          {selectedPrinter ? (
            <Text
              style={styles.printer}
            >{`Selected printer: ${selectedPrinter.name}`}</Text>
          ) : undefined}
          <Button
            title="GO"
            onPress={() => navigation.navigate("ProfilePage")}
          />
        </>
      )}
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Warnning"
        message="Are you Sure You Want To Exit"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="Cancel"
        confirmText="Exit"
        confirmButtonColor="#DD6B55"
        onCancelPressed={() => {
          hide();
        }}
        onConfirmPressed={() => {
          navigation.navigate("Login");
          hide();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  blockButton: {
    marginTop: 100,
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
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    flexDirection: "column",
  },
  spacer: {},
  printer: {
    textAlign: "center",
  },
  headerLeft: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userProfileImage: { height: "100%", aspectRatio: 1, borderRadius: 100 },
  container: {
    flex: 1,
    backgroundColor: "#f2f2ff",
  },
  messageInputView: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 14,
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  messageInput: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  messageSendView: {
    paddingHorizontal: 10,
    justifyContent: "center",
  },
});

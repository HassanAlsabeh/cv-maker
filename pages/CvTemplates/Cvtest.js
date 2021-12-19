import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import * as Print from "expo-print";

export default function Cvtest(userdetails) {
  console.log("mmmmmmmmmmmmmmmmmm", userdetails);
  let userskills = userdetails.skills;
  let userexperience = userdetails.experience;
  let userenrollment = userdetails.enrollment;
  let userinterest = userdetails.interest;
  // console.log("ewwwwwwwwwwww", userenrollnt);

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
                  <img src= "https://www.vippng.com/png/detail/355-3554387_create-digital-profile-icon-blue-profile-icon-png.png" style="width:70%; height:"70%">
                  <h2 class="jane">${userdetails.fname}${
    userdetails.lname
  } </h2>
              </div>
                                                                                      <!--Enter data-->
              <div style="margin:-10px -20px">
                  <p style="color:gray"><i style="color:teal; margin-right:20px; font-size:20px" class="fa">&#xf0b1;</i>
                   
                  </p>
                  <p style="color:gray"><i style="color:teal; margin-right:20px; font-size:20px" class="fa">&#xf015;</i>${
                    userdetails.address
                  }</p>
                  <p style="color:gray"><i style="color:teal; margin-right:20px; font-size:20px" class="fa">&#xf0e0;</i>${
                    userdetails.email
                  }</p>
                  <p style="color:gray"><i style="color:teal; margin-right:20px; font-size:20px" class="fa">	&#xf095;</i>${
                    userdetails.phone
                  }</p>
                  <p style="color:gray"><i style="color:teal; margin-right:20px; font-size:20px" class="fa">	&#xf095;</i>${
                    userdetails.gender
                  }</p>
              </div>
          <hr style="color:lightgray; margin:0 30px">
                                                                                      <!--Enter Skills-->
              <div style="style="margin:-10px 20px"">
                  <p style="font-size:20px;"><i class="fa">&#xf069;</i><b>Skills</b></p>
                 
                  ${
                    userskills &&
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
                userexperience &&
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
                userenrollment &&
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
                userinterest &&
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

  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html,
    });
  };
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
    padding: 8,
  },
  spacer: {
    height: "20%",
  },
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
    marginBottom: "20%",
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

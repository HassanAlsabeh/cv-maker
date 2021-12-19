import urlAxios from "../../apis/axiosApi";
import { ActionTypes } from "../contants/action-types";

export const addexperience = (
  user_id,
  job_title,
  company,
  location,
  description,
  from,
  to,
  navigation
) => {
  return async function (dispatch) {
    try {
      const userexperience = new FormData();
      userexperience.append("user_id", user_id);
      userexperience.append("job_title", job_title);
      userexperience.append("company", company);
      userexperience.append("location", location);
      userexperience.append("description", description);
      userexperience.append("from", from);
      userexperience.append("to", to);

      const response = await urlAxios.post("/addexperience", userexperience, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const userExperience = response.data;
      if (userExperience.success) {
       
       
        dispatch({
          type: ActionTypes.ADDEXPERIENCE,
          payload: userExperience.data,
        });
        alert("Added Successfully");  
      }
      else {
        
      }
    } catch (err) {
      if (err.response && err.response.status === 500) {
        alert("All Fields are required");
      }
      console.log("error", err.message);
    }
  };
};

// export const addexperience2 = (
//     user_id,
//     job_title,
//     company,
//     location,
//     description,
//     from,
//     to,
//     navigation
//   ) => {
//     return async function (dispatch) {
//       try {
//         const userexperience = new FormData();
//         userexperience.append("user_id", user_id);
//         userexperience.append("job_title", job_title);
//         userexperience.append("company", company);
//         userexperience.append("location", location);
//         userexperience.append("description", description);
//         userexperience.append("from", from);
//         userexperience.append("to", to);
  
//         const response = await urlAxios.post("/addexperience", userexperience, {
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//         });
//         const userExperience = response.data;
//         if (userExperience.success) {
//           navigation.navigate("Interests", { user_id: user_id });
  
//           dispatch({
//             type: ActionTypes.ADDEXPERIENCE,
//             payload: userExperience.data,
//           });
//           alert("Added Successfully");
//         } else {
//           navigation.navigate("Interests", { user_id: user_id });
//         }
//       } catch (err) {
//         if (err.response && err.response.status === 500) {
//           alert("All Fields are required");
//         }
//         console.log("error", err.message);
//       }
//     };
//   };
  
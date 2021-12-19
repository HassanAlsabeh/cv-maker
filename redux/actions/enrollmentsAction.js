import urlAxios from "../../apis/axiosApi";
import { ActionTypes } from "../contants/action-types";

export const addenrollment = (
  user_id,
  university,
  level,
  from,
  to,
  navigation
) => {
  return async function (dispatch) {
    try {
      const userenrollment = new FormData();
      userenrollment.append("user_id", user_id);
      userenrollment.append("university", university);
      userenrollment.append("level", level);
      userenrollment.append("from", from);
      userenrollment.append("to", to);

      const response = await urlAxios.post("/addenrollment", userenrollment, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const userEnrollment = response.data;
      if (userEnrollment.success) {
        dispatch({
          type: ActionTypes.ADDENROLLMENT,
          payload: userEnrollment.data,
        });
        alert("Added Successfully");
      } else {
      }
    } catch (err) {
      if (err.response && err.response.status === 500) {
        alert("All Fields are required");
      }
      console.log("error", err.message);
    }
  };
};

// export const addenrollment2 = (
//   user_id,
//   university,
//   level,
//   from,
//   to,
//   navigation
// ) => {
//   return async function (dispatch) {
//     try {
//       const userenrollment = new FormData();
//       userenrollment.append("user_id", user_id);
//       userenrollment.append("university", university);
//       userenrollment.append("level", level);
//       userenrollment.append("from", from);
//       userenrollment.append("to", to);

//       const response = await urlAxios.post("/addenrollment", userenrollment, {
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       });
//       const userEnrollment = response.data;
//       if (userEnrollment.success) {
//         navigation.navigate("Experience", { user_id: user_id });

//         dispatch({
//           type: ActionTypes.ADDENROLLMENT,
//           payload: userEnrollment.data,
//         });
//         alert("Added Successfully");
//       } else {
//         navigation.navigate("Experience", { user_id: user_id });
//       }
//     } catch (err) {
//       if (err.response && err.response.status === 500) {
//         alert("All Fields are required");
//       }

//       console.log("error", err.message);
//     }
//   };
// };

import urlAxios from "../../apis/axiosApi";
import { ActionTypes } from "../contants/action-types";

export const addinterest = (user_id, interest, navigation) => {
  return async function (dispatch) {
    try {
      const userinterest = new FormData();
      userinterest.append("user_id", user_id);
      userinterest.append("interest", interest);

      const response = await urlAxios.post("/addinterest", userinterest);
      const userInterest = response.data;

      if (userInterest.success) {
        dispatch({
          type: ActionTypes.ADDINTEREST,
          payload: userInterest.data,
        });
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

export const getinterests = (user_id) => {
  return async function (dispatch) {
    try {
      const response = await urlAxios.get(`/interest/${user_id}`);
      dispatch({ type: ActionTypes.GETINTERESTS, payload: response.data.data });
    } catch (err) {
      if (err.response) {
        console.log(err.response.message);
      }
      console.log(err.message);
    }
  };
};

export const deleteinterest = (index) => async (dispatch, getState) => {
  try {
    const response = await urlAxios.delete(`/delete_interest/${index}`);
    const result = response.data;

    const newData = getState().getinterests.getinterests.filter(
      (item) => item.id !== index
    );

    dispatch({ type: ActionTypes.DELETEINTEREST, payload: newData });
  } catch (e) {
    console.log(e);
  }
};
// export const deleteinterest = (index, navigation) => {
//   console.log("iiiidddddd", index);
//   return async function (dispatch) {
//     try {
//       const response = await urlAxios.delete(`/delete_interest/${index}`);
//       dispatch(getinterests());
//       dispatch({
//         type: ActionTypes.DELETEINTEREST,
//       });
//     } catch (err) {
//       if (err.response) {
//         console.log(err.response.message);
//       }
//       console.log(err.message);
//     }
//   };
// };

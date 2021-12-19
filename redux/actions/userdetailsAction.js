import urlAxios from "../../apis/axiosApi";
import { ActionTypes } from "../contants/action-types";

export const getallDetails = (user_id) => {
  return async function (dispatch) {
    try {
      const response = await urlAxios.get(`/userinfo/${user_id}`);
      dispatch({
        type: ActionTypes.GETUSERDETAILS,
        payload: response.data.data,
      });
    } catch (err) {
      if (err.response) {
        console.log(err.response.message);
      }
      console.log(err.message);
    }
  };
};

export const getAllUsers = () => {
  return async function (dispatch) {
    try {
      const response = await urlAxios.get("/getall");
      dispatch({
        type: ActionTypes.GETALLUSERS,
        payload: response.data,
      });
    } catch (err) {
      if (err.response) {
        console.log(err.response.message);
      }
      console.log(err.message);
    }
  };
};

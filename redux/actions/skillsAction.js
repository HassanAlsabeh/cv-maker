import urlAxios from "../../apis/axiosApi";
import { ActionTypes } from "../contants/action-types";

export const addskill = (value, levelname1, user_id, navigation) => {
  return async function (dispatch) {
    try {
      const userskill1 = new FormData();
      userskill1.append("user_id", user_id);
      userskill1.append("skill_id", value);
      userskill1.append("rating", levelname1);
      console.log("dataaaddddddaa", value, user_id, levelname1);
      const response = await urlAxios.post("/adduserskill", userskill1);

      const userSkill1 = response.data;

      if (userSkill1.success) {
        dispatch({
          type: ActionTypes.ADDSKILL,
          payload: userSkill1.data,
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

export const getskill = () => {
  return async function (dispatch) {
    try {
      const response = await urlAxios.get("/getskills");

      dispatch({ type: ActionTypes.GETSKILL, payload: response.data.data });
    } catch (err) {
      if (err.response) {
        console.log(err.response.message);
      }
      console.log(err.message);
    }
  };
};

export const getskilluser = (user_id) => {
  return async function (dispatch) {
    try {
      const response = await urlAxios.get(`/skilluser/${user_id}`);
      dispatch({ type: ActionTypes.FETCHSKILL, payload: response.data.data });
    } catch (err) {
      if (err.response) {
        console.log(err.response.message);
      }
      console.log(err.message);
    }
  };
};

export const deleteskill = (index) => async (dispatch, getState) => {
  try {
    const response = await urlAxios.delete(`/delete_skilluser/${index}`);
    const result = response.data;

    const newData = getState().fetchskills.fetchskills.filter(
      (item) => item.id !== index
    );

    dispatch({ type: ActionTypes.DELETESKILL, payload: newData });
  } catch (e) {
    console.log(e);
  }
};

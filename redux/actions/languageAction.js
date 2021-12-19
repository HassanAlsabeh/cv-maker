import urlAxios from "../../apis/axiosApi";
import { ActionTypes } from "../contants/action-types";

export const getLanguages = () => {
  return async function (dispatch) {
    try {
      const response = await urlAxios.get("/language");
      dispatch({ type: ActionTypes.GETLANGUAGES, payload: response.data.data });
    } catch (err) {
      if (err.response) {
        console.log(err.response.message);
      }
      console.log(err.message);
    }
  };
};

export const addLanguageUser = (value, levelname1, user_id, navigation) => {
  return async function (dispatch) {
    try {
      const languagedata1 = new FormData();
      languagedata1.append("language_id", value);
      languagedata1.append("level", levelname1);
      languagedata1.append("user_id", user_id);
      const response = await urlAxios.post("/addlanguageuser", languagedata1, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const languageData = response.data;

      if (languageData.success) {
        dispatch({
          type: ActionTypes.SETLANGUAGE,
          payload: languageData.data,
        });
        navigation.navigate("Skills", { user_id: user_id });
        alert("Added Successfully");
      }
    } catch (err) {}
  };
};

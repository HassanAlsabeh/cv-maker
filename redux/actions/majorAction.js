import urlAxios from '../../apis/axiosApi';
import { ActionTypes } from '../contants/action-types';

export const getMajors = () => {

  return async function (dispatch) {
    try {
      const response = await urlAxios.get('/major');
      dispatch({ type: ActionTypes.GETMAJORS, payload: response.data.data })
    } catch (err) {
      if (err.response) { 
        console.log(err.response.message);
      }
      console.log(err.message)
    }
  }
}


export const addMajorUser = (value,user_id, navigation) => {
  return async function (dispatch) {
    try {
      
      const majordata1 = new FormData();
      majordata1.append("major_id", value);
      majordata1.append("user_id", user_id);
        const response = await urlAxios.post("/addmajoruser", majordata1, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const magorData = response.data;
     
      if (magorData.success) {
        navigation.navigate("UserInfo",{user_id:user_id});
        dispatch({
          type: ActionTypes.SETMAJOR,
          payload: magorData.data,
        });
      }
    } catch (err) {
      alert("Something went wrong");
      
    }
  };
};

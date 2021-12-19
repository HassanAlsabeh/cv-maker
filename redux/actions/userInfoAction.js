import urlAxios from "../../apis/axiosApi";
import { ActionTypes } from "../contants/action-types";

export const adduserinfo = (
  user_id,
  fname,
  lname,
  email,
  phone,
  address,
  selectedGender,
  about,
  file_path,
  navigation
) => {
  return async function (dispatch) {
    try {
      const userinfodata1 = new FormData();
      userinfodata1.append("user_id", user_id);
      userinfodata1.append("fname", fname);
      userinfodata1.append("lname", lname);
      userinfodata1.append("email", email);
      userinfodata1.append("phone", phone);
      userinfodata1.append("address", address);
      userinfodata1.append("gender", selectedGender);
      userinfodata1.append("about", about);
      userinfodata1.append("file_path", {
        type: "image/jpg",
        uri: file_path,
        name: "uploaded.jpg",
      });
      console.log(userinfodata1);
      const response = await urlAxios.post("/addinfo", userinfodata1, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const userinfoData = response.data;

      if (userinfoData.success) {
        navigation.navigate("Enrollments", { user_id: user_id });
        dispatch({
          type: ActionTypes.ADDUSERINFO,
          payload: userinfoData.data,
        });
      } else {
        alert("All Fields Required");
      }
    } catch (err) {
      alert(err);
    }
  };
};

export const updateUserInfo = (
  user_id,
  fname,
  lname,
  email,
  phone,
  address,
  selectedGender,
  about,
  file_path,
  navigation
) => {
  return async function (dispatch) {
    try {
      const updateduserinfo1 = new FormData();
      if (fname) {
        updateduserinfo1.append("fname", fname);
      }
      if (user_id) {
        updateduserinfo1.append("user_id", user_id);
      }
      if (lname) {
        updateduserinfo1.append("lname", lname);
      }
      if (phone) {
        updateduserinfo1.append("phone", phone);
      }
      if (email) {
        updateduserinfo1.append("email", email);
      }
      if (address) {
        updateduserinfo1.append("address", address);
      }
      if (file_path) {
        updateduserinfo1.append("file_path", file_path);
      }
      if (about) {
        updateduserinfo1.append("about", about);
      }
      if (selectedGender) {
        updateduserinfo1.append("selectedGender", selectedGender);
      }
      console.log("uuuuuuuuuuuuu", updateduserinfo1);

      const response = await urlAxios.post(
        `/update_userinfo/1?_method=put`,
        updateduserinfo1,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const updateduserInfo = response.data;
      if (updateduserInfo.success) {
        dispatch({
          type: ActionTypes.UPDATE_USERINFO,
          payload: updateduserInfo.data,
        });
        alert("Successfully Updated");
        navigation.navigate("Update");
      }
    } catch (err) {
      if (err.response) {
        console.log(err.response.message);
      }
    }
  };
};

// if (err.response && err.response.status === 500) {
//   alert("All Fields are required");
// }

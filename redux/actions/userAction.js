import urlAxios from "../../apis/axiosApi";
import { ActionTypes } from "../contants/action-types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Store = async (value) => {
  try {
    await AsyncStorage.setItem("token", value);
  } catch (error) {}
};

export const loginusers = (email, password, navigation) => {
  return async function (dispatch) {
    try {
      const userdata1 = new FormData();
      userdata1.append("email", email);
      userdata1.append("password", password);
      const response = await urlAxios.post("/users/login", userdata1);
      const userdata = response.data;
      if (userdata.success) {
        Store(userdata.access_token);
        dispatch({ type: ActionTypes.LOGINUSERS, payload: userdata.data });
      }
      if (!userdata.data.user_info) {
        navigation.navigate("Dashboard");
      } else {
        navigation.navigate("TabPages");
      }
    } catch (err) {
      alert("Wrong Email or Password");
    }
  };
};
// AsyncStorage.getAllKeys((err, keys) => {
//   AsyncStorage.multiGet(keys, (error, stores) => {
//     stores.map((result, i, store) => {
//       console.log({ [store[i][0]]: store[i][1] });
//       return true;
//     });
//   });
// });

export const loginusers1 = (email2, password2, navigation) => {
  return async function (dispatch) {
    try {
      const companydata = new FormData();
      companydata.append("email", email2);
      companydata.append("password", password2);
      const response = await urlAxios.post("/companies/login", companydata);
      const companyData = response.data;
      if (companyData.success) {
        Store(companyData.access_token);
        dispatch({
          type: ActionTypes.LOGINCOMPANIES,
          payload: companyData.data,
        });
      }
      navigation.navigate("CompanyPage");
    } catch (err) {
      alert("Wrong Email or Password");
    }
  };
};
AsyncStorage.getAllKeys((err, keys) => {
  AsyncStorage.multiGet(keys, (error, stores) => {
    stores.map((result, i, store) => {
      console.log({ [store[i][0]]: store[i][1] });
      return true;
    });
  });
});
console.log("asynch storage", AsyncStorage);

export const registerusers = (name, email, password, navigation) => {
  return async function (dispatch) {
    try {
      const registerdata = new FormData();
      registerdata.append("name", name);
      registerdata.append("email", email);
      registerdata.append("password", password);
      const response = await urlAxios.post("/users/register", registerdata, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const registerData = response.data;
      if (registerData.success) {
        navigation.navigate("Login");
        dispatch({
          type: ActionTypes.REGISTERUSERS,
          payload: registerData.data,
        });
        alert("Successfully Registered");
      }
    } catch (err) {
      if (err.response && err.response.status === 422) {
        alert(err.response.data.errors.email[0]);
      }
    }
  };
};

export const logoutUser = async (navigation) => {
  try {
    await AsyncStorage.removeItem("token");
    navigation.navigate("Home");
  } catch (err) {
    console.log(err);
  }
};

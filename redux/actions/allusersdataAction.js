// import urlAxios from "../../apis/axiosApi";
// import { ActionTypes } from "../contants/action-types";

// export const getAllUsers = () => {
//   return async function (dispatch) {
//     try {
//       const response = await urlAxios.get("/getall");
//       console.log("yaaaaaaaaaaa", response.data.DATA);
//       dispatch({
//         type: ActionTypes.GETALLUSERS,
//         payload: response.data.data,
//       });
//     } catch (err) {
//       if (err.response) {
//         console.log(err.response.message);
//       }
//       console.log(err.message);
//     }
//   };
// };

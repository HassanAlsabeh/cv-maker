import { ActionTypes } from "../contants/action-types";

const initialState = {
  userdetails: [],
  allusers: [],
};

export const getUserDetails = (
  state = initialState.userdetails,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.GETUSERDETAILS:
      return {
        userdetails: payload,
      };

    default:
      return state;
  }
};
export const getAllUsers = (
  state = initialState.allusers,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.GETALLUSERS:
      return {
        allusers: payload,
      };

    default:
      return state;
  }
};

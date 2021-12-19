import { ActionTypes } from "../contants/action-types";

const initialState = {
  userInfo: [],
};

export const userInfoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADDUSERINFO:
      return {
        userInfo: payload,
      };
    case ActionTypes.UPDATE_USERINFO:
        return {
          userInfo: payload,
        };

    default:
      return state;
  }
};

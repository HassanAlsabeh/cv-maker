import { ActionTypes } from "../contants/action-types";

const initialState = {
  experience: [],
};

export const userexperience = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADDEXPERIENCE:
      return {
        experience: payload,
      };
    // case ActionTypes.UPDATE_USERINFO:
    //     return {
    //       users: payload,
    //     };

    default:
      return state;
  }
};

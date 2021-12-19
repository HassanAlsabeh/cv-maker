import { ActionTypes } from "../contants/action-types";

const initialState = {
  allusers: [],
};

export const getAllUsersData = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GETALLUSERS:
      return {
        allusers: payload,
      };

    default:
      return state;
  }
};

import { ActionTypes } from "../contants/action-types";

const initialState = {
  enrollments: [],
};

export const userenrollment = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADDENROLLMENT:
      return {
        enrollments: payload,
      };
    // case ActionTypes.UPDATE_USERINFO:
    //     return {
    //       users: payload,
    //     };

    default:
      return state;
  }
};

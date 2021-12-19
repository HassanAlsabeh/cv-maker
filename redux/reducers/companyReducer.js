import { ActionTypes } from "../contants/action-types";

const initialState = {
  companies: [],
};

export const companyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGINCOMPANIES:
      return {
        companies: payload,
      };

    default:
      return state;
  }
};

import { ActionTypes } from "../contants/action-types";

const initialState = {
  majors: [],
  majordata:[],
};

export const getMajorReducer = (state = initialState.majors, { type, payload }) => {
  switch (type) {
    case ActionTypes.GETMAJORS:
      return {
        majors: payload,
      };
   
    default:
      return state;
  }
};
export const majorReducer = (state = initialState.majordata, { type, payload }) => {
  switch (type) {
    case ActionTypes.SETMAJOR:
      return {
        majordata: payload,
      };
   
    default:
      return state;
  }
};


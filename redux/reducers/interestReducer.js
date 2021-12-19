import { ActionTypes } from "../contants/action-types";

const initialState = {
  interests: [],
  getinterests: [],
};

export const userinterest = (
  state = initialState.interests,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.ADDINTEREST:
      return {
        interests: payload,
      };

    default:
      return state;
  }
};

export const fetchinterests = (
  state = initialState.getinterests,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.GETINTERESTS:
      return {
        getinterests: payload,
      };
    case ActionTypes.DELETEINTEREST:
      return {
        getinterests: payload,
      };

    default:
      return state;
  }
};

// case ActionTypes.ADDINTEREST:

//   return {
//     ...state,
//     interests: {
//       ...interests,
//       payload,
//     },
//   };
// // case ActionTypes.GETINTERESTS:
// //     return {
// //       ...state,
// //       interests: payload,
// //     };

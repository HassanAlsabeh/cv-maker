import { ActionTypes } from "../contants/action-types";

const initialState = {
  languages: [],
  languagedata: [],
};

export const getLanguageReducer = (
  state = initialState.languages,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.GETLANGUAGES:
      return {
        languages: payload,
      };

    default:
      return state;
  }
};
export const languageReducer = (
  state = initialState.languagedata,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SETLANGUAGE:
      return {
        languagedata: payload,
      };

    default:
      return state;
  }
};

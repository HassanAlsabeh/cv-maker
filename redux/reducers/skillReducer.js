import { ActionTypes } from "../contants/action-types";

const initialState = {
  skills: [],
  getskill: [],
  fetchskills: [],
};

export const userskill = (state = initialState.skills, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADDSKILL:
      return {
        skills: payload,
      };

    default:
      return state;
  }
};

export const fetchskills = (
  state = initialState.fetchskills,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.FETCHSKILL:
      return {
        fetchskills: payload,
      };
    case ActionTypes.DELETESKILL:
      return {
        fetchskills: payload,
      };

    default:
      return state;
  }
};
export const Skills = (state = initialState.getskill, { type, payload }) => {
  switch (type) {
    case ActionTypes.GETSKILL:
      return {
        getskill: payload,
      };

    default:
      return state;
  }
};

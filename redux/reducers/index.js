import { combineReducers } from "redux";
import { majorReducer } from "./majorReducer";
import { userReducer } from "./userReducer";
import { getMajorReducer } from "./majorReducer";
import { userInfoReducer } from "./userInfoReducer";
import { userenrollment } from "./enrollmentReducer";
import { userexperience } from "./experienceReducer";
import { userinterest } from "./interestReducer";
import { fetchinterests } from "./interestReducer";
import { getLanguageReducer, languageReducer } from "./languageReducer";
import { fetchskills, Skills, userskill } from "./skillReducer";
import { companyReducer } from "./companyReducer";
import { getUserDetails } from "./userdetailsReducer";
import { getAllUsers } from "./userdetailsReducer";

const reducers = combineReducers({
  userdata: userReducer,
  companies: companyReducer,
  registerusers: userReducer,
  majordata: majorReducer,
  majors: getMajorReducer,
  languagedata: languageReducer,
  languages: getLanguageReducer,
  userinfoData: userInfoReducer,
  enrollments: userenrollment,
  experience: userexperience,
  interests: userinterest,
  getinterests: fetchinterests,
  skills: userskill,
  getskill: Skills,
  fetchskills: fetchskills,
  userdetails: getUserDetails,
  allusers: getAllUsers,
});

export default reducers;

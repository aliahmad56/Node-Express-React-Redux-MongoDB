// index.js
// Hya file zariya espa kndre ki reducer sheni atetn combinedreducer zariya aten root reducer 
// sawzesi aur haya file espa store.js file import kosi 
import { combineReducers } from "redux";
import companyReducer from "./companyReducer";

export default combineReducers({
  company: companyReducer,
});

// Haya file espa redux che react connect koy. aur kia combined reducer ki sheni atetn root
// reducer haya import kosi.
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "../redux/reducers/";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;

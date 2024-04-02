import { createStore, applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./slices/layoutSlice";

// // Import your reducers here
// import authReducer from "./reducers/authReducer";
// import applyReducer from "./reducers/applyReducer";
// import jobReducer from "./reducers/jobReducer";
// import personalReducer from "./reducers/personalReducer";
// import candidateReducer from "./reducers/candidateReducer";
// import searchReducer from "./reducers/searchReducer";
// import scheduleInterview from "./reducers/scheduleInterview";
// import cmpReducer from "./reducers/cmpReducer";
// import intReducer from "./reducers/intReducer";
// import SubscriptionSlice from "./reducers/SubscriptionSlice";
// import alertReducer from "./reducers/alertReducer";

// Combine your reducers
const rootReducer = combineReducers({
  // auth: authReducer,
  // apply: applyReducer,
  // jobs: jobReducer,
  // personal: personalReducer,
  // candidate: candidateReducer,
  // searchJobs: searchReducer,
  // schedule: scheduleInterview,
  // company: cmpReducer,
  // sinterview: intReducer,
  // subscription: SubscriptionSlice,
  // alertMessage: alertReducer,
  layoutSlice: layoutSlice,
});

// Create the store with middleware applied
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

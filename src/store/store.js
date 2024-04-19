import { createStore, applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./slices/layoutSlice";

// // Import your reducers here

const rootReducer = combineReducers({
  layoutSlice: layoutSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

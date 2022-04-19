import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

export const rootReducer = combineReducers({
  data: reducer,
});
export const store = configureStore({
  reducer: rootReducer,
});

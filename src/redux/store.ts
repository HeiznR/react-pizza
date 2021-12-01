import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import dataFetch from "./reducers/Reducer";

const rootReducer = combineReducers({
  fetch: dataFetch,
});
export type rootState = ReturnType<typeof rootReducer>;
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

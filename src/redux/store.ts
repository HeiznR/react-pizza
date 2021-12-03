import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import dataFetch from "./reducers/FetchData";
import HandleCart from "./reducers/HandleCart";

const rootReducer = combineReducers({
  fetch: dataFetch,
  cart: HandleCart,
});
export type rootState = ReturnType<typeof rootReducer>;
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

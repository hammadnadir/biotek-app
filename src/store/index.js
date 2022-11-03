import { configureStore } from "@reduxjs/toolkit";
import combinedReducer from "../redux/rootReducer";
// import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({ reducer: combinedReducer });

export const initStore = () => {
  return configureStore({
    reducer: combinedReducer(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};
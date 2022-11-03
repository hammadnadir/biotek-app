import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";

const combinedReducer = () =>
  combineReducers({
    auth,
  });

export default combinedReducer;

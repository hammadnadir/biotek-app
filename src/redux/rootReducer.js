import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import global from "./global";

const combinedReducer = () =>
  combineReducers({
    auth,
    global
  });

export default combinedReducer;

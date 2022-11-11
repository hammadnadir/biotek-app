import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import global from "./global";
import expense from "./expense";

const combinedReducer = () =>
  combineReducers({
    auth,
    global,
    expense
  });

export default combinedReducer;

import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import global from "./global";
import expense from "./expense";
import voucher from "./voucher"

const combinedReducer = () =>
  combineReducers({
    auth,
    global,
    expense,
    voucher
  });

export default combinedReducer;

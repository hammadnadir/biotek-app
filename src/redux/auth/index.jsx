import { createSlice } from "@reduxjs/toolkit";
import { isLoggedIn } from "../../utils";

const initialState = {
  isLoggedIn: isLoggedIn(),
  user: "",
  newUser: {},
  isLoading: false,
  authError: false,
  token: "",
  refresh_token: "",
  updateUser: {} ,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state, action) => {
      state.isLoading = true;
      state.authError = false;
      state.isLoggedIn = false;
      state.user = action.payload;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.authError = false;
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.authError = action.payload;
      state.isLoggedIn = false;
      console.log("Error:", { message: action.payload.message });
    },
    updateRequest: (state, action) => {
      state.isLoading = true;
      state.authError = false;
      state.isLoggedIn = false;
      state.user = action.payload;
    },
    updateSuccess: (state, action) => {
      state.isLoading = false;
      state.authError = false;
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    updateFailure: (state, action) => {
      state.isLoading = false;
      state.authError = action.payload;
      state.isLoggedIn = false;
      console.log("Error:", { message: action.payload.message });
    },

    logoutRequest: (state, action) => {
      state.isLoading = true;
      state.authError = false;
    },
    logoutSuccess: (state, action) => {
      state.isLoading = false;
      state.authError = false;
      state.isLoggedIn = false;
    },
    logoutFailure: (state, action) => {
      state.isLoading = false;
      state.authError = action.payload.message;
      state.isLoggedIn = true;
      console.log("Error:", { message: action.payload.message });
    },

    signUpRequest: (state, action) => {
      state.isLoading = true;
      state.authError = false;
    },
    signUpSuccess: (state, action) => {
      state.isLoading = false;
      state.authError = false;
      state.newUser = action.payload;
    },
    signUpFailure: (state, action) => {
      state.isLoading = false;
      state.authError = action.payload.message;
      console.log("Error:", { message: action.payload.message });
    },

    forgotRequest: (state, action) => {
      state.isLoading = true;
    },
    forgotSuccess: (state, action) => {
      state.isLoading = false;
    },
    forgotFailure: (state, action) => {
      state.isLoading = false;
      console.log("Error:", { message: action.payload.message });
    },

    changePasswordRequest: (state, action) => {
      state.isLoading = true;
    },
    changePasswordSuccess: (state, action) => {
      state.isLoading = false;
    },
    changePasswordFailure: (state, action) => {
      state.isLoading = false;
      console.log("Error:", { message: action.payload.message });
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  updateRequest,
  updateSuccess,
  updateFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  forgotRequest,
  forgotSuccess,
  forgotFailure,
  changePasswordRequest,
  changePasswordSuccess,
  changePasswordFailure,
} = authSlice.actions;

export default authSlice.reducer;

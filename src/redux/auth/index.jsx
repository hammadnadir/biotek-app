import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { isLoggedIn } from "../../utils";
import { setLoading } from "../global";
// import { history } from "../history";
import request from "../request";

const initialState = {
  isLoggedIn: isLoggedIn(),
  user: "",
  newUser: {},
  isLoading: false,
  authError: false,
  token: "",
  refresh_token: "",
};

export const loginForm = createAsyncThunk("login/loginForm", async (payload, thunkAPI) => {
  try {
    let response;
    thunkAPI.dispatch(setLoading(true));
    response = await request.post(`auth/login`, payload).then((response) => response.data);
    thunkAPI.dispatch(setLoading(false));
    let authHeader = response.headers["authorization"];
    let token = authHeader.substring(7, authHeader.length);
    localStorage.setItem("biztek_token", token);
    localStorage.setItem("currentUser", JSON.stringify(response));
    // history.push("/");
    return response;
  } catch (error) {
    console.log("Error", error);
    return null;
  }
});

const signupSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginForm.pending, (state, action) => {
      state.isLoading = true;
      state.authError = false;
      state.isLoggedIn = false;
      state.user = action.payload;
    });
    builder.addCase(loginForm.fulfilled, (state, action) => {
      state.isLoading = false;
      state.authError = false;
      state.isLoggedIn = true;
      state.user = action.payload;
    });
    builder.addCase(loginForm.rejected, (state, action) => {
      state.isLoading = false;
      state.authError = action.payload;
      state.isLoggedIn = false;
      console.log("Error:", { message: action.payload.message });
    });
  },
});

export default signupSlice.reducer;

import { call, take, put } from "redux-saga/effects";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  forgotRequest,
  forgotSuccess,
  forgotFailure,
  updateRequest,
  updateSuccess,
  updateFailure,
  changePasswordRequest,
  changePasswordSuccess,
  changePasswordFailure,
} from "./index";

import { history } from "../history";

import { login, logout, signUp, forgotPassword, changePassword } from "../../services/auth"

import { setLoading } from "../global";
import { logoutUser } from "../../utils";

export function* handleLogin() {
  while (true) {
    try {
      const { payload } = yield take(loginRequest.type);
      yield put(setLoading(true));
      const response = yield call(login, payload);
      yield put(setLoading(false));
      yield put(loginSuccess(response));
      history.push("/");
    } catch (error) {
      yield put(loginFailure(error));
      yield put(setLoading(false));
    }
  }
}

export function* handleUpdateUser() {
  while (true) {
    try {
      const { payload } = yield take(updateRequest.type);
      yield put(setLoading(true));
      const response = yield call(login, payload);
      yield put(setLoading(false));
      yield put(updateSuccess(response));
      history.push("/");
    } catch (error) {
      yield put(updateFailure(error));
      yield put(setLoading(false));
    }
  }
}

export function* handleLogout() {
  while (true) {
    try {
      yield take(logoutRequest.type);
      yield put(setLoading(true));
      const response = yield call(logoutUser);
      yield put(setLoading(false));
      yield put(logoutSuccess(response));
      history.replace("/login");
    } catch (error) {
      const { code, message } = error;
      yield put(logoutFailure({ code, message }));
    }
  }
}

export function* handleSignUp() {
  while (true) {
    try {
      const { payload } = yield take(signUpRequest.type);
      yield put(setLoading(true));
      const response = yield call(signUp, payload);
      yield put(setLoading(false));
      yield put(signUpSuccess(response));
      history.push("/login");
    } catch (error) {
      yield put(signUpFailure(error));
    }
  }
}

export function* handleForgotPassword() {
  while (true) {
    try {
      const { payload } = yield take(forgotRequest.type);
      yield put(setLoading(true));
      const data = yield call(forgotPassword, payload);
      yield put(setLoading(false));
      yield put(forgotSuccess(data));
      if (payload.token) {
        history.push("/login");
      }
    } catch (error) {
      yield put(forgotFailure(error));
    }
  }
}

export function* handleChangePassword() {
  while (true) {
    try {
      const { payload } = yield take(changePasswordRequest.type);
      yield put(setLoading(true));
      const data = yield call(changePassword, payload);
      yield put(setLoading(false));
      yield put(changePasswordSuccess(data));
    } catch (error) {
      yield put(changePasswordFailure(error));
    }
  }
}

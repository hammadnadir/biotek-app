import { fork, all } from "redux-saga/effects";
import { handleLogin, handleLogout, handleSignUp, handleForgotPassword, handleChangePassword } from "./auth/saga";
export default function* rootSaga() {
  yield all([
    fork(handleLogin),
    fork(handleLogout),
    fork(handleSignUp),
    fork(handleForgotPassword),
    fork(handleChangePassword),
  ]);
}

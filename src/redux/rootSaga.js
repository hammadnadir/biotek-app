import { fork, all } from "redux-saga/effects";
import { handleLogin, handleLogout, handleSignUp, handleForgotPassword, handleChangePassword } from "./auth/saga";
import { handleCreateExpense, handleGetExpense } from "./expense/saga";
export default function* rootSaga() {
  yield all([
    fork(handleLogin),
    fork(handleLogout),
    fork(handleSignUp),
    fork(handleForgotPassword),
    fork(handleChangePassword),
    fork(handleGetExpense),
    fork(handleCreateExpense),
  ]);
}

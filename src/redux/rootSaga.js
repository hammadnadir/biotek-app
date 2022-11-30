import { fork, all } from "redux-saga/effects";
import { handleLogin, handleLogout, handleSignUp, handleForgotPassword, handleChangePassword } from "./auth/saga";
import { handleClearExpense, handleCreateExpense, handleDeleteExpense, handleEditExpense, handleGetExpense } from "./expense/saga";
import { handleEditVoucher, handleGetVoucher } from "./voucher/saga";
export default function* rootSaga() {
  yield all([
    fork(handleLogin),
    fork(handleLogout),
    fork(handleSignUp),
    fork(handleForgotPassword),
    fork(handleChangePassword),
    fork(handleGetExpense),
    fork(handleCreateExpense),
    fork(handleGetVoucher),
    fork(handleEditExpense),
    fork(handleDeleteExpense),
    fork(handleEditVoucher),
    fork(handleClearExpense)
  ]);
}

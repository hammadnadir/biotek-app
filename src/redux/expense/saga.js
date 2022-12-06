import { call, take, put } from "redux-saga/effects";
import {
  getExpenseRequest,
  getExpenseSuccess,
  getExpenseFailure,
  createExpenseRequest,
  createExpenseSuccess,
  createExpenseFailure,
  editExpenseRequest,
  editExpenseSuccess,
  editExpenseFailure,
  deleteExpenseRequest,
  deleteExpenseSuccess,
  deleteExpenseFailure,
  clearExpenseRequest,
  clearExpenseSuccess,
  clearExpenseFailure,
} from "./index";
import { clearExpense, createExpense, deleteExpense, editExpense, getExpense } from "../../services/expense";
import { setLoading } from "../global";
import { history } from "../history";

// export function* handleGetExpense() {
//   while (true) {
//     try {
//       // const { payload } = yield take(getExpenseRequest.type);
//       yield put(setLoading(true));
//       const response = yield call(getExpense, payload);
//       yield put(setLoading(false));
//       yield put(getExpenseSuccess(response));
//     } catch (error) {
//       yield put(setLoading(false));
//       yield put(getExpenseFailure(error));
//     }
//   }
// }
export function* handleGetExpense() {
  while (true) {
    try {
      const { payload } = yield take(getExpenseRequest.type);
      yield put(setLoading(true));
      const response = yield call(getExpense, payload);
      yield put(setLoading(false));
      yield put(getExpenseSuccess(response));
    } catch (error) {
      yield put(getExpenseFailure(error));
    }
  }
}

export function* handleCreateExpense() {
  while (true) {
    try {
      const { payload } = yield take(createExpenseRequest.type);
      yield put(setLoading(true));
      const response = yield call(createExpense, payload);
      yield put(setLoading(false));
      yield put(createExpenseSuccess(response));
      yield put(getExpenseRequest());
      history.push("/expense");
    } catch (error) {
      yield put(setLoading(false));
      yield put(createExpenseFailure(error));
    }
  }
}

export function* handleEditExpense() {
  while (true) {
    try {
      const { payload } = yield take(editExpenseRequest.type);
      yield put(setLoading(true));
      const response = yield call(editExpense, payload);
      yield put(setLoading(false));
      yield put(editExpenseSuccess(response));
      yield put(getExpenseRequest());
    } catch (error) {
      yield put(editExpenseFailure(error));
      yield put(setLoading(false));
    }
  }
}

export function* handleDeleteExpense() {
  while (true) {
    try {
      const { payload } = yield take(deleteExpenseRequest.type);
      yield put(setLoading(true));
      const response = yield call(deleteExpense, payload);

      // let shippings = yield select(shippingSelector);
      // const filterShipping = shippings.data.filter(
      //   (shipping) => shipping.id !== payload
      // );
      // yield put(updateShipping({ data: filterShipping }));
      yield put(setLoading(false));
      yield put(getExpenseRequest());
      yield put(deleteExpenseSuccess(response));
    } catch (error) {
      yield put(deleteExpenseFailure(error));
      yield put(setLoading(false));
    }
  }
}

export function* handleClearExpense() {
  while (true) {
    try {
      const { payload } = yield take(clearExpenseRequest.type);
      yield put(setLoading(true));
      const response = yield call(clearExpense, payload);
      history.push("/voucher");
      yield put(setLoading(false));
      yield put(getExpenseRequest());
      yield put(clearExpenseSuccess(response));
    } catch (error) {
      yield put(clearExpenseFailure(error));
      yield put(setLoading(false));
    }
  }
}
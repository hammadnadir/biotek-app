import { call, take, put, select } from "redux-saga/effects";
import {
  getExpenseRequest,
  getExpenseSuccess,
  getExpenseFailure,
} from "./index";
import { createExpense } from "../../services/expense";
import { setLoading } from "../global";

export function* handleGetExpense() {
  while (true) {
    try {
      const { payload } = yield take(getExpenseRequest.type);
      yield put(setLoading(true));
      const response = yield call(createExpense, payload);
      yield put(setLoading(false));
      yield put(getExpenseSuccess(response));
    } catch (error) {
      yield put(setLoading(false));
      yield put(getExpenseFailure(error));
    }
  }
}


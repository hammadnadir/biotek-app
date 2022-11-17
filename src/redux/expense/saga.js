import { call, take, put, select } from "redux-saga/effects";
import {
  getExpenseRequest,
  getExpenseSuccess,
  getExpenseFailure,
  createExpenseRequest,
  createExpenseSuccess,
  createExpenseFailure,
} from "./index";
import { createExpense, getExpense } from "../../services/expense";
import { setLoading } from "../global";
import { history } from "../history";

export function* handleGetExpense() {
  while (true) {
    try {
      const { payload } = yield take(getExpenseRequest.type);
      yield put(setLoading(true));
      const response = yield call(getExpense, payload);
      yield put(setLoading(false));
      yield put(getExpenseSuccess(response));
    } catch (error) {
      yield put(setLoading(false));
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
      history.push("/expense");
    } catch (error) {
      yield put(setLoading(false));
      yield put(createExpenseFailure(error));
    }
  }
}


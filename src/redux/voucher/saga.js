import { call, take, put } from "redux-saga/effects";
import {
    getVoucherRequest,
    getVoucherSuccess,
    getVoucherFailure
} from "./index";
import { setLoading } from "../global";
import { getVoucher } from "../../services/voucher";

export function* handleGetVoucher() {
  while (true) {
    try {
      const { payload } = yield take(getVoucherRequest.type);
      yield put(setLoading(true));
      const response = yield call(getVoucher, payload);
      yield put(setLoading(false));
      yield put(getVoucherSuccess(response));
    } catch (error) {
      yield put(setLoading(false));
      yield put(getVoucherFailure(error));
    }
  }
}


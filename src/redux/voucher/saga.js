import { call, take, put } from "redux-saga/effects";
import {
  getVoucherRequest,
  getVoucherSuccess,
  getVoucherFailure,
  getVoucherEditRequest,
  getVoucherEditSuccess,
  getVoucherEditFailure,
  getVoucherViewRequest,
  getVoucherViewSuccess,
  getVoucherViewFailure
  // getVoucherDeleteRequest,
  // getVoucherDeleteSuccess,
  // getVoucherDeleteFailure,
} from "./index";
import { setLoading } from "../global";
import { editVoucher, getVoucher, viewVoucher } from "../../services/voucher";
import { history } from "../history";
import { getExpenseRequest, setExpencesData, setViewData } from "../expense";

// export function* handleGetVoucher() {
//   while (true) {
//     try {
//       const { payload } = yield take(getVoucherRequest.type);
//       yield put(setLoading(true));
//       const response = yield call(getVoucher, payload);
//       yield put(setLoading(false));
//       yield put(getVoucherSuccess(response));
//     } catch (error) {
//       yield put(setLoading(false));
//       yield put(getVoucherFailure(error));
//     }
//   }
// }
export function* handleGetVoucher() {
  while (true) {
    try {
      const { payload } = yield take(getVoucherRequest.type);
      yield put(setLoading(true));
      const response = yield call(getVoucher, payload);
      yield put(setLoading(false));
      yield put(getVoucherSuccess(response));
    } catch (error) {
      yield put(getVoucherFailure(error));
    }
  }
}


export function* handleEditVoucher() {
  while (true) {
    try {
      const { payload } = yield take(getVoucherEditRequest.type);
      yield put(setLoading(true));
      const response = yield call(editVoucher, payload);
      yield put(setLoading(false));
      yield put(getVoucherEditSuccess(response));
      yield put(getExpenseRequest());
      history.push("/expense");
      yield put(setExpencesData(true));
    } catch (error) {
      yield put(getVoucherEditFailure(error));
    }
  }
}

export function* handleViewVoucher() {
  while (true) {
    try {
      const { payload } = yield take(getVoucherViewRequest.type);
      yield put(setLoading(true));
      const response = yield call(viewVoucher, payload);
      yield put(setLoading(false));
      yield put(getVoucherViewSuccess(response));
      history.push("/expense");
      // yield put(setExpencesData(true));
      yield put(setViewData(true));
    } catch (error) {
      yield put(getVoucherViewFailure(error));
    }
  }
}

// export function* handleDeleteVoucher() {
//   while (true) {
//     try {
//       const { payload } = yield take(deleteShippingRequest.type);
//       yield put(setLoading(true));
//       const response = yield call(deleteShipping, payload);

//       let shippings = yield select(shippingSelector);
//       const filterShipping = shippings.data.filter((shipping) => shipping.id !== payload);
//       yield put(updateShipping({ data: filterShipping }));
//       yield put(setLoading(false));

//       yield put(deleteShippingSuccess(response));
//     } catch (error) {
//       yield put(deleteShippingFailure(error));
//     }
//   }
// }

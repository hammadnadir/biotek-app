import { call, take, put } from "redux-saga/effects";
import {
  getVoucherRequest,
  getVoucherSuccess,
  getVoucherFailure,
  getVoucherEditRequest,
  getVoucherEditSuccess,
  getVoucherEditFailure,
  // getVoucherDeleteRequest,
  // getVoucherDeleteSuccess,
  // getVoucherDeleteFailure,
} from "./index";
import { setLoading } from "../global";
import { editVoucher, getVoucher } from "../../services/voucher";
import { history } from "../history";
import { setExpencesData } from "../expense";

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
      history.push("/expense");
      yield put(setExpencesData(true));
    } catch (error) {
      yield put(getVoucherEditFailure(error));
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

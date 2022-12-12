import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  voucher: {},
  viewVoucher: {},
  editVoucher: {},
  isLoadingVoucher: false
};

export const voucherSlice = createSlice({
  name: "voucher",
  initialState,
  reducers: {
    getVoucherRequest: (state) => {
      state.isLoadingVoucher = true;
    },
    getVoucherSuccess: (state, action) => {
      state.voucher = action.payload;
      state.isLoadingVoucher = false;
    },
    getVoucherFailure: (state, action) => {
      state.isLoadingVoucher = false;
      console.log("Error:", { message: action.payload.message });
    },
    getVoucherEditRequest: (state) => {
      state.isLoadingVoucher = true;
    },
    getVoucherEditSuccess: (state, action) => {
      state.editVoucher = action.payload;
      state.isLoadingVoucher = false;
    },
    getVoucherEditFailure: (state, action) => {
      state.isLoadingVoucher = false;
      console.log("Error:", { message: action.payload.message });
    },
    getVoucherViewRequest: (state) => {
      state.isLoadingVoucher = true;
    },
    getVoucherViewSuccess: (state, action) => {
      state.viewVoucher = action.payload;
      state.isLoadingVoucher = false;
    },
    getVoucherViewFailure: (state, action) => {
      state.isLoadingVoucher = false;
      console.log("Error:", { message: action.payload.message });
    },
    getVoucherDeleteRequest: (state) => {
      state.isLoadingVoucher = true;
    },
    getVoucherDeleteSuccess: (state, action) => {
      state.voucher = action.payload;
      state.isLoadingVoucher = false;
    },
    getVoucherDeleteFailure: (state, action) => {
      state.isLoadingVoucher = false;
      console.log("Error:", { message: action.payload.message });
    },
  },
});

export const {
  getVoucherRequest,
  getVoucherSuccess,
  getVoucherFailure,
  getVoucherEditRequest,
  getVoucherEditSuccess,
  getVoucherEditFailure,
  getVoucherDeleteRequest,
  getVoucherDeleteSuccess,
  getVoucherDeleteFailure,
  getVoucherViewRequest,
  getVoucherViewSuccess,
  getVoucherViewFailure
} = voucherSlice.actions;

export default voucherSlice.reducer;

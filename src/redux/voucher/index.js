import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  voucher: {},
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
    }
  },
});

export const {
  getVoucherRequest,
  getVoucherSuccess,
  getVoucherFailure,
} = voucherSlice.actions;

export default voucherSlice.reducer;

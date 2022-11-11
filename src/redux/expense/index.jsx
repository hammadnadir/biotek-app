import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expense: {},
  isLoadingExpense: false,
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    getExpenseRequest: (state) => {
      state.isLoadingExpense = true;
    },
    getExpenseSuccess: (state, action) => {
      state.expense = action.payload;
      state.isLoadingExpense = false;
    },
    getExpenseFailure: (state, action) => {
      state.isLoadingExpense = false;
      console.log("Error:", { message: action.payload.message });
    },
  },
});

export const {
  getExpenseRequest,
  getExpenseSuccess,
  getExpenseFailure,
} = expenseSlice.actions;

export default expenseSlice.reducer;

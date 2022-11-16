import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expense: {},
  isLoadingExpense: false,
  createExpense: {},
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
    createExpenseRequest: (state) => {
      state.isLoadingExpense = true;
    },
    createExpenseSuccess: (state, action) => {
      state.createExpense = action.payload;
      state.isLoadingExpense = false;
    },
    createExpenseFailure: (state, action) => {
      state.isLoadingExpense = false;
      console.log("Error:", { message: action.payload.message });
    },
  },
});

export const {
  getExpenseRequest,
  getExpenseSuccess,
  getExpenseFailure,
  createExpenseRequest,
  createExpenseSuccess,
  createExpenseFailure,
} = expenseSlice.actions;

export default expenseSlice.reducer;

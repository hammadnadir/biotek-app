import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddExpense from "../../components/addExpense";
import { Footer } from "../../components/common";
import { NavExpense } from "../../components/Expense";
import { getExpenseRequest } from "../../redux/expense";
import { getCurrentUser } from "../../utils";

function NewExpense() {
  const dispatch = useDispatch();

  const user = getCurrentUser();
  console.log(user?.data?.session_id);

  useEffect(() => {
    dispatch(getExpenseRequest());
  }, []);

  return (
    <div>
      <NavExpense />
      <AddExpense />
      <Footer />
    </div>
  );
}

export default NewExpense;
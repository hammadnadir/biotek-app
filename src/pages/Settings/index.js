import React from "react";
import AddExpense from "../../components/addExpense";
import { Footer } from "../../components/common";
import { NavExpense } from "../../components/Expense";

function Settings() {
  return (
    <div>
      <NavExpense />
      <AddExpense />
      <Footer />
    </div>
  );
}

export default Settings;

import React from "react";
import Footer from "../../components/common/Footer";
import { ListData, NavExpense } from "../../components/Expense";

function Expense() {
  return (
    <div>
      <NavExpense />
      <ListData />
      <Footer />
    </div>
  );
}

export default Expense;

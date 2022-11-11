import React from "react";
import AddExpense from "../../components/addExpense";
import { Footer } from "../../components/common";
import {  VoucherHeader } from "../../components/Vouchers";

function NewExpense() {
  return (
    <div>
      <VoucherHeader />
      <AddExpense />
      <Footer />
    </div>
  );
}

export default NewExpense;

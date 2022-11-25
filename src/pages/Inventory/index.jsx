import React from "react";
import { Footer } from "../../components/common";
import { NavExpense } from "../../components/Expense";
import InventoryData from "../../components/Inventory/InventoryData";

function Inventory() {
  return (
    <div>
      <NavExpense />
      <InventoryData />
      <Footer />
    </div>
  );
}

export default Inventory;

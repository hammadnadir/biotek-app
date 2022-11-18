import React, { useState } from "react";
import Footer from "../../components/common/Footer";
import { ListData, NavExpense } from "../../components/Expense";

function Expense() {
  const [searchVal, setSearchVal] = useState("");

  const handleSearchVal = (e) => {
    setSearchVal(e.target.value);
  };

  return (
    <div>
      <NavExpense setSearchVal={setSearchVal} searchVal={searchVal} handleSearchVal={handleSearchVal}/>
      <ListData  setSearchVal={setSearchVal} searchVal={searchVal} handleSearchVal={handleSearchVal}/>
      <Footer />
    </div>
  );
}

export default Expense;

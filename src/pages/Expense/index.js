import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/common/Footer";
import { ListData, NavExpense } from "../../components/Expense";
import { getExpenseRequest } from "../../redux/expense";

function Expense() {
  const [searchVal, setSearchVal] = useState("");

  const dispatch = useDispatch();
  const handleSearchVal = (e) => {
    setSearchVal(e.target.value);
  };
  const { editVoucher } = useSelector((state) => state.voucher);

  console.log(editVoucher);
  useEffect(() => {
    if (Object.keys(editVoucher).length === 0) {
      dispatch(getExpenseRequest());
    }
    // axios
    //   .get("http://192.168.10.189:8000/api/add_expense?unit_expense=1")
    //   .then(function (response) {
    //     console.log(response);
    //   });
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <NavExpense
        setSearchVal={setSearchVal}
        searchVal={searchVal}
        handleSearchVal={handleSearchVal}
      />
      <ListData
        setSearchVal={setSearchVal}
        searchVal={searchVal}
        handleSearchVal={handleSearchVal}
      />
      <Footer />
    </div>
  );
}

export default Expense;
